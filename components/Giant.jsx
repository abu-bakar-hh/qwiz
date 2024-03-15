const React = require('react')
const Layout = require('./Layout')

function Giant({question, title}) {
    return (
        <Layout title = {title}> 
        <>
    <h1>Гиганты Эльбруса</h1>
    <img className='catImg' src={question.img}></img>
    <div className='question'>
        {question.name}
    </div>
    <div className='answer'>
        <form className='form' data-questid = {question.id}> 
        <label htmlFor='answer'>Ваш ответ:</label>
        <input type='text' name='answer' id='answer'></input>
        <button className='checkAnswer'>Проверить ответ</button>
        </form>
    </div>
    <a><button className='nextQuest'data-questid = {question.id}>Далее</button></a>
    </>
        </Layout>
    )
}

module.exports = Giant