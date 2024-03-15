const React = require('react');
const Layout = require('./Layout');
 

module.exports = function regPage() {
    return (
        <>
            <Layout title={"Reg"} heading={"Registration"}>
                <form id="reg">
                    <label htmlFor="login">Login</label>
                    <input type='text' name='login' id='login' className='form-control' required></input>

                    <label htmlFor="email">Email</label>
                    <input type='email' name='email' id='email' className='form-control' required></input>

                    <label htmlFor="password">Password</label>
                    <input type='password' name='password' id="password" className='form-control' required></input>
                   
                    <label htmlFor="r_password">Repeat password</label>
                    <input type='password' name='r_password' id="r_password" className='form-control' required></input>
                    
                    <button type="submit" className='btn btn-primary'>Отправить</button>
                </form>
            </Layout>
        </>
    );
};