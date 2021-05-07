import express from 'express'
import bodyParser from 'body-parser'
import cors from "cors"
import dotenv from 'dotenv'
import router from './routes/router.js'

dotenv.config()

const app = express()

app.use(cors());
//enable cors every where
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    req.header("Access-Control-Allow-Origin", "*");
    req.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const port = process.env.PORT || 3001

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.use(express.json())
app.use(bodyParser.json())
app.use(router)

app.listen(port, () => {
  console.log(`Our API is now available on port ${port}`)
})
