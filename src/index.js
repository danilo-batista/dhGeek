const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser")

const mainRoutes = require("./routes/mainRoutes");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const loginRoutes = require("./routes/LoginRoutes");

const app = express();
const dirname = path.resolve();

app.use('/public', express.static(dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', 'src/views');
app.use(cookieParser())

app.use('/', mainRoutes);
app.use('/produto', productRoutes);
app.use('/usuario', userRoutes);
app.use("/login", loginRoutes)

app.listen(3333, () => {
    console.log("Server is running at port 3333...");
});