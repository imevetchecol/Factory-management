const userWSServices = require('../services/userWSServices')

const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Entry Point: http://localhost:3000/auth

router.post('/login', async(req, res) => {

    // get the username and email from the request body
    const { username, email } = req.body;

    // get all users from jsonplaceholder WS
    const allUsers = await userWSServices.getAllusersFromWS()

    // Search username and password from all users
    const existUser = allUsers.find((element) => element.username === username && element.email === email);
    
    // if 'username' and 'password' are exist in the DB
    if (existUser) {
        const userFullNmae = existUser.name
        const userId = existUser.id;
        const SECRET_KEY = 'someSecret_key';
        const token = jwt.sign({ id: userId }, SECRET_KEY, { expiresIn: '1h' });  
        // Saving the token and username in a obj and sending a response.
        const responseData = {
            token: token,
            userName: userFullNmae
        }
        res.json(responseData);
    }
    else{
        // If the user does not exist an error message will be displayed
        res.status(401).json({ error: "The user doesn't exist, please enter a valid username" });
    }
});

module.exports = router;
