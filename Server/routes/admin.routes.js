const express = require("express");
const Track = require('../models/Track.model')
const router = express.Router();
const {imgUpload, audioUpload} = require('../config/cloudinary.config')
const { checkId, isLoggedIn, checkRoles } = require("../middleware/middleware")




// ver beats
router.get('/beats', (req, res) => {
    Track
        .find()
        .select('title cover url time bpm price')
        .then(tracks => res.status(200).json(tracks), )
        .catch(err => res.status(500).json({ code: 500, message: "Error retrieving tracks", err }))
})

// crear los beats
router.post("/beats", imgUpload.single('imageData'), audioUpload.single('audioData'), checkRoles('admin'), (req, res) => {
    const {title, cover, url, time, bpm, price} = req.body
    Track
        .create({ title, cover, url, time, bpm, price })
        .then(track => res.status(200).json({ track, message: "Track created" }))
        .catch(err => res.status(500).json({ code: 500, message: "Error submiting track", err }))
})

//DETALLES DE BEATS
router.get('/beats/:id', (req, res) => {
    const { id } = req.params;
    Track
        .findById(id)
        .then(track => res.status(200).json({ track, message: "Track getted" }))
        .catch(err => res.status(500).json({ code: 500, message: "Error retrieving a single track", err: err.message }))
})

//EDITAR BEATS 
router.put('/beats/:id/editar', (req, res) => {
    const { id } = req.params;
    Track
        .findByIdAndUpdate(id, req.body, { new: true })
        .then(track => res.status(200).json({ track, message: "Track edited" }))
        .catch(err => res.status(500).json({ code: 500, message: "Error editing", err }))
})

//BORRAR BEATS
router.delete('/beats/:id/eliminar', (req, res) => {
    const { id } = req.params;
    Track
        .findByIdAndDelete(id)
        .then(() => res.status(200).json({ message: `Track ${id} deleted` }))
        .catch(err => res.status(500).json({ code: 500, message: "Error deleting track", err }))
})

//Estadistica de venta
router.get('/beats', (req, res) => {
    Track.find()
    res.json()
})


// ** RUTA PARA ADMIN MUSIC **

router.put('/music/:id/editar', (req, res) => {
    Track
        .findByIdAndUpdate()
    res.json()
})

router.delete('/music/:id/eliminar', (req, res) => {
    Track
        .findByIdAndDelete()
    res.json()
})

module.exports = router