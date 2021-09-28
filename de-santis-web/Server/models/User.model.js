const { Schema, model } = require('mongoose')

const userSchema = new Schema(
    {

        name: {
            type: String,
            unique: true
        },

        password: {
            type: String,
            
        },
        
        rol: {
            type: String,
            enum: ['admin', 'client']
        },

        image: {
            type: String,
            default:
                'https://us.123rf.com/450wm/thesomeday123/thesomeday1231712/thesomeday123171200009/91087331-icono-de-perfil-de-avatar-predeterminado-para-hombre-marcador-de-posici%C3%B3n-de-foto-gris-vector-de-ilu.jpg?ver=6',
        },
    },
    {
        timestamps: true,
    }
)

const User = model('User', userSchema)

module.exports = User