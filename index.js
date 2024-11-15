require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/rishikar',(req,res)=>{
    res.send('This is rishikar')
})

app.get('/hello',(req,res)=>{
  res.send('<h1>Git hub profile</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})