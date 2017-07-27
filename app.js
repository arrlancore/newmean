const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');
const cors=require('cors');
const passport=require('passport');
const mongoose=require('mongoose');
const config=require('./config/database');

// Connect to database
mongoose.connect(config.database);
// On connection db
mongoose.connection.on('connected', ()=>{
	console.log("Connected to db " + config.database);
})

// On connection error
mongoose.connection.on('error', (err)=>{
	console.log("database error " + err);
})

const users=require('./route/users');

// Run express as app
const app=express();

// Config the port number
const port=process.env.PORT || 8080;

// CORS middleware
app.use(cors());

// Body parser middleware
app.use(bodyParser.json())

// Parser middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

// User route
app.use('/users', users);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Index route
app.get('/', (req, res)=>{
	res.send('Invalid Endpoint');
});

app.get('*',(req,res)=>{
	res.sendFile(path.join(__dirname, 'public/index.html'));
})

// Start server
app.listen(port, () =>{
	console.log("Server started on the port number "+port);
});