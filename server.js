require('dotenv').config()

const express = require('express')
const app = express()
const session = require('express-session')

const userRoutes = require('./routes/routes')

app.set('view engine' , 'ejs')

app.use(session({
    resave : false,
    saveUninitialized : true,
    secret : process.env.SESSION_SECRET
}))

app.use(userRoutes)

app.listen(3000, ()=>{
    console.log('server is running');
})