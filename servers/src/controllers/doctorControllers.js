import User from '../models/User';

class doctorControllers {
	async getAllDoctor(req, res) {
		let limit = req.query.limit;
		if (!limit) limit = 10;
		try {
			const doctor = await User.find({ roleId: 'Doctor' })
				.limit(limit)
				.sort({ createdAt: 1 });
			return res.status(200).json({ doctor });
		} catch (error) {
			return res
				.status(500)
				.json({ success: false, message: 'internal server' });
		}
	}
}

module.exports = new doctorControllers();
