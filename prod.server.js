const express = require('express')

const app = express()

app.use(express.static('build'))

app.listen(3333, error => {
  if (error) console.log(error)
  console.log('Server running at http://127.0.0.1:3333')
})
