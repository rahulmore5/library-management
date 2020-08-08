module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define("books", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
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
            type:DataTypes.INTEGER
        },
        no_of_copies:{
            type:DataTypes.INTEGER
        }
    });

    return Book;
};