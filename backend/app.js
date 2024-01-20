const express = require('express')
const app = express()

app.get('/sum',() =>{
    console.log('yes server is running in get')
})

app.listen(3000,() => {
    console.log('server running')
})