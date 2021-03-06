const express = require('express')
const bodyParser = require('body-parser')
const keys = require('./keys')
const mongoose = require('mongoose')
const passport = require('passport')
const passportStrategy = require('./middleware/passport-strategy')

const authRoutes = require('./routes/auth.routes')

const app = express()

mongoose.connect(keys.MONGO_URI)
  .then(()=>console.log('MongoDB connected ...'))
  .catch(error => console.error(error))

app.use(passport.initialize())
passport.use(passportStrategy)

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use('/auth', authRoutes)

module.exports = app
