require('dotenv').config()
import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors'
import getEnvVars from '../envConfig'
import { errorHandler } from './api/middlewares'

//ROUTES
import { itemsRouter } from './api/routes'

const {
    port,
} = getEnvVars()

const app: express.Application = express();

app.use(bodyParser.json())
app.use(cors())

app.use('/api', itemsRouter)
app.use(errorHandler)

app.listen(port, function () {
    console.log(`App running on port ${port}`);
});
