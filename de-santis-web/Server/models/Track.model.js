const { Schema, model } = require("mongoose");


const trackSchema = new Schema(
  {

  cover: {
    type: String,
    default: 
    'https://us.123rf.com/450wm/thesomeday123/thesomeday1231712/thesomeday123171200009/91087331-icono-de-perfil-de-avatar-predeterminado-para-hombre-marcador-de-posici%C3%B3n-de-foto-gris-vector-de-ilu.jpg?ver=6'
  },

  title: {
    type: String,
  },
  
  time: {
    type: Number
  },

  Bpm: {
    type: Number
  }


});

const Track = model("Track", trackSchema);

module.exports = Track;
