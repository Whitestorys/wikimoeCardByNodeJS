var mongoose = require('mongoose');
require('mongoose-long')(mongoose);
var Schema = mongoose.Schema;
var SchemaTypes = mongoose.Schema.Types;
// Schema
var users = new Schema({
  email:String,
  md5:String,
  nickName:String,
  password:String,
  dailyCard:{type: Number, default: 0},
  dailyCardTime:{type: SchemaTypes.Long, default: 0},
  star:{type: Number, default: 0},
  score:{type: Number, default: 0},
  level:{type: Number, default: 0},
  exp:{type: Number, default: 0},
  battleStamp:{type: SchemaTypes.Long, default: 0},
  battleDailyCount:{type: Number, default: 0},
  battleCard:{type: Array, default: []},
  deminingStamp:{type: [SchemaTypes.Long],default: [0,0,0]},
  deminingStarCount:{type: SchemaTypes.Long, default: 0},
  card: {},
  cardIndexCount:{type: Number, default: 0},
  token:{type: String, default: ''},
  ip:String,
  ban:{type: Number, default: 0},
});

module.exports = mongoose.model('users', users);