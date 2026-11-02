const express = require('express')
const pokeneaRoutes = require('./routes/pokeneaRoutes')

const app = express()

app.use('/', pokeneaRoutes)

module.exports = app
