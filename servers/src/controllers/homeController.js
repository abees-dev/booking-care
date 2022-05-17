import User from '../models/User'
class homeController {
	async getAllUsers(req, res) {
		const user = await User.find({})
		console.log(user)
		res.render('displayUser.ejs', { data: user })
	}
	async getUserById(req, res) {
		const user = await User.findById(req.query.id)
		if (req.query.id) {
			console.log(user)
			res.render('editUser.ejs', { user })
		} else {
			return res
				.status(404)
				.json({ success: false, message: 'Users Not Found' })
		}
	}
}

module.exports = new homeController()
