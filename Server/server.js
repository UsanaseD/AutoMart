import express from 'express';
import bodyparser from 'body-parser';
import { config } from 'dotenv';
import routefunc from './routes/routes';

config();

const app = express();

app.use(bodyparser.json());// reads json data and sends them to (app)
routefunc(app);
const port = process.env.PORT;
app.listen(port, () => console.log(`listening on port ${port}...`));
export default app;
