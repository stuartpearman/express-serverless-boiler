const serverless  = require('serverless-http'),
  express         = require('express'),
  app             = express()

app.set('view engine', 'pug')

app.get('/', function (request, response) {
  response.render('greeting', { greeting: 'welcome' })
})

app.get('/hey', function (request, response) {
    response.render('greeting', { greeting: 'hey' })
})

app.get('/yo', function (request, response) {
    response.render('greeting', { greeting: 'yo' })
})

module.exports.handler = serverless(app)