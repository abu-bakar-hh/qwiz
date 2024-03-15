const router = require('express').Router();
const { User } = require("./../db/models")

router.post("/", async(req, res) => {
    const {login} = req.body;
    try {
        const result = await User.findOne({where:{login }})
        if(result){
            res.app.locals.user = result
            res.json({message: "success"})
        } else{
            res.json({message: "Пользователя нет"})
        }
        
    } catch (error) {
        res.json({message: "error", error})
    }
   
    
})


module.exports = router