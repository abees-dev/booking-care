import mongoose from 'mongoose'
const Schema = mongoose.Schema

const UserSchema = new Schema({
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
		default: '',
	},
	address: {
		type: String,
		default: '',
	},
	phoneNumber: {
		type: String,
		maxLength: 11,
		default: '',
	},
	gender: {
		type: Boolean,
		required: true,
		default: '',
	},
	imageUrl: { type: String },
	roleId: {
		type: String,
		default: '',
	},
	positionId: { type: String },
	createdAt: {
		type: Date,
		default: Date.now(),
	},
})

module.exports = mongoose.model('Users', UserSchema)
