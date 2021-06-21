const express = require('express');
const router = express.Router();

//@Route    GET api/contacts
//@Desc     Get Contacts User
//@Access   Private
router.get('/', (req,res) => {
    res.send("Get Contacts User")
})

//@Route    POST api/contacts
//@Desc     Add Contacts User
//@Access   Private
router.post('/', (req,res) => {
    res.send("Add Contacts User")
})

//@Route    PUT api/contacts:id
//@Desc     Update Contacts User by id
//@Access   Private
router.put('/:id', (req,res) => {
    res.send("Update Contacts User")
})

//@Route    DELETE api/contacts
//@Desc     Delete Contacts User by id
//@Access   Private
router.delete('/:1', (req,res) => {
    res.send("Delete Contacts User")
})

module.exports = router;