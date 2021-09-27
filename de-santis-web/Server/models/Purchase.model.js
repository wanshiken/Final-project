const { Schema, model } = require("mongoose");
const User = require("./User.model");
const Track = require('./Track.model')

const trackSchema = new Schema(
    {

        downloads: {
            type: Number
        },

        date: {
            type: date,
            ref: Track
        },

        clients: {
            type: [Schema.Types.ObjectId],
            ref: User,
            default: 'unknown'
        },

        //TODO añadir precio, cantidad de descarga, colocar numeros de descarga, fecha de compra referemncia al track, y datos de usuario 
        // hacer modelo purchase, y formulario para obtener detalles de cliente.
        // colocar modelo user para referenciar esos datos cuando llenen el formulario.


    });

const Track = model("Track", trackSchema);

module.exports = Track;