const express = require('express');
const router = express.Router();

//@Route    GET api/auth
//@Desc     Get logged in user
//@Access   Private
router.get('/', (req,res) => {
    res.send("Get logged in user")
});

//@Route    POST api/auth
//@Desc     Auth users and get token
//@Access   Public
router.post('/', (req,res) => {
    res.send("Log in user")
});

module.exports = router;