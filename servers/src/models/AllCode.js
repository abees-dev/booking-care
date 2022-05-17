import mongoose from 'mongoose'
const Schema = mongoose.Schema

const allCodeSchema = new Schema({
	key: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		required: true,
	},
	valueEn: {
		type: String,
	},
	valueVi: {
		type: String,
	},
})

module.exports = mongoose.model('allcode', allCodeSchema)
