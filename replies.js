'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Replies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Replies.init({
    id: DataTypes.BIGINT,
    replied_at: DataTypes.DATE,
    reply_text: DataTypes.TEXT,
    user_id: DataTypes.BIGINT,
     references:{
      key:"id",
      model:"Users"
     },
    original_post_id: DataTypes.BIGINT,
     references:{
      key:"id",
      model:"Posts"
     }
  }, {
    sequelize,
    modelName: 'Replies',
  });
  return Replies;
};