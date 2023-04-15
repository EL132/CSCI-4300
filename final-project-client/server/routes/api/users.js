const express = require('express');
const router = express.Router();

const User = require('../../models/User');

//endpoints
router.get('/', (req, res) => {res.send('testing get / user route')});
router.get('/:id', (req, res) => {res.send('testing get / user :id route')});
//router.post('/', (req, res) => {res.send('testing post / user route')});
router.put('/:id', (req, res) => {res.send('testing put / user :id route')});
router.post('/', (req, res) => {
    User.create(req.body)
    .then((item) => res.json({ msg: 'Item added!'}))
    .catch((err) => res.status(400).json({ error: 'Unable to add!'}));
});

module.exports = router;
