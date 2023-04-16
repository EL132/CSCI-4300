//sudo killall node

const express = require('express');
const app = express();
app.get("/", (req, res) => res.send('Hello World!'));
const port = process.env.PORT || 3000;

const mongoose= require('mongoose');
const cors = require('cors');
const users = require('./routes/api/users');
const posts = require('./routes/api/posts');

//Connect Database
app.use(cors({ origin: true, credentials: true}));
app.use(express.json({ extended: false}));
app.use('/api/users', users);
app.use('/api/posts', posts);


app.get("/", (req, res) => res.send('Hello World!'));
app.get("/hi", (req, res) => res.send('hi'));
app.get("/*", (req, res) => res.send('bruh'));



const conn_str = 'mongodb+srv://mongo:mongo@democluster.fofpwl5.mongodb.net/?retryWrites=true&w=majority';

mongoose.set('strictQuery', false);
mongoose.connect(conn_str, {
  useUnifiedTopology : true,
  useNewUrlParser : true
})
.then(() => {
  app.listen(port);
  console.log('MongoDB Connection Suceeded...');
})
.catch(err => {
  console.log(`Error in DB Connection ${err}`)
});