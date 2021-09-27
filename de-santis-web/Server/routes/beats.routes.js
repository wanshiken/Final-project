const router = require('express').Router()
const fileUploader = require('../config/cloudinary.config')
const Track = require('../models/Track.model')

router.get('/', (req, res) => {
    Track.find()
    res.json()
})

router.get('/:id', (req, res) => {
    Track.findById()
    res.json()
})

// renderizar formulario
router.get('/crear', isLoggedIn, checkRoles('company'), (req, res) => {
    res.render('events/create-event')
})

// enviar formulario 
router.post('/crear', isLoggedIn, fileUploader.single('event-cover-image'), checkRoles('company'), (req, res) => {

    const { title, description, category, city, country, number, lat, lng, date } =
        req.body

    const dateFormated = date.substring(0, 10)

    const direction = {
        city: city,
        country: country,
        number: number,
    }

    const location = {
        type: 'Point',
        coordinates: [lat, lng],
    }

    const owner = req.session.currentUser._id

    Event
        .create({
            title,
            direction,
            description,
            category,
            location,
            date: dateFormated,
            image: req.file.path,
            owner,
        })
        .then(() => {
            res.redirect('/eventos')
        })
        .catch((err) => console.log(err))
})