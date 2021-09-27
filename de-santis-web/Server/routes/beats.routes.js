const router = require('express').Router()
const Track = require('../models/Track.model')

router.get('/', (req, res) => {
    Track.find()
    res.json()
})

router.get('/:id', (req, res) => {
    Track.findById()
    res.json()
})

