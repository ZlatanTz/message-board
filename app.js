const express = require('express')
const path = require("node:path");

const app = express()



app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));


const messages = [
   {
     text: "Hi there!",
     user: "Sanja",
     added: new Date()
   },
   {
     text: "Hello World!",
     user: "Zlatan",
     added: new Date()
   }
 ];
 

app.get('/', (req, res) => {
   res.render('index', {messages : messages})

})

app.get('/new', (req, res) => {
   res.render('form')
})

app.post('/new', (req, res) => {
   const {authorName, messageText} = req.body;
   messages.push({text: messageText, user: authorName, added : new Date()})
   res.redirect('/')
})

app.listen(2501, () => {
   console.log('listening port 2501');
})