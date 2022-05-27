import mongoose from 'mongoose'
const Schema = mongoose.Schema

const UserSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	fullName: {
		type: String,
		required: true,
	},
	address: {
		type: String,
	},
	phoneNumber: {
		type: String,
		maxLength: 11,
	},
	gender: {
		type: String,
	},
	imageUrl: { type: String },
	roleId: {
		type: String,
	},
	positionId: { type: String },
	createdAt: {
		type: Date,
		timeZone: '+07:00',
		default: Date.now(),
	},
})

module.exports = mongoose.model('Users', UserSchema)
