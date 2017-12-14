GitHub source : https://github.com/Coder-Academy-Patterns/yarra/tree/challenges-c

- Terminal
$ git clone -b challenges-a https://github.com/Coder-Academy-Patterns/yarra.git


- cd api folder and web folder to run
$ yarn install

## BACKEND SETUP
- deployment using ZEIT
download directly from source : https://zeit.co or install using below:-
> 5-yarra-challenges-c > api
$ yarn add now --dev
$ ./node_modules/.bin/now login

## MONGODB SET UP
- deployment using mLab
https://mlab.com
- sign up
- plan & pricing
- click on add user database

$  yarn add dotenv --dev

- api >server.js
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

- create file to to the root of the api folder
.ENV
production.env

- api > models > init.js change the mongodb://localhost/yarra to (remember to place a comma)
mongoose.connect(
    process.env.MONGO_URI,


- api > middleware > auth.js
const jwtSecret = process.env.JWT_SECRET to replace the testing password '.]y#rg9C43evhEsy'

- api > .ENV(copy the uri) and goto password generator (source : https://passwordsgenerator.net) to get the 
MONGO_URI = mongodb://localhost/yarra
JWT_SECRET = nEfy'"'7=jV4;yL:

- goto the gitinore at the root of the project and update .env to *.env

-api > {} package.json and add the below

 "start": "node server.js"

 - Goto the mlab browser Database: yarracoder to copy the MongoDB : 

 MONGO_URI = mongodb://yarracoder:yarracoder@ds137206.mlab.com:37206/yarracoder

 - and paste it to production.env and update the username and password

## HOW TO DEPLOY
- run to deploy
 $ ./node_modules/.bin/now -E production.env

- The system will run and get the uri from Ready! https://yarra-api-sybamxgemr.now.sh and paste it to the browser 


>  The max. is 3 deployments are allowed. To look at what servers have been deployed
$ ./node_modules/.bin/now ls

- To remove, use ./node_modules/.bin/now rm the-name

$ ./node_modules/.bin/now rm yarra-api-qhdquuyxl.now.sh

- Redeploy: -
$ ./node_modules/.bin/now -E production.env

> To Test the deployment is working, use production.http
- run the register first
- then run sign in to get the token key
- 


$ now alias https://yarra-api-lcicsajxzj.now.sh /yarra-api20


## FRONTEND DEPLOYMENT
> web > .env.local
REACT_APP_API_URI = http://localhost:7100

> web > api > init
 baseURL: process.env.REACT_APP_API_URL

- Restart the server again

- to test the local server is active or not, place the console in init.js
console.log('process.env.REACT_APP_API_URL', process.env.REACT_APP_API_URL)

> create web > .env.production and paste the url onto it
REACT_APP_API_URL = https://yarra-api-lcicsajxzj.now.sh/

- to compile all your code, run the below. It will create a build folder
$ yarn build