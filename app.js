const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

const list_of_students=
[
  {
    "name":"Judith",
    "course":"Chemistry"
  },
  
  {
    "name":"Precious",
    "course":"Computer "
  },

  {
    "name":"Goodness",
    "course":"Maths"
  },

  {
    "name":"Ezekiel",
    "course":"Physics"
  },

]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send('Not authorized!')
  })

  app.get('/logout', (req, res) => {
    res.send('Logged out!')
  })

  app.get('/list-of-students', (req, res) => {
    res.send(list_of_students)
    })

    app.get('/random-student', (req, res) => {
      let random_number=Math.floor(Math.random() * 4);
      res.send(list_of_students[random_number])
      })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
