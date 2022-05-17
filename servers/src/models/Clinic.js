import mongoose from 'mongoose'
const schema = mongoose.Schema

const clinicSchema = mongoose.Schema({
	name: { type: String },
	address: { type: String, required: true },
	description: { type: String },
	imageUrl: { type: String, required: true },
})

module.exports = mongoose.model('clinic', clinicSchema)
