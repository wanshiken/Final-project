const express = require("express");
const Purchase = require('../models/Purchase.model')
const router = express.Router();
const transporter = require('../config/mailing.config')
const Track = require('../models/Track.model')


router.get('/:id', (req, res) => {
    Purchase
        .find()
        .select('track date email name phone client')
        .then(e => res.status(200).json(e))
        .catch(err => res.status(500).json({ code: 500, message: "Error retrieving tracks", err }))
})

// crear el purchase client
router.post("/:id", (req, res) => {
    const { track, date, email, name, phone, client, beatInfo } = req.body
    const { id } = req.params
    Purchase
        .create({ id, track, date, email, name, phone, client, })


    Track
        .findById()
        .then(e => {

            transporter
                .sendMail({
                    from: `De Santis.com <juanbds66@gmail.com>`,
                    to: email,
                    subject: `Ticket de tu compra en De Santis.com`,
                    text: 'gracias por comprar',
                    html: `<b>Gracias por comprar ${beatInfo.title} aqui tienes el link de tu track ${beatInfo.url}</b>`
                })
                .then(info => res.status(200).json({ e, message: "Purchase created" }))
                .catch(err => res.status(500).json({
                    code: 500, message: "Error submiting purchase", err

                }))

        })
})



module.exports = router