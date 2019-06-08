import express from 'express';
import bodyparser from 'body-parser';
import routefunc from './Server/routes/routes';
import prt from './Server/config/config';

const app = express();
app.use(bodyparser.json());// reads json data and sends them to (app)
routefunc(app)
const port = process.env.PORT || prt.PORT;

app.listen(port, () => console.log(`listening on port ${port}...`));
export default app;
