import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const cloudinarySchema = mongoose.Schema({
	imageUrl: { type: String },
});

module.exports = mongoose.model('cloud', cloudinarySchema);
