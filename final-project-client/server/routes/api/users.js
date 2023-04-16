const express = require('express');
const router = express.Router();

const User = require('../../models/User');

//endpoints

router.get('/', (req, res) => {
    User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(404).json({ nouserfound: 'No Users found'}));
});
router.get('/:id', (req, res) => {
    User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(404).json({ nouserfound: 'No User found'}));
});
router.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
    .then((user) => res.json({ msg: 'Updated'}))
    .catch((err) => res.status(400).json({ error: 'Unable to update'}));
});
router.delete('/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id, req.body)
    .then((user) => res.json({ msg: 'Deleted'}))
    .catch((err) => res.status(404).json({ error: 'No such user exists'}));
});
router.post('/', (req, res) => {
    User.create(req.body)
    .then((item) => res.json({ msg: 'Item added!'}))
    .catch((err) => res.status(400).json({ error: 'Unable to add!'}));
});

module.exports = router;
