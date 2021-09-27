const express = require("express");
const Track = require('../models/Track.model')
const router = express.Router();


// PERFIL ADMIN
router.get('/', (req, res) => {
    res.json()
})

//LISTA DE BEATS ADMIN
router.get('/beats', (req, res) => {
    Track.find()
    res.json()
})

//post para crear el beat 
router.post("/beats", (req, res) => {
    const track = req.body;
    Track.create(track)
        .then(track => res.status(200).json({ track, message: "Coaster created" }))
        .catch(err => res.status(500).json({ code: 500, message: "Error creating coaster", err }))
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