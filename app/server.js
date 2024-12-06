const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Test route
app.get('/test', (req, res) => {
    res.json({ message: 'Hello world' });
  res.send('Hello World!')

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})