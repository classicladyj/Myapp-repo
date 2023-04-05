const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send('Not authorized!')
  })

  app.get('/logout', (req, res) => {
    res.send('Logged out!')
  })

  app.get('/getTime', (req, res) => {
    const currentDate = new Date();
    const options = { hour12: true };
    const currentTime = currentDate.toLocaleTimeString('en-US', options);
    res.send(`The current time is: ${currentTime}`);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

