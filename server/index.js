const express = require('express');
const cors = require('cors');
const connectDB = require('./configs/db');

const usersController = require('./controllers/usersController');
const departmentController = require('./controllers/departmentController')
const loginAuth = require('./controllers/loginAuth')
const employeeController = require('./controllers/employeeController')
const shiftController = require('./controllers/shiftController')
const actionsController = require('./controllers/actionsController')

const app = express();
const PORT = 3000;

connectDB();
app.use(express.json());

app.use(cors());

//app.use('/', express.json());

app.use('/savejson', actionsController);

app.use('/auth', loginAuth);

app.use('/menu', loginAuth);

app.use('/users', usersController);

app.use('/department', departmentController);

app.use('/employees', employeeController);

app.use('/shifts', shiftController);




app.listen(PORT, () => {
  console.log(`app is listening at http://localhost:${PORT}`);
});


//userWS.getAllusersFromWS()