import AllCode from '../models/AllCode'

class allCodeControllers {
	async getAllCode(req, res) {
		const type = req.query.type
		if (!type)
			return res
				.status(200)
				.json({ success: true, message: 'Missing the parameter' })
		try {
			const data = await AllCode.find({ type: type })
			return res
				.status(200)
				.json({ success: true, message: 'Get all code successfully', data })
		} catch (error) {
			return res
				.status(500)
				.json({ success: false, message: 'Loi server', error })
		}
	}
}

module.exports = new allCodeControllers()
