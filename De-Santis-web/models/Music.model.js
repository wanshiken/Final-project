const { Schema, model } = require("mongoose");


const musicSchema = new Schema({
  username: {
    type: String,
   
  },
  password: String,
});

const Music = model("User", musicSchema);

module.exports = Music;
