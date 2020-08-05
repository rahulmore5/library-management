module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define("books", {
        name: {
            type: DataTypes.STRING
        },
        author:{
            type: DataTypes.STRING
        },
        publication: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.INTEGER
        }
    });

    return Book;
};