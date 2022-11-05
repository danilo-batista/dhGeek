const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const createError = require("http-errors");
const methodOverride = require("method-override");


const mainRoutes = require("./routes/mainRoutes");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const logarRoutes = require("./routes/LogarRoutes");
const uploadRoutes = require("./routes/UploadRoutes");


const app = express();
const dirname = path.resolve();

app.use('/public', express.static(dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', 'src/views');
app.use(cookieParser());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

app.use('/', mainRoutes);
app.use('/produto', productRoutes);
app.use('/usuario', userRoutes);
app.use("/logar", logarRoutes);
app.use('/upload', uploadRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render("error");
  });

  module.exports = app;