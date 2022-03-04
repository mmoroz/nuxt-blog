const express = require('express')
const app = express()

const routes = require('./app')
app.use(routes)

module.exports = app
