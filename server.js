const express = require('express')
const http = require('http')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'dist')))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})

const port = process.env.PORT || 3000
app.set('port', port)
const server = http.createServer(app)
app.listen(port, function () {
  console.log('Angular app listening on port 3000!')
})
