import mongoose from 'mongoose'
const Schema = mongoose.Schema

const bookingSchema = new Schema({
	statusId: {
		type: String,
	},
	doctorId: {
		type: String,
		required: true,
		unique: true,
	},
	patientId: {
		type: String,
		required: true,
		unique: true,
	},
	date: {
		type: Date,
		default: new Date.now(),
	},
	timeType: {
		type: String,
	},
})

module.exports = mongoose.model('booking', bookingSchema)
