const express = require('express')
const router = express.Router()
const singUpTemplateCopy = require('../models/SignUpModels')
const bcrypt = require('bcrypt')

router.post('/signup', async (request, response) => {

    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(request.body.password, saltPassword)

    const signedUpUser = new singUpTemplateCopy({
        fullname:request.body.fullName,
        userName:request.body.userName,
        email:request.body.email,
        password:securePassword

    })
    signedUpUser.save()
    .then(date =>{
        response.json(date)
    })
    .catch(error =>{
        response.json(error)
    })
})

module.exports = router