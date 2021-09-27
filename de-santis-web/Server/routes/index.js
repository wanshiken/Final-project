module.exports = (app) =>{
    app.use('/', require('./base.routes'))
    app.use('/beats', require('./beats.routes'))
    app.use('/admin', require('./admin.routes'))
    app.use('/music', require('./music.routes'))
}