var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BookSchema = new Schema({
     title: String,
     author: String,
     image: String, // end in jpg or png
     releaseDate: String //?
});

var Book = mongoose.model('Book', BookSchema);
module.exports = Book;