const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
//Initialiazations
const app = express();
require('./database');
//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    patialsDir: path.join(app.get('views'), 'partials'),
    extname:'.hbs'
}));
app.set('view engine', '.hbs');
//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret:'mysecretapp',
    resave:true,
    saveUninitialized:true
}));
//Global Variables

//Routes
app.use(require('./routes'));
app.use(require('./routes/paciente'));
app.use(require('./routes/profesional'));
app.use(require('./routes/schedule'));
app.use(require('./routes/turno'));
app.use(require('./routes/obraSocial'));
app.use(require('./routes/practica'));
//Static Files
app.use(express.static(path.join(__dirname,'public')));
//Server is listenning
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});