const express = require("express");
const Track = require('../models/Track.model')
const router = express.Router();

// PERFIL ADMIN
router.get('/admin', (req, res) => {
    res.json()
})

//LISTA DE BEATS ADMIN
router.get('/admin/beats', (req, res) => {
    Track.find()
    res.json()
})

//Estadistica de venta
router.get('/admin/beats', (req, res) => {
    Track.find()
    res.json()
})

//DETALLES DE BEATS
router.get('/admin/beats/:id', (req, res) => {
    Track.findById()
    res.json()
})

//EDITAR BEATS 
router.put('/admin/beats/:id', (req, res) => {
    Track.findByIdAndUpdate()
    res.json()
})

