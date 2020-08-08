module.exports = (sequelize, DataTypes) => {
    const BookTransactions = sequelize.define("book_transactions", {
        transaction_type: {
            type: DataTypes.ENUM('issue', 'return')
        },
        date_of_return:{
            type:DataTypes.DATE
        },
        date_of_issue:{
            type:DataTypes.DATE
        }
    });

    return BookTransactions;
};