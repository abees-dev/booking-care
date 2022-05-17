import mongoose from 'mongoose'
import 'dotenv/config'

const connectData = async () => {
	try {
		await mongoose.connect(
			`mongodb+srv://${process.env.USER_NAME}:${process.env.PASS_WORD}@${process.env.DATA_BASE}.ezkob.mongodb.net/bookingcare?retryWrites=true&w=majority`
		)
		console.log('mongoose connected successfuly')
	} catch (error) {
		console.log('mongoose connected faild', error)
	}
}

module.exports = connectData
