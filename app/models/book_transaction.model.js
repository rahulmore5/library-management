module.exports = (sequelize, DataTypes) => {
    const BookTransactions = sequelize.define("book_transactions", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        bookId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        transaction_type: {
            type: DataTypes.ENUM('issue', 'return'),
            allowNull: false
        },
        date_of_return: {
            type: DataTypes.DATE,
        },
        date_of_issue: {
            type: DataTypes.DATE
        }
    });

    return BookTransactions;
};