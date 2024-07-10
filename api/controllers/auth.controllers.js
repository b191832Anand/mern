const devuser = require('../models/auth.devuser');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const exist = await devuser.findOne({ email });
        if (exist) {
            return res.status(400).json({ message: "User already exists" });
        }
        let newUser = new devuser({
            username:username,
            email:email,
            password:password
        });
        await newUser.save();
        return res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
};

const signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await devuser.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email " });
        }
        if (password!=user.password) {
            return res.status(400).json({ message: "Invalid email or password" });
        }
        const token = jwt.sign({ id: user._id }, 'password', { expiresIn: '30d' });
        return res.status(200).json({token:token});
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error"});
    }
};

const data = async (req, res) => {
    try {
        const users = await devuser.find();
        return res.status(200).json(users);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
};

module.exports = { signup, signin, data };
