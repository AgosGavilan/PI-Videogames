const { Router } = require('express');
const {infoApi, infoDB} = require('../controllers')

const router = Router();

router.get('/', async (req, res, next) => {
    const sourceApi = await infoApi()
    const sourceDB = await infoDB()

    try {
        res.json(sourceApi ? sourceApi : sourceDB)

    } catch(e) {
        next(e)
    }
})


module.exports = router