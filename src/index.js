const path=require('path');
const express = require('express');//thư viện vừa cài
const morgan =require('morgan');
const app = express();//đối tượng app
const handlebars = require('express-handlebars');
const csurf=require('csurf');
var cookieSession = require('cookie-session')
const session  = require('express-session');
const cookieParser = require("cookie-parser");
const methodOverride=require('method-override');
const port = 3000;//cổng của web


const route =require('./routes');
const db =require('./config/db');
// const { METHODS } = require('http');

//connect to db
db.connect();
//đường dẫn css
app.use(express.static(path.join(__dirname, 'public')));
//route tuyết đường
// app.use(morgan('combined'));
app.use(methodOverride('_method'));

app.use(express.urlencoded({
  extended:true
}));

app.use(express.json());
app.use(cookieParser());
// app.use(cookieSession({
//   name: 'session',
//   keys: ["nmt"],
//   maxAge: 24 * 60 * 60 * 1000, // 24 hours
// }))
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 24 * 60 * 60 * 1000},
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
}));

app.engine('hbs', handlebars.engine({
  extname:'.hbs',
  helpers: {
    sum: (a ,b) => a+b,
  }
}));
//template engine
app.engine('handlebars', handlebars.engine());
app.set('view engine','handlebars');
app.set('views', path.join(__dirname, 'resources','views'));



route(app);




app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
