const express = require('express');
const cors = require('cors');
const loginController = require('../controllers/user.controller');
const middleLogin = require('../middleware/login');

const app = express();

app.use(express.json());

app.use(cors());
app.post('/login',
// middleLogin.regexEmail,
// middleLogin.regexEmail,
middleLogin.existentUser,
loginController.getAll);

module.exports = app;
