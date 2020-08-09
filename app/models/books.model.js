module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define("books", {
        name: {
            type: DataTypes.STRING
        },
        author: {
            type: DataTypes.STRING
        },
        publication: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.INTEGER
        },
        edition:{
            type: DataTypes.INTEGER
        },
        volume:{
            type:DataTypes.STRING
        },
        no_of_copies:{
            type:DataTypes.INTEGER
        }
    });

    return Book;
};