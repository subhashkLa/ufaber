const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

//Mongoose
mongoose.connect(process.env.MONGOOSE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("DB Connected"));

mongoose.connection.on("error", (err) => console.log(`Connection Error: ${err}`));

const Middleware = [
    bodyparser.json(),
    morgan("dev"),
    cors()
];

app.use(Middleware);

//routes
const routes = require("./routes/mentor");

app.use("/", routes);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`NodeJs Started ${port}`));