const { default: axios } = require('axios');
const { Op } = require('sequelize');
const {Videogame, Genres} = require('../db.js')

//SOLICITUD PARA TODOS MIS VIDEOJUEGOS
//A LA API
const infoApi = async() => {
    let url = `https://api.rawg.io/api/games?key=1a255eb156d941f2b6001a54e1973aa2`
    let videojuegos = []
    try {
        for(let i=0; i<6; i++) {
            const respuesta = await axios.get(url)
            respuesta.data.results.map(v => {
                videojuegos.push({
                    id: v.id,
                    name: v.name,
                    //released: v.released,
                    image: v.background_image,
                    rating: v.rating,
                    platforms: v.platforms.map(el => el.platform.name),
                    genres: v.genres.map(el => el.name)
                })
            });
            url = respuesta.data.next
        }
        return videojuegos

    } catch(e) {
        console.log(e)
    }
};

//A MI DB
const infoDB = async () => {
    try {
    return await Videogame.findAll({ //SELECT * FROM Videogame 
           include: [{
               model: Genres, 
               atributes: ['name'], 
               throught: { 
                   attributes: [] 
               }
           }]
       })
    } catch(e) {
        console.error(e)
    }
}

//UNO MIS DOS SOLICITUDES
const infoTotal = async () => {
    //para unir mis dos solicitudes, guardo en una variable la ejecucion de mis funciones
    const apiData = await infoApi ();
    const dbData = await infoDB();
    //ahora uno mis dos constantes contenedoras de funciones
    const infoCompleta = apiData.concat(dbData)
    return infoCompleta
}
//*************************************************************************** */

//SOLICITUD PARA MIS REQUEST POR QUERY
//A MI API
const nameApi = async (name) => {
    const infoSearch = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=1a255eb156d941f2b6001a54e1973aa2`)

    try {
        const vgSearch = infoSearch.data.results.map(el => {
            return {
                id: el.id,
                name: el.name,
                //released: el.released,
                image: el.background_image,
                rating: el.rating,
                platforms: el.platforms.map(el => el.platform.name),
                genres: el.genres.map(el => el.name)
            }
        })
        return vgSearch;
    }catch(e) {
        console.error(e)
    }
}

//A MI DB
const nameDB = async (name) => {
    try {
    return await Videogame.findAll({ //SELECT * FROM Videogame where name=name
            where: {
                name: {
                    [Op.iLike]: "%"+ name+"%" //no distingue entre mayusculas y minusculas
                }
            },
           include: [{
               model: Genres, 
               atributes: ['name'], 
               throught: { 
                   attributes: [] 
               }
           }]
       })
    } catch(e) {
        console.error(e)
    }
}

//UNO MIS DOS SOLICITUDES
const allNames = async (name) => {
    const api = await nameApi (name);
    const db = await nameDB(name);
    //ahora uno mis dos constantes contenedoras de funciones
    const union = api.concat(db)
    return union
}
//************************************************************************************************** */

//SOLICITUD PARA MIS REQUEST POR PARAMS
//A MI ENDPOINT: https://api.rawg.io/api/games/{id}
const idApi = async (id) => {
    try {
        const rtaApi = await axios.get(`https://api.rawg.io/api/games/${id}?key=1a255eb156d941f2b6001a54e1973aa2`)
        if(rtaApi) {
            const vgId = await rtaApi.data
            const info = {
                id: vgId.id,
                name: vgId.name,
                image: vgId.background_image,
                genres: vgId.genres.map(g => g.name),
                description: vgId.description,
                released: vgId.released,
                rating: vgId.rating,
                platforms: vgId.platforms.map(el => el.platform.name)

            }
            return info
        } else {
            return("No hay un videojuego con ese id")
        }

    } catch(e) {
        console.error(e)
    }
}

//A MI DB
const idDb = async (id) => {
    try {
    return await Videogame.findByPk(id, {
        include: [{
            model: Genres, 
            atributes: ['name'], 
            throught: { 
                attributes: [] 
            }
        }]
       })
    } catch(e) {
        console.error(e)
    }
}

//UNO MIS DOS SOLICITUDES
const videogame = async (id) => {
    const dbID = id.includes("-")
    if(dbID) { //si mi id contiene un signo "-"
        const vgDb = await idDb(id);
        return vgDb     
    } else {
        const vgApi = await idApi(id);
        return vgApi
   }
}


module.exports = {
    infoTotal,
    allNames,
    videogame,
    infoApi,
    infoDB
}

