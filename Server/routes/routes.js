const express = require('express');
const app = express();
const routerHelper = require('./routehelper/routerHelper');
app.use(express.json());


app.post('/api/v1/auth/signup', routerHelper.signup);
app.post('/api/v1/auth/login', routerHelper.login);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));
