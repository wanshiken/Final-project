const express = require("express");
const Track = require('../models/Track.model')
const router = express.Router();
const fileUploader = require('../config/cloudynary.config')


// PERFIL ADMIN
router.get('/', (req, res) => {
    res.json()
})

//LISTA DE BEATS ADMIN
router.get('/beats', (req, res) => {
    Track.find()
    res.json()
})

// renderizar formulario
router.get('/beats', (req, res) => {
    Track.find()
        .select('')
        .then(tracks => res.status(200).json(tracks))
        .catch(err => res.status(500).json({ code: 500, message: "Error retrieving tracks", err }))
})

// enviar formulario 
router.post("/beats", fileUploader.single(''), (req, res) => {
    const track = req.body;
    Track.create(track)
        .then(track => res.status(200).json({ track, message: "Track created" }))
        .catch(err => res.status(500).json({ code: 500, message: "Error submiting track", err }))
})

//Estadistica de venta
router.get('/beats', (req, res) => {
    Track.find()
    res.json()
})

//DETALLES DE BEATS
router.get('/beats/:id', (req, res) => {
    Track.findById()
    res.json()
})

//EDITAR BEATS 
router.put('/beats/:id/editar', (req, res) => {
    Track.findByIdAndUpdate()
    res.json()
})

//BORRAR BEATS
router.delete('/beats/:id/eliminar', (req, res) => {
    Track.findByIdAndDelete()
    res.json()
})

// ** RUTA PARA ADMIN MUSIC **

router.put('/music/:id/editar', (req, res) => {
    Track.findByIdAndUpdate()
    res.json()
})

router.delete('/music/:id/eliminar', (req, res) => {
    Track.findByIdAndDelete()
    res.json()
})