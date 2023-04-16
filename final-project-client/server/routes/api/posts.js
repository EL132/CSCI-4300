const express = require('express');
const router = express.Router();

const Post = require('../../models/Post');

//endpoints

router.get('/', (req, res) => {
    Post.find()
    .then((posts) => res.json(posts))
    .catch((err) => res.status(404).json({ nouserfound: 'No Posts found'}));
});
router.get('/:id', (req, res) => {
    Post.findById(req.params.id)
    .then((post) => res.json(post))
    .catch((err) => res.status(404).json({ nouserfound: 'No post found'}));
});
router.put('/:id', (req, res) => {
    Post.findByIdAndUpdate(req.params.id, req.body)
    .then((post) => res.json({ msg: 'Updated'}))
    .catch((err) => res.status(400).json({ error: 'Unable to update'}));
});
router.delete('/:id', (req, res) => {
    Post.findByIdAndRemove(req.params.id, req.body)
    .then((user) => res.json({ msg: 'Deleted'}))
    .catch((err) => res.status(404).json({ error: 'No such post exists'}));
});
router.post('/', (req, res) => {
    Post.create(req.body)
    .then((post) => res.json({ msg: 'Post added!'}))
    .catch((err) => res.status(400).json({ error: 'Unable to add!'}));
});

module.exports = router;