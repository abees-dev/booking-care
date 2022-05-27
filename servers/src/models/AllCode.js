import mongoose from 'mongoose'
const Schema = mongoose.Schema

const allCodeSchema = new Schema({
	keys: {
		type: String,
		required: true,
	},
	type: {
		type: String,
	},
	valueEn: {
		type: String,
	},
	valueVi: {
		type: String,
	},
})

module.exports = mongoose.model('Allcode', allCodeSchema)
