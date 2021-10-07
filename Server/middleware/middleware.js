const mongoose = require("mongoose")


module.exports = {
    isLoggedIn: (req, res, next) => {
        req.session.currentUser ? next() : res.json('auth/login', { errorMsg: 'Inicia sesión para continuar' })
    },
    checkId: (req, res, next) => {
        mongoose.Types.ObjectId.isValid(req.params.id) ? next() : res.redirect('/')
    },
    checkRoles: (...roles) => (req, res, next) => {
        roles.includes(req.session.currentUser.rol) ? next() : res.json('auth/login', { errorMsg: 'No tienes permisos' })
    }
}