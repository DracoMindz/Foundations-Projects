#!/usr/bin/node

// script gets contents of webpage
const request = require('request')
const fs = require('fs')

request(process.argv[2], (error, response, body) => {
  if (error) {
    console.log(error)
  }
  fs.writeFile(process.argv[3], body, 'utf-8', (err) => {
    if (err) throw err
  })
})
