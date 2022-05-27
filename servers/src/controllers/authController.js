import User from '../models/User';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

class authController {
	async registerUser(req, res) {
		const { username, email, password, ...props } = req.body;
		try {
			const data = await User.findOne({
				username: username,
				email: email,
			});
			if (data)
				return res.status(400).json({
					success: false,
					message: 'This email already exists',
					props: props,
				});

			const passwordHash = await argon2.hash(password);
			const newUser = new User({
				username,
				email,
				password: passwordHash,
				...props,
			});
			newUser.save();
			res.status(200).json({
				success: true,
				message: 'Create successfully',
				newUser,
				props: props,
			});
		} catch (error) {
			res.status(404).json({
				success: false,
				message: 'Internal Server error',
			});
		}
	}
	//Login User
	async loginUser(req, res) {
		const { username, password } = req.body;

		if (!username || !password)
			return res
				.status(404)
				.json({ success: false, message: 'Missing Username and password' });
		try {
			// check for existing username
			const user = await User.findOne({ username });
			if (!user)
				return res.status(500).json({
					success: false,
					message: 'Incorrect username or password',
				});
			//username found
			const passwordValid = await argon2.verify(user.password, password);
			if (!passwordValid)
				return res.status(404).json({
					success: false,
					message: 'Incorrect username or password',
				});
			// Return token
			const accessToken = jwt.sign(
				{ userId: user._id },
				process.env.ACCESS_TOKEN
			);
			res.json({
				success: true,
				message: 'Login Successfully',
				accessToken,
				users: {
					username: user.username,
					roleId: user.roleId,
					email: user.email,
				},
			});
		} catch (err) {
			res.status(500).json({
				success: false,
				message: 'Internal Server error',
			});
		}
	}
	// Get All Users
	async getAllUsers(req, res) {
		try {
			const _id = req.query.id;
			if (!_id) {
				const user = await User.find({}).select('-password');
				return res
					.status(200)
					.json({ success: true, message: 'Get user successfully', user });
			} else {
				const user = await User.findOne({ _id: _id }).select('-password');
				console.log(!_id);
				return res
					.status(200)
					.json({ success: true, message: 'Get One User', user });
			}
		} catch (error) {
			return res
				.status(500)
				.json({ success: false, message: 'User not found', error });
		}
	}
	async getUserById(req, res) {
		try {
			const id = req.query.id;
			if (!id) {
				return res
					.status(201)
					.json({ success: false, message: 'Get user failed' });
			}
			const user = await User.findOne({ _id: id }).select('-password');
			return res.status(200).json({
				success: true,
				message: 'Get One User successfully',
				user,
			});
		} catch (error) {
			return res
				.status(500)
				.json({ success: false, message: 'User not found', error });
		}
	}
	//Create New user
	async createUser(req, res) {
		const {
			username,
			email,
			password,
			fullName,
			address,
			phoneNumber,
			gender,
			roleId,
			positionId,
		} = req.body;
		try {
			const data = await User.findOne({
				username: username,
				email: email,
			});
			if (data)
				return res.status(201).json({
					success: false,
					message: 'This email already exists',
				});

			const passwordHash = await argon2.hash(password);
			const newUser = new User({
				username,
				email,
				password: passwordHash,
				fullName,
				address,
				phoneNumber,
				gender,
				roleId,
				positionId,
			});
			await newUser.save();
			res.status(201).json({
				success: true,
				message: 'Create successfully',
				newUser,
			});
		} catch (error) {
			res.status(500).json({
				success: false,
				message: 'Internal Server error',
				error,
			});
		}
	}

	//Edit User
	async editUser(req, res) {
		const id = req.query.id;
		const {
			username,
			email,
			fullName,
			address,
			phoneNumber,
			gender,
			roleId,
			positionId,
		} = req.body;
		try {
			const id = req.query.id;
			// Check query id # undefined
			if (!id)
				return res
					.status(404)
					.json({ success: false, message: 'user is not exist' });
			// Check ObjectId By query ID
			if (!mongoose.isValidObjectId(id))
				return res
					.status(404)
					.json({ success: false, message: 'user is not exist ' });
			// const passwordHash = await argon2.hash(password)

			const user = await User.findOneAndUpdate(
				{ _id: id },
				{
					// password: passwordHash,
					username,
					email,
					fullName,
					address,
					phoneNumber,
					gender,
					roleId,
					positionId,
				}
			);
			// Check User
			if (!user)
				return res
					.status(404)
					.json({ success: false, message: 'user is not exist' });
			return res
				.status(200)
				.json({ success: true, message: 'Update users  successfully' });
		} catch (error) {
			res.status(500).json({
				success: false,
				message: 'Internal Server error',
			});
		}
	}
	async deleteUser(req, res) {
		const id = req.query.id;
		try {
			const id = req.query.id;
			console.log(mongoose.isValidObjectId(id));
			// Check query id # undefined
			if (!id)
				return res
					.status(201)
					.json({ success: false, message: 'user is not exist' });
			// Check ObjectId By query ID
			if (!mongoose.isValidObjectId(id))
				return res
					.status(201)
					.json({ success: false, message: 'user is not exist ' });

			const user = await User.findOneAndDelete({ _id: id });
			// Check User
			if (!user)
				return res
					.status(201)
					.json({ success: false, message: 'user is not exist' });
			// await User.save()
			return res
				.status(200)
				.json({ success: true, message: 'Delete users  successfully' });
		} catch (error) {
			res.status(500).json({
				success: false,
				message: 'Internal Server error',
			});
		}
	}
}

module.exports = new authController();
