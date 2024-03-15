const React = require('react')
const Layout = require('./Layout')

function categoryList({categories, title}) {
    return (
        <Layout title = {title}> 
    <h1>Выберите категорию!</h1>
    <div className='categories'>
        {categories.map((category) => (<div key = {category.id} className='catItems'> <a href={`/category/${category.name}`}>{category.name}</a></div>))}
    </div>
        </Layout>
    )
}

module.exports = categoryList