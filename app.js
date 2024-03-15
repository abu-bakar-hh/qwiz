const express = require('express')
require('@babel/register');
const app = express();
const route = require('./routs/index.route')
const path = require('path')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.locals.what = 'xyz'
app.use(express.static(path.join(__dirname, 'public')));
const ssr = require('./middleware/ssr');

app.use(ssr);


app.use('/', route)
app.use(ssr);

const PORT = process.env.PORT ?? 3000;

   app.listen(PORT,()=>{
    console.log('A!',PORT);
   })