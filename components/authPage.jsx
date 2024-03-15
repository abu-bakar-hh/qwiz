const React = require('react');
const Layout = require('../components/Layout');
 

module.exports = function authPage() {
    return (
        <>
            <Layout title={"Auth"} heading={"Auth user"}>
                <form className="authForm">
                    <label htmlFor="login">Login</label>
                    <input type='text' name='login' id='login' className='form-control' required></input>
                    <label htmlFor="password">Password</label>
                    <input type='text' name='password' id="password" className='form-control' required></input>
                    <button type="submit" className='btn btn-primary'>Отправить</button>
                </form>
            </Layout>
        </>
    );
};