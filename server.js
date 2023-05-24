// Requires modules
const express = require('express')
const port = 3000;

// Create the express app
const app = express()

// Mount Routes

// Greetings Route
app.get('/greeting/:name', (req, res) => {
    res.send(`Hello, how are you ${req.params.name}?`)
})

// Tip Route
app.get('/tip/:total/:tipPercentage', (req, res) => {
    const total = req.params.total
    const tipPercentage = req.params.tipPercentage * .01
    const tip = total * tipPercentage
    res.send(`${tip}`)
})

// Magic 8 ball Route
app.get('/magic/:question', (req, res) => {
    const magicResponses = 
    [
    "It is certain", 
    "It is decidedly so", 
    "Without a doubt", 
    "Yes definitely",
    "You may rely on it", 
    "As I see it yes", 
    "Most likely", 
    "Outlook good",
    "Yes", 
    "Signs point to yes", 
    "Reply hazy try again", 
    "Ask again later",
    "Better not tell you now", 
    "Cannot predict now", 
    "Concentrate and ask again",
    "Don't count on it", 
    "My reply is no", 
    "My sources say no",
    "Outlook not so good", 
    "Very doubtful"
]

    const random = Math.floor(Math.random() * magicResponses.length - 1) + 1
    const magicResponse = magicResponses[random]
    res.send(
        `
        <h1>${req.params.question}?</h1>
        <h3>Magic 8 Ball: ${magicResponse}</h3>
        `)
})

let num1 = 0
let num2 = 1
let num3 = 0
app.get('/fibonacci/:number', (req, res) => {
    const userNum = parseInt(req.params.number)
    while (num3 < userNum) {
        num3 = num1 + num2
        if (num3 === userNum) break;
        num1 = num2
        num2 = num3
    }
    if (num3 === userNum) {
        res.send(`Very good, It is Fibonacci`)
    }
    else {
        res.send(`I can tell this is not a fibonacci number.`)
    }
})

// Tell the app to listen on port 3000
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})