const React = require('react')
const Layout = require('./Layout')
function Home({title,name}){
    return (
        <Layout title = {title}>
           <div className='topPanel'>
           <div className='score'></div>
           <div className='avtori'></div>
           </div>
            <form method="post">
                <input type="text" name ="name" />
                <button type= "submit">Отправить</button>
            </form>
        </Layout>
    )
}
module.exports = Home