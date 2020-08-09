const db = require("../models");
const Users = db.users;
const Books = db.books;
const Book_transactions = db.book_transactions;
const Op = db.Sequelize.Op;
const QueryTypes = db.sequelize.QueryTypes;
const Sequelize = db.sequelize;
/** 
*  Create and Save a new User
*/
exports.createUser = (req, res, next) => {
    console.log("req==", req.body);
    // Validate request
    if (!req.body.firstname && !req.body.lastname) {
        res.status(400).json({
            code: 400,
            message: "Invalid inputs!"
        });
        return;
    }
    var user = new Users(req.body);
    // Save user in the database
    user.save()
        .then(data => {
            res.status(200).json({ code: 200, data: data });
        })
        .catch(err => {
            res.status(500).json({
                code: 500,
                message:
                    err.message || "Some error occurred while creating the user."
            });
        });
};
/** 
*  Create and Save a new Book
*/
exports.createBook = (req, res, next) => {
    // Validate request
    if (!req.body && !req.body.name) {
        res.status(400).json({
            code: 400,
            message: "Invalid inputs!"
        });
        return;
    }
    var book = new Books(req.body);
    // Save user in the database
    book.save()
        .then(data => {
            res.status(200).json({ code: 200, data: data });
        })
        .catch(err => {
            res.status(500).json({
                code: 500,
                message:
                    err.message || "Some error occurred while creating the user."
            });
        });
};
/** 
*  Get All Users
*/
exports.findAllUsers = (req, res) => {
    Users.findAll({})
        .then(data => {
            res.status(200).json({ code: 200, data: data });
        })
        .catch(err => {
            res.status(500).json({
                code: 500,
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};
/** 
*  Get All Books
*/
exports.findAllBooks = (req, res) => {
    Books.findAll({})
        .then(data => {
            res.status(200).json({ code: 200, data: data });
        })
        .catch(err => {
            res.status(500).json({
                code: 500,
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};
/**
 * Issued book
 */
exports.issueBook = (req, res, next) => {
    // Validate request
    if (!req.body && !req.body.userid && !req.body.bookid) {
        res.status(400).json({
            code: 400,
            message: "Invalid inputs!"
        });
        return;
    }
    let transaction = {
        userId: req.body.userid,
        bookId: req.body.bookid,
        transaction_type: "issue",
        date_of_issue: new Date()
    }
    Book_transactions.create(transaction)
        .then(data => {
            res.status(200).json({ code: 200, data: data });
        })
        .catch(err => {
            res.status(500).json({
                code: 500,
                message:
                    err.message || "Some error occurred while creating the user."
            });
        });
}
/**
 * Return book
 */
exports.returnBook = (req, res, next) => {
    // Validate request
    if (!req.body && !req.body.userid && !req.body.bookid) {
        res.status(400).json({
            code: 400,
            message: "Invalid inputs!"
        });
        return;
    }
    let transaction = {
        userId: req.body.userid,
        bookId: req.body.bookid,
        transaction_type: "return",
        date_of_return: new Date()
    }
    // Save details in the database
    Book_transactions.create(transaction)
        .then(data => {
            res.status(200).json({ code: 200, data: data });
        })
        .catch(err => {
            res.status(500).json({
                code: 500,
                message:
                    err.message || "Some error occurred while creating the user."
            });
        });
}
/**
 * Get book history based on condition
 */
exports.bookHistory = (req, res, next) => {
    // Validate request
    if (!req.body && !req.body.fromDate && !req.body.toDate) {
        res.status(400).json({
            code: 400,
            message: "Invalid inputs!"
        });
        return;
    }
    var query = {};
    if (req.body.fromDate !== undefined && req.body.toDate !== undefined) {
        let fromDate = req.body.fromDate + "T00:00:00.000Z";
        let toDate = req.body.toDate + "T23:59:59.999Z";
        if (req.body.book_type == 0) {
            query = "SELECT * FROM `book_transactions` WHERE date_of_issue BETWEEN '" + fromDate + "' AND '" + toDate + "';"
        } else if (req.body.book_type == 1) {
            query = "SELECT * FROM `book_transactions` WHERE date_of_return BETWEEN '" + fromDate + "' AND '" + toDate + "';"
        } else {
            query = "SELECT * FROM `book_transactions` WHERE createdAt BETWEEN '" + fromDate + "' AND '" + toDate + "';"
        }
        console.log("query=", query);
        // Get details from the database
        Sequelize.query(query, { type: QueryTypes.SELECT })
            .then(data => {
                res.status(200).json({ code: 200, data: data });
            })
            .catch(err => {
                res.status(500).json({
                    code: 500,
                    message:
                        err.message || "Some error occurred while creating the user."
                });
            });
    } else {
        res.status(400).json({
            code: 400,
            message: "Invalid inputs!"
        });
    }
}