import mongoose from 'mongoose'
const Schema = mongoose.Schema

const specialtySchema = new Schema({
	name: { type: String },
	imagesUrl: {
		type: String,
	},
	description: {
		type: String,
	},
	createdAt: {
		type: Date,
		default: new Date.now(),
	},
})

module.exports = mongoose.model('specialty', specialtySchema)
