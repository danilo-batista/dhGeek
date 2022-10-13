const express = require("express");
const path = require("path");

const mainRoutes = require("./routes/MainRoutes");
const productRoutes = require("./routes/ProductRoutes");
const userRoutes = require("./routes/UserRoutes");

const app = express();
const dirname = path.resolve();

app.use('/public', express.static(dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use('/', mainRoutes);
app.use('/produto', productRoutes);
app.use('/usuario', userRoutes);

app.listen(3333, () => {
    console.log("Server is running at port 3333...");
});