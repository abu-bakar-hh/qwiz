const router = require('express').Router()
const {Category} = require('../db/models')
const categoryList = require('../components/CategoryList')

router.get('/', async (req,res) => {
    try {
        const categories =  await Category.findAll()
        console.log(categories);
        const html = res.renderComponent(categoryList, {categories, title: 'Category'})
        res.send(html)
    } catch ({message}) {
        res.send(message)
    }
})

module.exports = router