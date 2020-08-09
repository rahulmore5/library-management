module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("users", {
        firstname: {
            type: DataTypes.STRING
        },
        lastname:{
            type: DataTypes.STRING
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