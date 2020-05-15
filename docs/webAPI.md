<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Takweya bot web API](#takweya-bot-web-api)
    - [Making requests](#making-requests)
    - [Common requests](#common-requests)
      - [reportAnError](#reportanerror)
        - [body parameters](#body-parameters)
        - [return values](#return-values)
      - [getErrorReports](#geterrorreports)
        - [body parameters](#body-parameters-1)
        - [return values](#return-values-1)
      - [forgottenPassword](#forgottenpassword)
        - [return values](#return-values-2)
      - [changePassword](#changepassword)
        - [body parameters](#body-parameters-2)
        - [return values](#return-values-3)
      - [showWithdrawalProfile](#showwithdrawalprofile)
        - [return values](#return-values-4)
      - [changeWithdrawalProfile](#changewithdrawalprofile)
        - [body parameters](#body-parameters-3)
        - [return values](#return-values-5)
      - [getTransactionList](#gettransactionlist)
        - [body parameters](#body-parameters-4)
        - [return values](#return-values-6)
      - [getTotalRevenueForPeriod](#gettotalrevenueforperiod)
        - [body parameters](#body-parameters-5)
        - [return values](#return-values-7)
      - [rateUser](#rateuser)
        - [body parameters](#body-parameters-6)
        - [return values](#return-values-8)
      - [setUserOnline](#setuseronline)
        - [return values](#return-values-9)
      - [setUserOffline](#setuseroffline)
        - [return values](#return-values-10)
      - [reportToAdmin](#reporttoadmin)
        - [body parameters](#body-parameters-7)
        - [return values](#return-values-11)
      - [getTutoringHoursForPeriod](#gettutoringhoursforperiod)
        - [body parameters](#body-parameters-8)
        - [return values](#return-values-12)
      - [getAverageTutoringHoursForPeriod](#getaveragetutoringhoursforperiod)
        - [body parameters](#body-parameters-9)
        - [return values](#return-values-13)
      - [getTopics](#gettopics)
        - [body parameters](#body-parameters-10)
        - [return values](#return-values-14)
      - [getPicture](#getpicture)
        - [body parameters](#body-parameters-11)
        - [return values](#return-values-15)
      - [getRevenueForPeriod](#getrevenueforperiod)
        - [body parameters](#body-parameters-12)
        - [return values](#return-values-16)
    - [Logging in](#logging-in)
      - [userLogin](#userlogin)
        - [body parameters](#body-parameters-13)
        - [return values](#return-values-17)
    - [User profile](#user-profile)
      - [webUserProfile](#webuserprofile)
        - [body parameters](#body-parameters-14)
        - [return values](#return-values-18)
          - [sample profile:](#sample-profile)
      - [editUserProfile](#edituserprofile)
        - [body parameters](#body-parameters-15)
        - [return values](#return-values-19)
      - [saveVideoProfileLink](#savevideoprofilelink)
        - [body parameters](#body-parameters-16)
        - [return values](#return-values-20)
          - [sample return:](#sample-return)
      - [getVideoLink](#getvideolink)
        - [body parameters](#body-parameters-17)
        - [return values](#return-values-21)
    - [Admin commands](#admin-commands)
      - [completeWithdrawal](#completewithdrawal)
        - [body parameters](#body-parameters-18)
        - [return values](#return-values-22)
      - [deleteQuestion](#deletequestion)
        - [body parameters](#body-parameters-19)
        - [return values](#return-values-23)
      - [getUserList](#getuserlist)
        - [body parameters](#body-parameters-20)
        - [return values](#return-values-24)
      - [getTeacherList](#getteacherlist)
        - [body parameters](#body-parameters-21)
        - [return values](#return-values-25)
      - [getStudentList](#getstudentlist)
        - [body parameters](#body-parameters-22)
        - [return values](#return-values-26)
      - [getPendingTeacherList](#getpendingteacherlist)
        - [body parameters](#body-parameters-23)
        - [return values](#return-values-27)
      - [getAdminList](#getadminlist)
        - [body parameters](#body-parameters-24)
        - [return values](#return-values-28)
      - [getActiveSessionList](#getactivesessionlist)
        - [body parameters](#body-parameters-25)
        - [return values](#return-values-29)
      - [getFinishedSessionList](#getfinishedsessionlist)
        - [body parameters](#body-parameters-26)
        - [return values](#return-values-30)
      - [getSessionList](#getsessionlist)
        - [body parameters](#body-parameters-27)
        - [return values](#return-values-31)
      - [getQuestionList](#getquestionlist)
        - [body parameters](#body-parameters-28)
        - [return values](#return-values-32)
      - [getTotalNumberOfSessions](#gettotalnumberofsessions)
        - [body parameters](#body-parameters-29)
        - [return values](#return-values-33)
      - [getTotalNumberOfStudents](#gettotalnumberofstudents)
        - [body parameters](#body-parameters-30)
        - [return values](#return-values-34)
      - [getTotalNumberOfTeachers](#gettotalnumberofteachers)
        - [body parameters](#body-parameters-31)
        - [return values](#return-values-35)
      - [getSignupsForPeriod](#getsignupsforperiod)
        - [body parameters](#body-parameters-32)
        - [return values](#return-values-36)
      - [verifyUser](#verifyuser)
        - [body parameters](#body-parameters-33)
        - [return values](#return-values-37)
      - [rejectVerification](#rejectverification)
        - [body parameters](#body-parameters-34)
        - [return values](#return-values-38)
      - [deleteUser](#deleteuser)
        - [body parameters](#body-parameters-35)
        - [return values](#return-values-39)
      - [removeBalanceFromUser](#removebalancefromuser)
        - [body parameters](#body-parameters-36)
        - [return values](#return-values-40)
      - [addBalanceToUser](#addbalancetouser)
        - [body parameters](#body-parameters-37)
        - [return values](#return-values-41)
      - [setAddedPercentage](#setaddedpercentage)
        - [body parameters](#body-parameters-38)
        - [return values](#return-values-42)
      - [setTransactionFee](#settransactionfee)
        - [body parameters](#body-parameters-39)
        - [return values](#return-values-43)
      - [verifyUser](#verifyuser-1)
        - [body parameters](#body-parameters-40)
        - [return values](#return-values-44)
      - [getTotalStudentsWallet](#gettotalstudentswallet)
        - [return values](#return-values-45)
      - [getTotalTeachersWallet](#gettotalteacherswallet)
        - [return values](#return-values-46)
    - [Teacher commands](#teacher-commands)
      - [getTotalTutoringHours](#gettotaltutoringhours)
        - [return values](#return-values-47)
      - [getAverageSessionTime](#getaveragesessiontime)
        - [return values](#return-values-48)
      - [subscribeToTopic](#subscribetotopic)
        - [body parameters](#body-parameters-41)
        - [return values](#return-values-49)
      - [unsubscribeFromTopic](#unsubscribefromtopic)
        - [body parameters](#body-parameters-42)
        - [return values](#return-values-50)
      - [declineQuestion](#declinequestion)
        - [body parameters](#body-parameters-43)
        - [return values](#return-values-51)
      - [sendProposal](#sendproposal)
        - [body parameters](#body-parameters-44)
        - [return values](#return-values-52)
      - [getActiveQuestionList](#getactivequestionlist)
        - [body parameters](#body-parameters-45)
        - [return values](#return-values-53)
      - [getTotalRevenue](#gettotalrevenue)
        - [body parameters](#body-parameters-46)
        - [return values](#return-values-54)
      - [withdrawTheMoney](#withdrawthemoney)
        - [body parameters](#body-parameters-47)
        - [return values](#return-values-55)
    - [Student commands](#student-commands)
      - [acceptProposal](#acceptproposal)
        - [body parameters](#body-parameters-48)
        - [return values](#return-values-56)
      - [sendQuestion](#sendquestion)
        - [body parameters](#body-parameters-49)
        - [return values](#return-values-57)
      - [listProposals](#listproposals)
        - [body parameters](#body-parameters-50)
        - [return values](#return-values-58)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Takweya bot web API

### Making requests
All queries to the API must be served over HTTPS and need to be presented in this form:
https://7vq498tnpl.execute-api.us-east-2.amazonaws.com/dev/api?command=<command> Like this for example:
```
https://7vq498tnpl.execute-api.us-east-2.amazonaws.com/dev/api?command=userProfile
```
Body of request must contain the data in JSON format.
All requests but userLogin must contain JWT token in header:
```
Authorization: 'Bearer JWT_TOKEN' 
```

if JWT token is wrong or missing you will get

|code|body|
|----|----|
|401|{}|

### Common requests

#### reportAnError
Use this command to send an error report

##### body parameters
JSON Object
 
|parameter|description|
|---|---|
|description|of the error|
|url|url of the page|
|screenshot|
|consoleLogs|
|userAgent|

##### return values

|code|body|
|----|----|
|200|{}|
|400|{}|

#### getErrorReports
Use this command to get error reports

##### body parameters
JSON Object 
 
Array of:

|parameter|description|
|---|---|
|description|of the error|
|url|url of the page|
|screenshot|
|consoleLogs|
|userAgent|

##### return values

|code|body|
|----|----|
|200|{}|
|403|{message: "Access denied"}|
|400|{}|

#### forgottenPassword
Use this command to change current user password and get a new password to email

##### return values
|code|body|
|----|----|
|200|{}|
|400|{message: "Wrong user"}|
|400|{message: "User not found"}|

#### changePassword
Use this command to change user password

##### body parameters
Password string

##### return values
|code|body|
|----|----|
|200|{}|
|400|{message: "Wrong user"}|
|400|{message: "User not found"}|
|400|{message: "Failed changing password"}|

#### showWithdrawalProfile
Use this command to get withdrawal profile for the user

##### return values
|code|body|
|----|----|
|200|object with withdrawal profile|
|400|{message: "Wrong user"}|

#### changeWithdrawalProfile
Use this command to change withdrawal profile for the user

##### body parameters
JSON Object with the data to edit:
```
{
    "aba": {type: String},
    "bankName": {type: String},
    "accountNumber": {type: String},
    "recipientName": {type: String},
    "recipientAddress": {type: String},
    "iban": {type: String},
    "paypalEmail": {type: String},
}
```

##### return values
|code|body|
|----|----|
|200|changed object|
|400|{message: "Wrong user"}|
|400|{message: "Wrong data"}|

#### getTransactionList
Use this command to list transactions

##### body parameters
Optional JSON Object

|parameter|description|
|---|---|
|all|true to get all transactions for all users (ADMIN only)|
|limit|limit the number of answers to N
|skip|skip first N answers

##### return values
|code|body|
|----|----|
|200|array of objects|
|403|{message: "Access denied"}|
|400|{message: "Wrong user"}|
|400|{message: "Wrong data"}|

#### getTotalRevenueForPeriod
Get total revenue for a given period.
Available to ADMIN and TEACHER.

##### body parameters
Optional JSON Object with limits and filters for list

|parameter|description|
|---|---|
|from|Date starting in format "YYYY-MM-DD"|
|to|Date ending in format "YYYY-MM-DD"|
|limit|limit the number of answers to N
|skip|skip first N answers
 
##### return values

|code|body|
|----|----|
|200|number|
|403|{message: "Access denied"}|
|400|{message: "Wrong user"}|

#### rateUser
Use this command to rate a user after the class

##### body parameters

|parameter|description|
|---|---|
|question|questionId|
|user|user id to rate|
|rating|rate number 1-5|

##### return values

|code|body|
|----|----|
|200|{}|
|400|{message: "Missing data"}|
|400|{message: "Missing question id"}|
|400|{message: "Missing user id"}|
|400|{message: "Missing rating"}|
|400|{message: "Wrong rating"}|
|400|{message: "User to rate not found"}|
|400|{message: "Question not found"}|
|400|{message: "Class not found"}|
|400|{message: "Student rating already set"}|
|400|{message: "Teacher rating already set"}|

#### setUserOnline
Use this command to set user online

##### return values

|code|body|
|----|----|
|200|{}|

#### setUserOffline
Use this command to set user offline

##### return values

|code|body|
|----|----|
|200|{}|

#### reportToAdmin
Use this command to send a message to admins

##### body parameters
Data to report

##### return values

|code|body|
|----|----|
|200|{}|

#### getTutoringHoursForPeriod
Use this command to get tutoring hours per period

##### body parameters
Optional JSON Object with limits and filters for list

|parameter|description|
|---|---|
|from|Date starting in format "YYYY-MM-DD"|
|to|Date ending in format "YYYY-MM-DD"|
|range|"week" or "day" or "month" or year". Default is "day"
|filter|filter with {"studentId": "NNN"} or teacherId respectively
|limit|limit the number of answers to N
|skip|skip first N answers

example
```json
{"from": "2019-05-30", "to": "2019-12-01", "range": "week"}
```

##### return values
* if range is "week" it returns week number in year
* if range is "day" it returns day in format "YYYY-MM-DD"
* if range is "month" it returns "YYYY-MM" 
* if range is "year" it returns "YYYY"

|code|body|
|----|----|
|200|array of objects|
|403|{message: "Access denied"}|
|400|{message: "Wrong user"}|
|400|{message: "No questions found"}|

#### getAverageTutoringHoursForPeriod
Use this command to get average tutoring hours per period

##### body parameters
Optional JSON Object with limits and filters for list

|parameter|description|
|---|---|
|from|Date starting in format "YYYY-MM-DD"|
|to|Date ending in format "YYYY-MM-DD"|
|range|"week" or "day" or "month" or year". Default is "day"
|filter|filter with {"studentId": "NNN"} or teacherId respectively
|limit|limit the number of answers to N
|skip|skip first N answers

example
```json
{"from": "2019-05-30", "to": "2019-12-01", "range": "week"}
```

##### return values
* if range is "week" it returns week number in year
* if range is "day" it returns day in format "YYYY-MM-DD"
* if range is "month" it returns "YYYY-MM" 
* if range is "year" it returns "YYYY"

|code|body|
|----|----|
|200|array of objects|
|403|{message: "Access denied"}|
|400|{message: "Wrong user"}|
|400|{message: "No questions found"}|


#### getTopics
Use this command to get topics list

##### body parameters
none

##### return values
|code|body|
|----|----|
|200|Array of {id: topicId, name: translated to user locale}|
|400|{message: "User not found}|
|400|{message: "Topics not found"}|

example:
```json
[
  {
    "id": "5d3a64f0566e0f1840aa8a94",
    "name": "Geography"
  },
  {
    "id": "5d3a64f0566e0f1840aa8a91",
    "name": "Islamic Studies"
  }
]
```

#### getPicture
Use this command to get picture url

##### body parameters
picture Id

example:
```
5d678383ce089b0007105cbe
```

##### return values
|code|body|
|----|----|
|200|picture url|
|400|{message: "Wrong picture id"}|
|400|{message: "Can not find picture with such id"}|
|500|{message: "Can't get the picture"}|

#### getRevenueForPeriod
Use this command to get revenue per period

##### body parameters
Optional JSON Object with limits and filters for list

|parameter|description|
|---|---|
|from|Date starting in format "YYYY-MM-DD"|
|to|Date ending in format "YYYY-MM-DD"|
|range|"week" or "day" or "month" or year". Default is "day"
|filter|filter with {"studentId": "NNN"} or teacherId respectively
|limit|limit the number of answers to N
|skip|skip first N answers

example
```json
{"from": "2019-05-30", "to": "2019-12-01", "range": "week"}
```

##### return values
* if range is "week" it returns week number in year
* if range is "day" it returns day in format "YYYY-MM-DD"
* if range is "month" it returns "YYYY-MM" 
* if range is "year" it returns "YYYY"

|code|body|
|----|----|
|200|array of objects|
|403|{message: "Access denied"}|
|400|{message: "Wrong user"}|
|400|{message: "No questions found"}|

### Logging in
#### userLogin
Use this command to login and get a JWT token
##### body parameters
|parameter|description|
|---|---|
|email|User email to login|
|password|Password|

sample body:
```
{"email":"Ivan@ivanov.com", "password":"qwerty"}
```
##### return values
|code|body|
|----|----|
|200|{message: "login successful", token: JWT_TOKEN, user: user profile object}|
|401|{message: "no password"}|
|401|{message: "no email"}|
|401|{message: "wrong data"}|
|401|{message: "user not found"}|
|401|{message: "login failed"}|
|500|{message: "error generating token"}|

### User profile
#### webUserProfile
This command retrieves all user information but pictures/videos
To get pictures you must send a separate request with the id provided.

##### body parameters
plain user id for admin request

##### return values
|code|body|
|----|----|
|500|{message: "Can not get user profile"}|
|200|{user profile}|

###### sample profile:
```json
{
  "language": "en-US",
  "email": "Ivan@ivanov.com",
  "phoneNumber": 1234567,
  "roles": {
    "student": true,
    "teacher": false,
    "admin": false
  },
  "defaultGrade": 0,
  "isVerified": false,
  "isRegistered": true,
  "subscriptions": [],
  "availableToSubscribe": [],
  "questionsQueue": [],
  "messageCache": [],
  "busy": true,
  "_id": "5d3a464b67017000074e9a9d",
  "telegramId": 1234567,
  "profile": {
    "_id": "5d3a464b67017000074e9a9e",
    "userId": "5d3a464b67017000074e9a9d",
    "pictures": [],
    "documents": [],
    "topics": [],
    "questions": [
      "5d3a4e7031d53b00071362c8"
    ],
    "rate": 10,
    "rating": 5,
    "numberOfEvaluations": 0,
    "totalRating": 0,
    "telegramUsername": "ivan_ivanov",
    "createdAt": "2019-07-26T00:16:11.733Z",
    "updatedAt": "2019-07-26T00:51:52.102Z",
    "__v": 1,
    "firstName": "Ivan",
    "lastName": "Ivanov",
    "profilePicture": "5d3a46ce4464f70006079685",
    "lastQuestion": "5d3a4e7031d53b00071362c8",
    "profileVideo": {
      "_id": "5d619a04386aeb517223f6db",
      "contentType": "url",
      "data": "https://www.youtube.com/watch?v=4DJuOJoJYDw",
      "createdAt": "2019-08-24T20:11:52.079Z",
      "updatedAt": "2019-08-24T20:11:52.079Z",
      "__v": 0
    }
  },
  "state": "5d3a464b67017000074e9aa0",
  "createdAt": "2019-07-26T00:16:11.472Z",
  "updatedAt": "2019-07-26T01:57:09.564Z",
  "__v": 0
}
```

#### editUserProfile
Use this command to change user profile. In case some input is wrong it returns and array of error messages.

##### body parameters
JSON Object with the keys required to change like
```json
{"phoneNumber":999999,"profile":{"firstName":"Vasya"}}
```
##### return values
|code|body|
|----|----|
|200|{changed user profile}|
|500|{message: "Can not edit user profile"}|
|400|{message: "error", errors: [array of strings]}|

#### saveVideoProfileLink
Use this command to save a link to video to the profile.

##### body parameters
Video url. Example:
```
https://www.youtube.com/watch?v=4DJuOJoJYDw
```

##### return values
|code|body|
|----|----|
|200|{changed user profile}||
|400|{message: "Video link save failed"}|
|400|{message: "error", errors: String}|
|400|{message: "Video link save failed"}|

###### sample return:
```json
{
  "pictures": [],
  "documents": [],
  "topics": [],
  "questions": [
    "5d3a4e7031d53b00071362c8"
  ],
  "rate": 10,
  "rating": 5,
  "numberOfEvaluations": 0,
  "totalRating": 0,
  "_id": "5d3a464b67017000074e9a9e",
  "userId": "5d3a464b67017000074e9a9d",
  "telegramUsername": "ivan_ivanov",
  "createdAt": "2019-07-26T00:16:11.733Z",
  "updatedAt": "2019-08-24T20:11:48.303Z",
  "__v": 1,
  "firstName": "Ivan",
  "lastName": "Ivanov",
  "profilePicture": "5d3a46ce4464f70006079685",
  "lastQuestion": "5d3a4e7031d53b00071362c8",
  "profileVideo": {
    "_id": "5d619a04386aeb517223f6db",
    "contentType": "url",
    "data": "https://www.youtube.com/watch?v=4DJuOJoJYDw",
    "createdAt": "2019-08-24T20:11:52.079Z",
    "updatedAt": "2019-08-24T20:11:52.079Z",
    "__v": 0
  }
}
```

#### getVideoLink
Use this command to get a video link

##### body parameters
JSON Object with the video id. Example:
```json
{"id":"5d61928a7fc8b84c915ed3c6"}
```

##### return values
|code|body|
|----|----|
|200|url|
|400|{message: "Wrong video id"}|
|400|{message: "Can not find video with such id"}|
|400|{message: "Unsupported video format NNNNN"}|

NNNN is the wrong format name

### Admin commands
#### completeWithdrawal
Use this command to change a status of withdrawal

##### body parameters
plain withdrawal id

##### return values
|code|body|
|----|----|
|200|{}|
|400|{message: "Wrong user"}|

#### deleteQuestion
Use this command to delete a question

##### body parameters
plain question id

##### return values
|code|body|
|----|----|
|200|array of objects|
|400|{message: "Wrong user"}|
|400|{message: "Wrong question id"}|
|400|{message: "No question provided"}|
|400|{message: "Question not found"}|

#### getUserList
Use this command to get full list of all users

##### body parameters
Optional JSON Object with limits for list and filter.
example:
```json
{"limit": 10, "skip": 20,
 "filter": {"id_":"kjasdhfljkho23149867"}}
```

##### return values
|code|body|
|----|----|
|200|array of objects|
|403|{message: "Access denied"}|
|400|{message: "Wrong user"}|
|400|{message: "No users found"}|

#### getTeacherList
Use this command to get teacher list

##### body parameters
Optional JSON Object with limits for list
```json
{"limit": 10, "skip": 20}
```

##### return values
|code|body|
|----|----|
|200|array of objects|
|403|{message: "Access denied"}|
|400|{message: "Wrong user"}|
|400|{message: "No users found"}|

#### getStudentList
Use this command to get student list

##### body parameters
Optional JSON Object with limits for list
```json
{"limit": 10, "skip": 20}
```

##### return values
|code|body|
|----|----|
|200|array of objects|
|403|{message: "Access denied"}|
|400|{message: "Wrong user"}|
|400|{message: "No users found"}|

#### getPendingTeacherList
Use this command to get pending approval teacher list

##### body parameters
Optional JSON Object with limits for list
```json
{"limit": 10, "skip": 20}
```

##### return values
|code|body|
|----|----|
|200|array of objects|
|403|{message: "Access denied"}|
|400|{message: "Wrong user"}|
|400|{message: "No users found"}|

#### getAdminList
Use this command to get admin list

##### body parameters
Optional JSON Object with limits for list
```json
{"limit": 10, "skip": 20}
```

##### return values
|code|body|
|----|----|
|200|array of objects|
|403|{message: "Access denied"}|
|400|{message: "Wrong user"}|
|400|{message: "No users found"}|

#### getActiveSessionList
Use this command to get active sessions

##### body parameters
Optional JSON Object with limits for list
```json
{"limit": 10, "skip": 20}
```

##### return values
|code|body|
|----|----|
|200|array of objects|
|403|{message: "Access denied"}|
|400|{message: "Wrong user"}|
|400|{message: "No sessions found"}|

#### getFinishedSessionList
Use this command to get finished sessions

##### body parameters
Optional JSON Object with limits for list
```json
{"limit": 10, "skip": 20}
```

##### return values
|code|body|
|----|----|
|200|array of objects|
|403|{message: "Access denied"}|
|400|{message: "Wrong user"}|
|400|{message: "No sessions found"}|

#### getSessionList
Use this command to get all sessions

##### body parameters
Optional JSON Object

|parameter|description|
|---|---|
|student|id|
|teacher|id|
|limit|number|
|skip|number|


##### return values
|code|body|
|----|----|
|200|array of objects|
|403|{message: "Access denied"}|
|400|{message: "Wrong user"}|
|400|{message: "No sessions found"}|

#### getQuestionList
Use this command to get all questions

##### body parameters
Optional JSON Object

|parameter|description|
|---|---|
|all|true to get all questions|
|active|true or false|
|limit|limit the number of answers to N
|skip|skip first N answers
example
```json
{"limit": 10, "skip": 20, "active": true }
```

##### return values
|code|body|
|----|----|
|200|array of objects|
|403|{message: "Access denied"}|
|400|{message: "Wrong user"}|
|400|{message: "No questions found"}|

#### getTotalNumberOfSessions
Use this command to get number of sessions

##### body parameters
Optional JSON Object with filter for ClassHistory collection
For example
```json
{"teacherRate": { "$gte": 10 }}
```

##### return values
|code|body|
|----|----|
|200|number|
|403|{message: "Access denied"}|
|400|{message: "Wrong user"}|

#### getTotalNumberOfStudents
Use this command to get number of students

##### body parameters
Optional JSON Object with filter for User collection
For example
```json
{"language": "en-US"}
```

##### return values
|code|body|
|----|----|
|200|number|
|403|{message: "Access denied"}|
|400|{message: "Wrong user"}|

#### getTotalNumberOfTeachers
Use this command to get number of teachers

##### body parameters
Optional JSON Object with filter for User collection
For example
```json
{"language": "en-US"}
```

##### return values
|code|body|
|----|----|
|200|number|
|403|{message: "Access denied"}|
|400|{message: "Wrong user"}|

#### getSignupsForPeriod
Use this command to get number of teachers

##### body parameters
Optional JSON Object with limits and filters for list

|parameter|description|
|---|---|
|from|Date starting in format "YYYY-MM-DD"|
|to|Date ending in format "YYYY-MM-DD"|
|range|"week" or "day" or "month" or year". Default is "day"
|filter|"student" or "teacher" or "admin"
|limit|limit the number of answers to N
|skip|skip first N answers

example
```json
{"from": "2019-05-30", "to": "2019-12-01", "range": "week"}
```

##### return values
* if range is "week" it returns week number in year
* if range is "day" it returns day in format "YYYY-MM-DD"
* if range is "month" it returns "YYYY-MM" 
* if range is "year" it returns "YYYY"

|code|body|
|----|----|
|200|array of objects|
|403|{message: "Access denied"}|
|400|{message: "Wrong user"}|
|400|{message: "No questions found"}|

#### verifyUser
Use this command to get verify user

##### body parameters
Plain userID

##### return values
|code|body|
|----|----|
|200|{message: "Verified *userId*"}|
|403|{message: "Access denied"}|
|400|{message: "Already verified *userId*"}|
|400|{message: "User not found *userId*"}|

#### rejectVerification
Use this command to get reject user verification

##### body parameters
Plain userID

##### return values
|code|body|
|----|----|
|200|{}|

#### deleteUser
Use this command to delete user

##### body parameters
JSON Object with the filter
example
```json
{"email": "blabla@blabla.com"}
```

##### return values

|code|body|
|----|----|
|200|{message: "Deleted *filter*"}|
|403|{message: "Access denied"}|
|400|{message: "Wrong user"}|
|400|{message: "Not found *filter*"}|

#### removeBalanceFromUser
Use this command to remove balance from user

##### body parameters

|parameter|description|
|---|---|
|id|ID of a user to modify|
|balance|Balance to remove

##### return values

|code|body|
|----|----|
|200|user object|
|403|{message: "Access denied"}|
|400|{message: "Wrong user"}|
|400|{message: "Wrong data"}|
|400|{message: "Number is too big"}|

#### addBalanceToUser
Use this command to add balance to a user

##### body parameters

|parameter|description|
|---|---|
|id|ID of a user to modify|
|balance|Balance to add (by default 1000)|

##### return values

|code|body|
|----|----|
|200|user object|
|403|{message: "Access denied"}|
|400|{message: "Wrong user"}|
|400|{message: "Wrong data"}|

#### setAddedPercentage
Use this command to set percentage added to
teacher rate

##### body parameters
plain number ex. 
```
10
```

##### return values
|code|body|
|----|----|
|200|{message: "Done"}|
|403|{message: "Access denied"}|
|400|{message: "Wrong user"}|
|400|{message: "Wrong data"}|
|400|{message: "Not changed"}|
|500|{message: "Change failed"}|

#### setTransactionFee
Use this command to set transaction fee

##### body parameters
plain number ex. 
```
10
```

##### return values
|code|body|
|----|----|
|200|{message: "Done"}|
|403|{message: "Access denied"}|
|400|{message: "Wrong user"}|
|400|{message: "Wrong data"}|
|400|{message: "Not changed"}|
|500|{message: "Change failed"}|

#### verifyUser
Use this command to get verify user

##### body parameters
Plain userID

##### return values

|code|body|
|----|----|
|200|{message: "Verified *userId*"}|
|403|{message: "Access denied"}|
|400|{message: "Already verified *userId*"}|
|400|{message: "User not found *userId*"}|

#### getTotalStudentsWallet
Use this command to get a sum amount in all wallets of students

##### return values
|code|body|
|----|----|
|200|sum|
|400|{message: "Wrong user"}|
 
#### getTotalTeachersWallet
Use this command to get a sum amount in all wallets of teachers

##### return values
|code|body|
|----|----|
|200|sum|
|400|{message: "Wrong user"}|


### Teacher commands

#### getTotalTutoringHours
Use this command to get total tutoring hours

##### return values

|code|body|
|----|----|
|200|number|

#### getAverageSessionTime
Use this command to get average session time

##### return values

|code|body|
|----|----|
|200|number|

#### subscribeToTopic
Use this command to subscribe to topic

##### body parameters
JSON Object with topic id

|parameter|description|
|---|---|
|topic|topic ID|

example
```json
{"topic": "5d670659f9ea1f0007dcd492"}
```

##### return values

|code|body|
|----|----|
|200|{}|
|403|{message: "Access denied"}|
|400|{message: "Wrong data"}|
|400|{message: "No topic provided"}|
|400|{message: "Wrong topic id"}|

#### unsubscribeFromTopic
Use this command to unsubscribe from topic

##### body parameters
JSON Object with topic id

|parameter|description|
|---|---|
|topic|topic ID|

example
```json
{"topic": "5d670659f9ea1f0007dcd492"}
```

##### return values

|code|body|
|----|----|
|200|{}|
|403|{message: "Access denied"}|
|400|{message: "Wrong data"}|
|400|{message: "No topic provided"}|
|400|{message: "Wrong topic id"}|

#### declineQuestion
Use this command to decline a question

##### body parameters
question id

##### return values

|code|body|
|----|----|
|200|{}|
|403|{message: "Access denied"}|
|400|{message: "No question provided"}|
|400|{message: "Wrong question id"}|

#### sendProposal
Use this command to send a proposal

##### body parameters
JSON Object with question id

|parameter|description|
|---|---|
|question|question ID|

example
```json
{"question": "5d30caf629a67f88876879aa"}
```

##### return values

|code|body|
|----|----|
|200|number of proposals to that question|
|403|{message: "Access denied"}|
|400|{message: "Wrong user"}|
|400|{message: "No question provided"}|
|400|{message: "Wrong question id"}|
|400|{message: "Question not found"}|
|400|{message: "Proposal already sent"}|


#### getActiveQuestionList
Use this command to get active questions

##### body parameters
Optional JSON Object with limits for list
```json
{"limit": 10, "skip": 20}
```

##### return values
|code|body|
|----|----|
|200|array of objects|
|403|{message: "Access denied"}|
|400|{message: "Wrong user"}|
|400|{message: "No questions found"}|

#### getTotalRevenue
Use this command to get total revenue for user.
For admin user it returns company's revenue.

##### body parameters
Optional JSON Object with limits and filters for list

|parameter|description|
|---|---|
|from|Date starting in format "YYYY-MM-DD"|
|to|Date ending in format "YYYY-MM-DD"|
|id|User id to check (for Admin)|

example
```json
{"from": "2019-05-30", "to": "2019-12-01"}
```

##### return values

|code|body|
|----|----|
|200|number|
|403|{message: "Access denied"}|
|400|{message: "Wrong user"}|
|400|{message: "No questions found"}|

#### withdrawTheMoney
Use this command to request withdrawal

##### body parameters
JSON Object - where to withdraw paypal OR bank
 
|parameter|description|
|---|---|
|paypal|true|
|bank|true|

##### return values

|code|body|
|----|----|
|200|{}|
|400|{message: "Wrong user"}|
|400|{message: "Failed"}|

### Student commands

#### acceptProposal
Use this command to accept a proposal

##### body parameters
JSON Object
 
|parameter|description|
|---|---|
|teacher|teacher id|
|question|question id|

##### return values

|code|body|
|----|----|
|200|{question: questionId, classUrl: url to class}|
|403|{message: "Access denied"}|
|400|{message: "User not found"}|
|400|{message: "Wrong user"}|
|400|{message: "No teacher id provided"}|
|400|{message: "No question id provided"}|
|400|{message: "Wrong question id"}|
|400|{message: "Student not found"}|
|400|{message: "Insufficient funds"}|
|400|{message: "Teacher not found"}|
|400|{message: "Teacher busy"}|
|500|{message: "Something went wrong with the class opening"}|
|500|{message: "ERROR: ${error from wizIQ}"}|
|500|{message: "Something went wrong"}|

#### sendQuestion
Use this command to send a question

##### body parameters
JSON Object
 
|parameter|description|
|---|---|
|topicId|id of the topic|
|text|question text|
|pictures|[array of pictures]|

picture object format

|parameter|description|
|---|---|
|contentType|type of picture like "image/jpeg" etc.|
|data|base64 encoded picture|

##### return values

|code|body|
|----|----|
|200|{}|
|403|{message: "Access denied"}|
|400|{message: "User not found"}|
|400|{message: "Wrong user"}|
|400|{message: "Wrong data"}|
|400|{message: "Missing text"}|
|400|{message: "Missing topic"}|
|400|{message: "Wrong topic id"}|
|400|{message: "error", errors: [array of strings]}|
|400|{message: "Insufficient funds"}|
|400|{message: "No teachers"}|
|500|{message: "Send failed"}|


#### listProposals
Use this command to get teachers sent
proposals to the question.
If request from admin - list all questions
##### body parameters
JSON Object with limits and question ID

|parameter|description|
|---|---|
|question|question ID|
|limit|limit output|
|skip|skip first NN results|

example
```json
{
"question": "5d30caf629a67f88876879aa",
"limit": 10, 
"skip": 20}
```

##### return values

|code|body|
|----|----|
|200|teachers list/questions with teachers|
|403|{message: "Access denied"}|
|400|{message: "Wrong user"}|
|400|{message: "No question provided"}|
|400|{message: "Wrong question id"}|
|400|{message: "Question not found"}|
