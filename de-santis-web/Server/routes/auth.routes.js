const express = require("express");
const router = express.Router();

const User = require('../models/User.model')
const bcrypt = require("bcrypt")
const bcryptSalt = 10


// Signup (post)
router.post('/signup', (req, res) => {

    const { username, pwd } = req.body

    User
        .findOne({ username })
        .then(user => {

            if (user) {
                res.status(400).json({ code: 400, message: 'Admin already exixts' })
                return
            }

            const salt = bcrypt.genSaltSync(bcryptSalt)
            const hashPass = bcrypt.hashSync(pwd, salt)
            User
                .create({ username, password: hashPass })
                .then((user) => {
                    console.log(user, 'ahora siiii')
                    res.json({ code: 200, message: 'Admin created' })
                })
                .catch(err => {
                    console.log(err)
                    res.status(500).json({ code: 500, message: 'DB error while creating admin', err: err.message })
                })
        })
        .catch(err => res.status(500).json({ code: 500, message: 'DB error while fetching admin', err: err.message }))
})

// Login (post)
router.post('/login', (req, res) => {

    const { username, pwd } = req.body

    User
        .findOne({ username })
        .then(user => {

            if (!user) {
                res.status(401).json({ code: 401, message: 'admin not registered' })
                return
            }

            if (bcrypt.compareSync(pwd, user.password) === false) {
                res.status(401).json({ code: 401, message: 'Incorrect password' })
                return
            }

            req.session.currentUser = user
            res.json(req.session.currentUser)
        })
        .catch(err => res.status(500).json({ code: 500, message: 'DB error while fetching admin', err: err.message }))
})

router.get('/logout', (req, res) => {
    req.session.destroy((err) => res.json({ message: 'Logout successful' }));
})

router.post("/isloggedin", (req, res) => {
    req.session.currentUser ? res.json(req.session.currentUser) : res.status(401).json({ code: 401, message: 'Unauthorized' })
})

module.exports = router