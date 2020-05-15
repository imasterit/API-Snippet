'use strict';

process.env.NTBA_FIX_319 = true;

import uuidv4 from 'uuid/v4';
import mongoose from 'mongoose';
import * as AWS from 'aws-sdk';
import request from 'request';

mongoose.Promise = global.Promise;

import processCommands from './src/processCommands';
import runStateMachineWith from './src/finiteStateMachine';
import {uri} from './config';
import {parseWizIqEvent} from './src/wizIqController';
import {runWebApi} from "./src/webAPI";
import {typeformEvent} from "./src/typeformController";
import {websocketEvent} from "./src/websocketController";

//we must connect to db outside hour handler to make this connection reused
let conn = null;

let apigwManagementApi = null;

global.uuid = null;

global.messages = {};

/**
 * connectToDatabase
 * @returns {Promise<*>}
 */
async function connectToDatabase() {
    console.info("connecting to database", uri);

    if (!conn && mongoose.connection.readyState !== 1) {
        try {
            conn = await mongoose.connect(uri, {useNewUrlParser: true});
            console.log("Connection to MongoDB successful");
            return conn;
        } catch (err) {
            console.error("Failed to connect to MongoDB: ", err);
            throw new Error(err);
        }
    } else {
        console.info("Reusing existing connection to MongoDB");
    }
}

/**
 * processWizIqEvent
 * @param event
 * @returns {Promise<boolean|Promise<boolean|*>>}
 */
async function processWizIqEvent(event) {
    if (event.headers.hasOwnProperty('Content-Type') && event.headers['Content-Type'].indexOf('boundary=') > -1) {
        const processedCommandsObject = await parseWizIqEvent(event);
        console.info("processWizIqEvent", JSON.stringify(processedCommandsObject));
        return runStateMachineWith(processedCommandsObject);
    }
}

/**
 * processTelegramEvent
 * @param event
 * @returns {Promise<boolean|Promise<boolean|*>>}
 */
async function processTelegramEvent(event) {
    const processedCommandsObject = await processCommands(event);
    console.info("processTelegramEvent", JSON.stringify(processedCommandsObject));
    return runStateMachineWith(processedCommandsObject);

}

/**
 * processTypeformEvent
 * @param event
 * @returns {Promise<string>}
 */
async function processTypeformEvent(event) {
    return typeformEvent(event);
}

/**
 * processPaypalEvent
 * @param event
 * @returns {Promise<boolean>}
 */
async function processPaypalEvent(event, callback) {
//Read the IPN message sent from PayPal and prepend 'cmd=_notify-validate'
    var body = 'cmd=_notify-validate&' + event.body;

    console.log('Verifying');
    console.log(body);

    // //Return 200 to caller
    // callback(null, {
    //     statusCode: '200'
    // });

    var options = {
        url: 'https://ipnpb.paypal.com/cgi-bin/webscr',
        method: 'POST',
        headers: {
            'Connection': 'close'
        },
        body: body,
        strictSSL: true,
        rejectUnauthorized: false,
        requestCert: true,
        agent: false
    };

    //POST IPN data back to PayPal to validate
    request(options, function callback(error, response, body) {
        if (!error && response.statusCode === 200) {

            //Inspect IPN validation result and act accordingly
            if (body.substring(0, 8) === 'VERIFIED') {

                //The IPN is verified
                console.log('Verified IPN!');
            } else if (body.substring(0, 7) === 'INVALID') {

                //The IPN invalid
                console.log('Invalid IPN!');
            } else {
                //Unexpected response body
                console.log('Unexpected response body!');
                console.log(body);
            }
        }else{
            //Unexpected response
            console.log('Unexpected response!');
            console.log(response);
        }

    });

    // const body = "cmd=_notify-validate&mc_gross=10.00&protection_eligibility=Ineligible&address_status=confirmed&payer_id=2Y5TAFCER2K2J&address_street=3000+july+st%0D%0A3116&payment_date=07%3A28%3A31+Nov+20%2C+2019+PST&payment_status=Completed&charset=windows-1252&address_zip=70808&first_name=Nasser&mc_fee=0.74&address_country_code=US&address_name=Nasser+Alhosani&notify_version=3.9&custom=&payer_status=unverified&business=nasser%40takweya.com&address_country=United+States&address_city=Baton+Rouge&quantity=1&verify_sign=AbZnBHDq6Mr8ndEqiWvkyziwZznAA8slAGDUEgLZVyTpRnyEGb.b8P7X&payer_email=contact%40takweya.com&txn_id=2NH35226XD918133K&payment_type=instant&last_name=Alhosani&address_state=LA&receiver_email=nasser%40takweya.com&payment_fee=0.74&shipping_discount=0.00&insurance_amount=0.00&receiver_id=JPCKDHPNE5UEC&txn_type=web_accept&item_name=AED+37&discount=0.00&mc_currency=USD&item_number=&residence_country=US&receipt_id=4937-9822-0125-0189&shipping_method=Default&transaction_subject=&payment_gross=10.00&ipn_track_id=2fa4b0d40de3f"
    await procesPaypalPayment(body);

    return {
        code: 200,
        reply: {}
    };
}

/**
 * processWebApiEvent
 * @param event
 * @returns {Promise<string>}
 */
async function processWebApiEvent(event) {
    if (!event.queryStringParameters || !event.queryStringParameters.command) return {
        code: 403,
        reply: "wrong message"
    };

    return runWebApi(event.queryStringParameters.command, event);
}

async function processWebsocketEvent(event) {
    if (event.requestContext.routeKey === '$connect') {
        console.info("Got websocket connect", event.requestContext.connectionId);
    }

    // if (!event.body) return {
    //     code: 403,
    //     reply: "wrong message"
    // };

    return websocketEvent(event, apigwManagementApi);
}

//
// const tmp = {
//     headers:
//         {
//             Host: 'ffnvw3mr36.execute-api.us-east-2.amazonaws.com',
//             'x-api-key': '',
//             'x-restapi': ''
//         },
//     multiValueHeaders:
//         {
//             Host: ['ffnvw3mr36.execute-api.us-east-2.amazonaws.com'],
//             'x-api-key': [''],
//             'x-restapi': ['']
//         },
//     requestContext:
//         {
//             routeKey: '$disconnect',
//             messageId: null,
//             eventType: 'DISCONNECT',
//             extendedRequestId: 'fWPMmERqiYcFj_Q=',
//             requestTime: '01/Sep/2019:16:58:31 +0000',
//             messageDirection: 'IN',
//             stage: 'dev',
//             connectedAt: 1567357049037,
//             requestTimeEpoch: 1567357111076,
//             identity:
//                 {
//                     cognitoIdentityPoolId: null,
//                     cognitoIdentityId: null,
//                     principalOrgId: null,
//                     cognitoAuthenticationType: null,
//                     userArn: null,
//                     userAgent:
//                         'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36',
//                     accountId: null,
//                     caller: null,
//                     sourceIp: '37.252.121.221',
//                     accessKey: null,
//                     cognitoAuthenticationProvider: null,
//                     user: null
//                 },
//             requestId: 'fWPMmERqiYcFj_Q=',
//             domainName: 'ffnvw3mr36.execute-api.us-east-2.amazonaws.com',
//             connectionId: 'fWPC6chAiYcCHgg=',
//             apiId: 'ffnvw3mr36'
//         },
//     isBase64Encoded: false
// }
const createAWSapi = (event) => {
    if (apigwManagementApi === null) {
        console.info("Creating websocket apigwManagementApi domain", process.env.WEBSOCKET_DOMAIN,
            "event.requestContext.stage", event.requestContext.stage);
        apigwManagementApi = new AWS.ApiGatewayManagementApi({
            apiVersion: '2019-09-14',
            endpoint: process.env.WEBSOCKET_DOMAIN + '/' + process.env.WEBSOCKET_STAGE
        });
    }
};

/**
 * Gets incoming Lambda event from outside
 * @param event
 * @param context
 * @returns {Promise<{body: string, statusCode: number}>}
 */
export const incomingEvent = async (event, context, callback) => {
    // const result = oldEventsDrop(event);
    // if(result !== false) return result;

    let error = 'We got an error';
    global.event = event;

    if (!global.uuid) global.uuid = uuidv4();

    if (event.requestContext && event.requestContext.routeKey)
        console.info("got websocket event:", event, typeof event, 'context', context.invokedFunctionArn, 'environment', process.env);
    else
        console.info("got event:", event, typeof event, 'context', context.invokedFunctionArn, 'environment', process.env);

    try {
        //this line is critical for re-use of database connection
        context.callbackWaitsForEmptyEventLoop = false;

        await connectToDatabase();

        createAWSapi(event);

        // await initLanguage();

        let reply, code = 200;
        switch (event.path) {
            case '/api':
                ({code, reply} = await processWebApiEvent(event));
                // if(typeof reply === 'object') {
                //     reply = {requestType: event.queryStringParameters.command, ...reply}
                // }
                break;
            case '/index':
                reply = await processTelegramEvent(event);
                if (reply) reply = true;
                break;
            case '/wiziq-events':
                reply = await processWizIqEvent(event);
                break;
            case '/typeform':
                reply = await processTypeformEvent(event);
                break;
            case '/pp-ipn':
                reply = await processPaypalEvent(event, callback);
                break;
            default:
                if (event.requestContext && event.requestContext.routeKey)
                    reply = await processWebsocketEvent(event);
                break;
        }


        if (reply !== undefined && reply !== false) {
            if (reply.headers) {
                return {
                    statusCode: code,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Credentials': true,
                        ...reply.headers
                    },
                    body: reply.body,
                    isBase64Encoded: reply.isBase64Encoded
                }
            }
            //         headers:
            //         {
            //         “Content-Type”: “image/png”
            //         },
            //     body: image.toString(‘base64’),
            //     isBase64Encoded: true
            // };
            console.info(">>>>>handler ended", reply);
            return {
                statusCode: code,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true
                },
                body: JSON.stringify(reply
                    // {
                    // message: 'Your ENTIRE function executed successfully!',
                    // input: event,
                    // }
                    , 0, 2),
            };
        } else {
            error = "wrong event: " + JSON.stringify(event);
        }
    } catch (err) {
        error = err.message;
    }

    console.info(">>>>>handler failed with err:", error, 'event.resource',event.resource);

    if(event.resource == '/index') {
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true
            }
        }
    }

    if(process.env.NODE_ENV == 'prod'){
        return {
            statusCode: 400,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true
            },
            body: {}
        };
    } else {
        return {
            statusCode:400,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true
            },
            body: JSON.stringify({
                message: error,
                input: event,
            }, 0, 2),
        };
    }
};


const creationDateFull = new Date();
const creationDate = Math.round((creationDateFull.getTime()) / 1000) - 30;
const messagesIds = {};
function oldEventsDrop(event) {
    if (event.body) {
        console.info("got event with body", event.update_id);
        try {
            event = Object.assign({}, JSON.parse(event.body));
        } catch (e) {
            console.error("Got error processing event", e);
        }
        // console.info("processed event",event);

        if (event.message && event.message.date) {
            if (event.message.date < creationDate) {
                console.info("GOT AN OLD MESSAGE - DROPPING",
                    event.message.date, creationDate);
                return {statusCode: 200};
            }
        }
        if (event.callback_query && event.callback_query.message.date) {
            if (event.callback_query.message.date < creationDate) {
                console.info("GOT AN OLD MESSAGE - DROPPING",
                    event.callback_query.message.date, creationDate);
                return {statusCode: 200};
            }
        }

        if (event.update_id) {
            if (messagesIds[event.update_id]) {
                console.info("GOT AN OLD MESSAGE - DROPPING",
                    event.update_id);
                return {statusCode: 200};
            }

            messagesIds[event.update_id] = true;
            console.info('id not found', messagesIds);
        }
    }

    return false;
}
