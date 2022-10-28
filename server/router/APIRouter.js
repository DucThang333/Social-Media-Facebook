const express = require('express')
const router = express.Router();
const {getAllAccount,getAccountByID} = require('../controller/APIcontroller')

const initAPIRouter = (app) => {
    router.get('/getAllAccount', getAllAccount)
    router.get('/getAllAccount/:id', getAccountByID)
    return app.use('/api/v1', router)
}

module.exports = {
    initAPIRouter
}