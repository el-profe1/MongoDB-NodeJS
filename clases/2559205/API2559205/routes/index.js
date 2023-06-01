const commentsRouter = require('./commentsRouter');
const moviesRouter = require('./moviesRouter');

function routerApi(app){
    app.use('/movies', moviesRouter); //la app que creamos con express va a asociar la ruta movies con el controlador moviesRouter
    app.use('/comments', commentsRouter);
}

module.exports = routerApi;
