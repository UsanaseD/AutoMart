const express = require('express');
const routefunc = require('./Server/routes/routes');//midleware
const bodyparser = require('body-parser');
const prt = require('./Server/config/config')

const app = express();
app.use(bodyparser.json());//reads json data and sends them to (app)
routefunc.routeFunc(app);
const port = process.env.PORT || prt.PORT;

app.listen(port, () => console.log(`listening on port ${port}...`));
module.exports.app=app;