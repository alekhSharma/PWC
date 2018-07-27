'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userDBSchema = new Schema({
  //_id :  Schema.Types.ObjectId,
  FirstName: {type: String, trim: true,sparse: true, required: true},
  LastName: {type: String, trim: true,sparse: true, required: true},
  Email : {type: String, trim: true, index: true, unique: true, sparse: true, required: true},
  PasswordHash:{type: String},
  PasswordSalt:{type: String},
  Country : {type: String, trim: true},
  State : {type: String, trim: true},
  ContributeIn : {type: Array, trim: true, },
  LearnIn : {type: Array, trim: true, },
  Coins : {type: Number},
  profileImage : {type: String, default: './public/img/user_logo.png' },
  DOB : {type:Date},
  blogIDs : [{  type: Schema.Types.ObjectId, ref: 'myBlogDatabase'}],         
});

var BlogFlowSchema = new Schema({
	
	BlogHead:{type: String, trim: true,sparse: true, required: false},
	BlogImageUrl:{type: String, trim: true,sparse: true, required: false},
	BlogBody:{type: String, trim: true,sparse: true, required: false},
	Topic : {type: String},
  CreatedBy : {  type: Schema.Types.ObjectId, ref: 'myUserDatabase'} ,
  CreatedDate : {type:Date},
  viewerid : [{  type: Schema.Types.ObjectId, ref: 'myUserDatabase'} ],
});

module.exports = mongoose.model('myUserDatabase', userDBSchema);

module.exports = mongoose.model('myBlogDatabase', BlogFlowSchema);