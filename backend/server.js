require('dotenv').config()
const express = require('express');
const connectDB = require('./db/db');
const songRoutes = require('./routes/song.routes')
const cors = require('cors')
connectDB();

const app = express();
app.use(express.json());
app.use(cors())
app.use(express.urlencoded());
app.use('/', songRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Server is running`);
});
