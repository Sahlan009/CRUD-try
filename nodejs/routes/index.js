const express = require('express')
const todoRoute = require('../controller')
const router = express.Router()

router.get('/',(req,res) => {
    res.json({message: ' Welcome to Swagger Pet Store'})
})

router.get('/pet', petRoute.listPet)
router.post('/pet', petRoute.insertPet)
router.put('/pet/:id', petRoute.updatePet)
router.delete('/pet/id', petRoute.deletePet)

router.get('/store', storeRoute.listStore)
router.post('/store', storeRoute.insertStore)
router.put('/store/:id', storeRoute.updateStore)
router.delete('/store/id', storeRoute.deleteStore)

module.exports = router 
