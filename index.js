const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello World from Bosnia/Tuzla!</h1>
    <p>Welcome to my Express.js application.</p>
  `);
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})