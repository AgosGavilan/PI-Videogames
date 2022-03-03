const { Router } = require('express');
require('dotenv').config();
const { videogame } = require('../controllers')
const {Videogame, Genres} = require('../db.js')

const router = Router();

router.get('/:idVideogame', async (req, res, next) => {
    const {idVideogame} = req.params //el id me llega por params
    let data = await videogame(idVideogame)

    try {
        //const getById = await data.(i => i.id == idVideogame)
        data ? res.send(data) : res.status(404).send('El id ingresado no coincide con un videojuego en particular')

    } catch(e) {
        next(e)
    }
})

router.post('/', async (req, res, next) => {
    const {name, image, genres, released, rating, platforms, description} = req.body
       //la accion de crear una nueva instancia es asincrona, como manejo errores? con try y catch
    try {
        const newVideogame = await Videogame.create ({ //le paso al create el objeto con todos los atributos que quiero que tenga mi nuevo videojuego
            name,
            image,
            released,
            rating,
            platforms,
            description
        })
        const relacion = await Genres.findAll({ //en generos, buscame todos
            where: { //donde
                name: genres //el name, sea el genero
            }
        })
        await newVideogame.addGenres(relacion) //aca añado a mi nuevo videojuego, mi genero
        res.json(newVideogame)



    } catch(e) {
        next(e)
    }
})


module.exports = router;

// {
//     "name": "lola",
//     "image": "https://www.trecebits.com/wp-content/uploads/2019/04/11854.jpg",
//     "released": "2019-08-18",
//     "rating": "2",
//     "platforms": "pes",
//     "description": "hola mundo",
//     "genres": ["Action", "RPG"]
// }