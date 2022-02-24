// Dependencies.
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const flash = require('connect-flash');
const methodOverride = require('method-override');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const bodyParser = require('body-parser');
const { addAbortSignal } = require('stream');
const { rawListeners } = require('process');

// Require Models
const User = require('./models/user');

// Mongoose Connection
mongoose.connect('mongodb://localhost:27017/DispatchAppFullStack', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Handle Mongoose connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, " Connection Error:"));
db.once("open", () => {
    console.log("Database connected!")
})

app.use(express.json({strict:false}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())



app.engine('ejs', ejsMate)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.set('public', path.join(__dirname, 'public'))
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')))
const sessionConfig = {
    secret: 'thisshouldbeabettersecret!',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}

app.use(session(sessionConfig))
app.use(flash());

app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()));

// Store user in session. 
passport.serializeUser(User.serializeUser());
// Remove user from session.
passport.deserializeUser(User.deserializeUser())

app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})


app.get('/api', (req, res) =>{
    console.log("Router Hit!")
    res.send(JSON.stringify({ greeting: `Welcome to our API!` }));
})

app.post('/api/register', async (req, res) => {
    await User.deleteMany({}).then(()=>{
        console.log("All Users have been reset.")
    })
    console.log(req.body)

    try {

        // Create model instance.
        const {username, email, password} = req.body
        // Create new user from user model with username and password from register post route.
        const user = new User({ email, username })
        // Hello

        // creates new user into data base
        const registeredUser = await User.register(user, password);
        console.log('Regestered User: ', registeredUser)
        res.send(JSON.stringify(
            { 
                status: `Success`,
                user: {
                    id: registeredUser._id,
                    username: registeredUser.username,
                    email: registeredUser.email,
                } 
            }
        ));
    } catch (e) {
        res.send(JSON.stringify(
            { 
                status: `Error`,
                error: e 
            }
        ));
    }
})




app.post('/api/login', passport.authenticate('local', { failureRedirect: '/api/failureLogin'}), async (req, res) => {
    console.log("Login API was called: ", req.body)
    const {username} = req.body
    const loggedUser = await User.findOne({username: username})
    res.send(JSON.stringify(
        { 
            status: `successs`,
            response: loggedUser
        }
    ));
})



app.get('/api/failureLogin', function(req, res){
    res.send(JSON.stringify({
        status: 'error',
        message: 'email or password was incorrect.'
    }))
})


// Server Start up.
let port = 5000;
app.listen(port, () => {
    console.log(`Server Initialized on port ${port}`)
})