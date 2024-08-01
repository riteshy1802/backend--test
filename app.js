const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const postRoutes = require('./routes/postRoute.js');
const userRoutes = require('./routes/userRoutes.js');

const app = express();
const port = 8080;

// Middleware
app.use(bodyParser.json());

//MongoDB : 
mongoose.connect("mongodb+srv://riteshrajyadav2006:abcd@blog--app.j4tgncj.mongodb.net/?retryWrites=true&w=majority&appName=blog--app", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const User = require('./models/user.js')
const Post = require('./models/post.js')

// Routes
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);

app.get('/api', (req, res) => {
  res.send('Hello, this is the main page');
});
app.get('/', (req, res) => {
  res.send('Slashz');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});