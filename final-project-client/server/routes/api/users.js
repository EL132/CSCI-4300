const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const auth = require("../../middleware/auth");

//signup route
router.post("/signup", async (req, res) => {
    try {
        const { username, password } = req.body;
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res
            .status(400)
            .json({ msg: "Username already taken "});
        }
        const hashedPassword = await bcryptjs.hash(password, 8);
        const newUser = new User({ username, password: hashedPassword });

        const savedUser = await newUser.save();
        console.log(savedUser.username);
        res.json(savedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// login route
router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            console.log({ username });
            return res
            .status(400)
            .send({ msg: "User does not exist"});
        }
        const isMatch = await bcryptjs.compare(password, user.password);

        if(!isMatch) {
            return res.status(400).send({ msg: "Incorrect Password" });
        }
        const token = jwt.sign({ id: user._id }, "passwordKey");
        //res.json({ token, user: { id: user._id, username: user.username }});
        res.json({ msg: "Signed In" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//check token valid
router.post("/tokenIsValid", async (req, res) => {
    try {
        const token = req.header("x-auth-token");
        if (!token) return res.json(false);
        const verified = jwt.verify(token, "passwordKey");
        if (!verified) return res.json(false);
        const user = await User.findById(verified.id);
        if(!user) return json.response(false);
        return res.json(true);   
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//get user credentials
router.get("/", async (req, res) => {
    const user = await User.findById(req.user);
    res.json({
        username: user.username,
        id: user._id,
    });
});




module.exports = router;
