var mongoose = require('mongoose')
,Schema = mongoose.Schema;

var userSchema = new Schema({
	created: Date,
	name: String,
	username: String,
	email: String,
	hash: String,
	projects: [Schema.Types.ObjectId]
});

module.exports = mongoose.model('User', userSchema);