const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db/db');
const songRoutes = require('./routes/song.routes')
dotenv.config();
connectDB();


const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.use('/', songRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Server is running`);
});
