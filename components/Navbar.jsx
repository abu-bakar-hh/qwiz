const React = require('react')
function Menu(){
    return(
        <div className='topPanel'>
            <div className='score'>score:{}</div>
            <div className='auf'>
                <div className='avtorizaciya'>
                    <a>< button className='topBtn' >Registration</button></a>
                </div>
                <div className='user_name'>Добро пожаловать,{}</div>
            </div>
        </div>
    )
}
module.exports = Menu