const express = require('express');
const config = require('config');
const morgan = require('morgan');
const Database = require('./Database/Config');

new Database().databaseConnection();
const PORT = config.get('PORT');

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use(require('./Routes/Subject'));
app.use(require('./Routes/Questions'));
app.use(require('./Routes/AddStudent'));
app.use(require('./Routes/GetStudent'));
app.use(require('./Routes/Validate'));


app.listen(PORT, ()=> console.log(`Server running in PORT : ${PORT}`));