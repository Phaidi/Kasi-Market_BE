const Sequelize = require('sequelize')
const sequelize =  require("../config/db") 
const User = require('./userModel');
const Iterm = require('./itermModel');

const Cart = sequelize.define('cart',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    quantity:{
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
    },

   
    
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
     

})


User.hasOne(Cart, {onDelete: 'CASCADE',foreignKey: 'userId'});
Cart.belongsTo(User);

Iterm.hasOne(Cart, {onDelete: 'CASCADE',foreignKey: 'itermId'});
Cart.belongsTo(Iterm);

module.exports = Cart;







