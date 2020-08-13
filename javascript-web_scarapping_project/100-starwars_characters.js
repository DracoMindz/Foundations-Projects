#!/usr/bin/node

// script prints all chracters of a Star Wars movie
const request = require('request')
const movurl = 'http://swapi.co/api/films/' + process.argv[2]
request.get(movurl, (err, response, body) => {
  if (err) throw err
  else {
    const characters = JSON.parse(response.body).characters
    for (let i = 0; i < characters.length; i++) {
      request.get(characters[i], (err, response, body) => {
        if (err) throw err
        else {
          console.log(JSON.parse(response.body).name)
        }
      })
    }
  }
})
