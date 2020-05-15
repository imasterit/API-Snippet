# Takweya bot

> Bot helping students find their teachers for money

####DESCRIPTION
```
├── config.js #mongodb and telegram urls
├── index.js #entrance file with Lambda event receiving and database connection
├── languages
│   ├── ar_SA.txt #sample language data to load to i18n mongodb collection
│   └── en_US.txt #sample language data to load to i18n mongodb collection
├── src
│   ├── accountController.js #basic user functions like get user from db
│   ├── dashboard.js #dashboard menu display
│   ├── dbModels #mongoose models for mongoDB
│   ├── finiteStateMachine.js #main script starting/moving state machines
│   ├── formatting.js #preformat data to send to telegram
│   ├── languageController.js #language system related functions
│   ├── paymentController.js #for accepting payments
│   ├── processCommands.js #get data frin incoming Lambda events
│   ├── signInController.js #Login menu/password request and alike
│   ├── signUpController.js #all sign up routine with questioning
│   ├── stateMachines #state machines engine
│   │   ├── MachineFactories.js #index for creating machines
│   │   ├── MainMachine.js #main machine logic
│   │   ├── UserQuestionMachine.js #machine for students asking a question
│   │   └── UserRegistrationMachine.js #machine for registration
│   ├── subscriptionsController.js #functions related to subscribing to topics/getting questions
│   ├── telegramController.js #telegram interactions
│   ├── userProfile.js #user profile display/edit
│   ├── userQuestionsController.js #asking a question routine
│   ├── verificationController.js #checking user input data for validity/verification
│   └── wizIqController.js #interactions with WizIQ
├── test #tests files
├── webpack.config.js #webpack configuration
├── babel.config.js #Babel config
├── package.json #list of packages for yarn/npm
├── serverless.yml #AWS Lambda config
```

#####INSTALLATION
First you need to install serverless
```bash
npm install serverless -g
```

Install with
```bash
git clone https://github.com/zadahmed/TakweyaBot.git
cd TakweyaBot
yarn install
```

To run tests first install mongoDB
```bash
brew install mongodb
brew tap homebrew/services
brew services start mongodb
```

and then you can run tests with
```
yarn test
```

#
###DEPLOYMENT
install AWS CLI
https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html

configure it
```bash
aws configure
```

configure serverless
```bash
serverless configure aws --key $AWS_KEY --secret $AWS_SECRET
```

And deploy with
```bash
yarn deploy
```
#
#####To login to serverless web interface
```bash
serverless login
```
#
#####To store values to AWS SSM
```bash
aws ssm put-parameter --name $PARAMETER --type String --value $VALUE
```

#####To insert new language
Take a file from "languages" directory as sample
Translate values to the right from
```
                "Hello":  "Bonjour",
```
Log in to MongoDB
And insert to **i18n** collection like this
```
db.i18n.insert(
{
    "language": "fr-FR", //code of the language from http://class.api.wiziq.com/vc-language.xml //
    "languageName": "French", //Name of the language//
    "translation": {
            "default": {//namespace
                "Hello":  "Bonjour", //default translation lines
                "Bye": "Au revoir", //default translation lines
                //...and so on
            },
            "dashboard": { //specific parts of the bot with their own translation if needed
               "Hello": "Salut",
                "Bye": "Adieu",
            },
            "signIn": {
               "Please enter the password": "Se il vous plaît entrez le code de passe.",
               "password": "Mot de passe"
            },
        //...
    }
}
);
```
