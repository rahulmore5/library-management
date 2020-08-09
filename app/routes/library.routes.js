module.exports = app => {
    const library = require("../controllers/library.controller");
  
    var router = require("express").Router();
  
    // Create a new User
    router.post("/create-user", library.createUser);
  
    // Retrieve all Users
    router.get("/get-users", library.findAllUsers);

    // Create a new Book
    router.post("/book", library.createBook);
  
    // Retrieve all Books
    router.get("/get-books", library.findAllBooks);
  
    // issue a book
    router.post("/issue-book", library.issueBook);
  
    // return a book
    router.post("/return-book", library.returnBook);
  
    // find a book with custom filter
    router.post("/get-history", library.bookHistory);
  
    app.use('/api/library', router);
  };