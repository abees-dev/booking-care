import mongoose from 'mongoose'
const Schema = mongoose.Schema

const historySchema = new Schema({
	patientId: {
		type: String,
		required: true,
		unique: true,
	},
	doctorId: {
		type: String,
		required: true,
		unique: true,
	},
	description: {
		type: String,
	},
	file: {
		type: String,
	},
})

module.exports = mongoose.model('history', historySchema)
