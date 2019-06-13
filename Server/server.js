import express from 'express';
import bodyparser from 'body-parser';
import routefunc from './routes/routes';
import prt from './config/config';

const app = express();
app.use(bodyparser.json());// reads json data and sends them to (app)
app.use((err, req, res) => {
  return res.status(404).send({ 
    status:404,
    message:'invalid url'
  });
});
routefunc(app);
const port = process.env.PORT || prt.PORT;

app.listen(port, () => console.log(`listening on port ${port}...`));
export default app;
