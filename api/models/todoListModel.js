'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userDBSchema = new Schema({
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
  blogIDs : [],         
});

var BlogFlowSchema = new Schema({
	
	BlogHead:{type: String, trim: true,sparse: true, required: false},
	BlogImageUrl:{type: String, trim: true,sparse: true, required: false},
	BlogBody:{type: String, trim: true,sparse: true, required: false},
	Topic : {type: String},
  userid : [{ type: Schema.Types.ObjectId, ref: 'creator' }],
  CreatedBy : {type: String, trim: true},
  CreatedDate : {type:Date},
});

var BlogSchema = new Schema({
  Heading: {type: String, trim: true, required: true},
  Intro: {type: String, trim: true},
  blog: {type: String, trim: true, required: true},
  CreatedBy : {type: String, trim: true, required: true},
  CreatedDate : {type:Date},
  Topic : {type: String}
})

module.exports = mongoose.model('myUserDatabase', userDBSchema);

module.exports = mongoose.model('blog', BlogSchema);

module.exports = mongoose.model('myBlogDatabase', BlogFlowSchema);