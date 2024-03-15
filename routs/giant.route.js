const router = require('express').Router()
const {Question, Answer} = require('../db/models')
const Giant = require('../components/Giant')

router.get('/:id', async (req,res) => {
    console.log(123);
    try {
        const {id} = req.params
        const question =  await Question.findOne({where: {id}})
        const html = res.renderComponent(Giant, {question, title: 'GiantElbrus'})
   
        res.send(html)
    } catch ({message}) {
        res.send(message)
    }
})
router.post('/:id', async (req,res) => {
    const {answer, questid} = req.body 
    console.log({answer, questid});
    try {
        const answerRigth =  await Answer.findOne({where: {questionID:questid}})
        console.log(answerRigth, answer);

        if (answerRigth.name === answer) {
            res.json({message:'success'})
        } else {
            res.json({message: 'fail'})
        }
    } catch ({message}) {
res.send(message)
    }
})


module.exports = router