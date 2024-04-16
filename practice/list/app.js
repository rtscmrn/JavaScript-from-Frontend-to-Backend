var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mydb_test");
var listSchema = mongoose.Schema({
 text : String
});
var List = mongoose.model("elements", listSchema);
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
// creating a new element in the list

app.post("/list", async function(req, res) {
  try {
    const text = req.body.text;
    console.log(text);

    const newList = new List({ text }); // Desestructuración para mayor(conciseness)
    const createdList = await newList.save();

    res.json({ id: createdList._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creando lista' }); // Maneje errores apropiadamente
  }
});


// retrieving list of elements
app.get("/list", async function(req, res) {
  try {
    const elements = await List.find(); // No need to specify an empty object
    res.json({ elements }); // Destructuring for cleaner response
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving list' }); // Handle errors appropriately
  }
});


// modifying an element in the list
app.put("/list", function(req, res) {
  var id = req.body.id;
  var text = req.body.text;
  List.updateOne({_id:id}, {text:text}).exec();
  res.send();  // close the connection to the browser
});
// remove an element from the list
app.delete("/list", function(req, res) {
  var id = req.body.id;
  console.log(req.body.id);
  List.deleteOne({_id:id}).exec();   // don't forget exec()!
  res.send();  // close the connection to the browser
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? 
  err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;