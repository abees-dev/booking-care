import mongoose from 'mongoose'

const Schema = mongoose.Schema

const scheduleSchema = new Schema({
	currentNumber: {
		type: Number,
	},
	maxNumber: {
		type: Number,
	},
	date: {
		type: Date,
	},
	timeType: {
		type: String,
	},
	doctorId: {
		type: String,
	},
})

module.exports = mongoose.model('schedule', scheduleSchema)
