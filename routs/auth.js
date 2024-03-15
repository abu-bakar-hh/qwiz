const router = require('express').Router();
const AuthPage = require('../components/authPage');
const regPage = require('../components/regPage')
const { User } = require('../db/models')

// router.get("/", async (req, res) => {
//     const html = res.renderComponent(AuthPage)
//     res.send(html)
// })

router.get("/", async (req, res) => {
    const html = res.renderComponent(regPage)
    res.send(html)
})

router.post("/", async(req, res) => {
    const {login,email,password} = req.body;
    try {
        const result = await User.findOne({where:{name:login }})
        if(result){
            res.app.locals.user = result
            res.json({message: "Такой пользователь уже есть"})
        } else{
            const newUser = await User.create({name:login,email,password})
            res.app.locals.user = newUser
            res.json({message: "успешно"})
            
        }
        
    } catch (error) {
        res.json({message: "error", error})
    }
   
    
})

 

module.exports = router