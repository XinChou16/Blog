const express = require('express')

const app = express()

app.use(express.static('static'))

app.listen(8000, () => {
  console.log('Run at port 8000')
})
