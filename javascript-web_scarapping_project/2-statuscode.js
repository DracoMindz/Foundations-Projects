#!/usr/bin/node

// script displays status code of a request
const request = require('request')
request(process.argv[2], function (error, response, body) {
  if (error) {
    console.log(error)
  } else {
    console.log('code:', response.statusCode)
  }
})
