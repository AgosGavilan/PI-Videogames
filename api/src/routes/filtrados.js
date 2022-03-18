// const { Router } = require('express');
// const {infoTotal, infoApi, infoDB} = require('../controllers')

// const router = Router();

// router.get('/:genres', async (req, res, next) => {
//     const { genres } = req.params
//     let allData = await infoTotal()

//     try {
//         let filter = await allData.filter(g => g.genres.includes(genres))
//         filter.length ? res.json(filter) : res.status(400).send('No hay coincidencia')

//         } catch(e) {
//             next(e)
//         }
    
// })

// router.get('/source/:source', async(req, res, next) => {
//     const { source } = req.params
//     let allData = await infoTotal()
//     let allAPI = await infoApi()
//     let allDB = await infoDB()
    
//     if(source){
//         try {
//             if(source === 'api') {
//                 res.json(allAPI)
//             } else if(source === 'created') {
//                 res.json(allDB)
//             } else {
//                 res.json(allData)
//             }
//         } catch(e) {
//             next(e)
//         }
//     }
// })


// module.exports = router