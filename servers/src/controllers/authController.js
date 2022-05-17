import User from '../models/User'
import argon2 from 'argon2'

class authController {
	async registerUser(req, res) {
		const { email, password, ...props } = req.body
		try {
			const data = await User.findOne({ email: email })
			if (data)
				return res.status(400).json({
					success: false,
					message: 'This email already exists',
					props: props,
				})

			const passwordHash = await argon2.hash(password)
			const newUser = new User({
				email,
				password: passwordHash,
				...props,
			})
			newUser.save()
			res.status(200).json({
				success: true,
				message: 'Create successfuly',
				newUser,
				props: props,
			})
		} catch (error) {
			res.status(404).json({ message: 'Loi tu sever' })
		}
	}
	//Login User
	async loginUser(req, res) {}
	//

	async updateUser(req, res) {
		try {
			const { email, fullName, phoneNumber, address, gender } = req.body
			const user = await User.findOneAndUpdate(req.query.id, {
				email,
				fullName,
				phoneNumber,
				address,
				gender,
			})
			return res
				.status(200)
				.json({ success: true, message: 'update succesfuly', user: user })
			console.log(req.body)
		} catch (error) {
			res.status(500).json({ success: false, message: 'Dell Pk Loi Gi' })
		}
	}
}

module.exports = new authController()
