module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("users", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        firstname: {
            type: DataTypes.STRING
        },
        lastname:{
            type: DataTypes.STRING
        },
        standard: {
            type: DataTypes.INTEGER
        },
        phone: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        address:{
            type: DataTypes.STRING
        }
    });

    return User;
};