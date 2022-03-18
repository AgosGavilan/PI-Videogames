const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogamesRoute = require("./videogames.js")
const genresRoute = require('./genres.js')
const videogameRoute = require('./videogame.js')
//const filtradosByRoute = require('./filtrados.js')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', videogamesRoute);
router.use('/genres', genresRoute)
router.use('/videogame', videogameRoute)
//router.use('/filtrados', filtradosByRoute)


module.exports = router;
