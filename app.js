const express = require('express');
const indexRouter = require('./routes/index');
const ps3Router = require('./routes/ps3');
const path = require('path');
const _dirname = path.resolve();
const cookieParser = require('cookie-parser');

const app = express();


app.listen(3000, ()=>{
    console.log("Start listen in port 3000: http://localhost:3000");
});

app.set('view engine', 'pug');
app.set('views', path.join(_dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(_dirname, 'public')));



app.use('/', indexRouter);
app.use('/ps3', ps3Router);




module.exports = app;
