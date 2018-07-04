const { exec } = require('child_process')
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  exec('fswebcam public/image.jpg -r 720x1280 --no-banner', () => {
    res.send(`<html>
      <head></head>
      <body>
        <img src="/image.jpg" />
      </body>
      </html>`)
  })
})

app.use(express.static('public'))

app.listen(3030)