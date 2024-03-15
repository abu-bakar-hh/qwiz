const router = require('express').Router()
const categoryRouter = require('./category.route')
const GiantRouter = require('./giant.route')
const authRouter = require('./auth')
// const userReg= require('./api.users.route')
router.use('/',categoryRouter )
router.use('/category', GiantRouter)
// router.use('/auth', authRouter)
// router.use('/')
router.use('/reg', authRouter)
//    router.post('/',(req, res) => {
//         res.app.locals.name = req.body.name
//         res.redirect('/huy')
// })

// router.get('/huy', (req, res) => 
//     const home = React.createElement(Home, {
//      title: 'My site',
//     name: res.app.locals.name,
//     });

//     const html = ReactDOMServer.renderToStaticMarkup(home);
//     const document = '<!DOCTYPE html>' + html;
//     res.send(document);
    
//    });
   module.exports = router;