const express = require('express')
const app = express()
const { initAPIRouter } = require('./router/APIRouter')
require("dotenv").config()

/**
 * HTTP function that supports CORS requests.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
 app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", process.env.PAGE_URL);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
initAPIRouter(app)


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})