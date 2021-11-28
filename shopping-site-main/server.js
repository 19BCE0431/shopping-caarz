require('./models/db');
const express= require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const orderController = require('./controllers/orderController');
const { engine } = require('express-handlebars');

var app=express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname,'/public')));
app.set('views',path.join(__dirname,'views'));
// app.engine('hbs',exphbs({
//     extname: 'hbs',
//     defaultLayout:'mainLayout',
//     layoutDir:__dirname+'/views/'
// }));

app.engine('handlebars', engine({ extname: '.hbs', defaultLayout: "mainLayout",layoutDir:__dirname+'/views/'}));
app.set('view engine', 'handlebars');
// app.set("views", "./views");

app.set('view engine','hbs');
app.listen(3000,()=>{
    console.log('Server on port: 3000');
});
app.use('/',orderController);
