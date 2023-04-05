const User = require('../models/User')
const jwt = require('jsonwebtoken')

const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { email: '', userName: '', password: '' }


    if(err.message==='Incorrect email'){
        errors.email='That email is not registered yet'
    }
    if(err.message==='Incorrect password'){
        errors.password='That password is incorrect'
    }


    if (err.code === 11000) {
        errors.email = 'that email is already registered';
        return errors;
    }
    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message
        })
    }
    return errors
}

module.exports.register_post = async (req, res) => {
    const { email, userName, password } = req.body
    try {
        await User.init();
        const user = await User.create({ email, userName, password })
        if (user) {
            console.log('Succes');
            res.json({
                user
            })
        }
    } catch (err) {
        const errors1 = handleErrors(err)
        console.log(errors1);
        res.json({
            errors1
        })
    }
}

module.exports.log_in_post = async (req, res) => {
    const { email, password } = req.body
    try {
        const user=await User.log_in(email,password)
        res.status(200).json({user:user})
    }
    catch (err) {
        const errors=handleErrors(err)
        res.status(400).json({errors})
    }
}