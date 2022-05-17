import express from 'express'
import homeControlers from '../controllers/homeController'
import authController from '../controllers/authController'
const router = express.Router()

const initRoutes = (app) => {
	router.get('/', (req, res) => res.render('homePage.ejs'))
	// router.post('/post', authController.post)
	router.get('/user', homeControlers.getAllUsers)
	router.get('/user/edit', homeControlers.getUserById)
	router.post('/api/auth/register', authController.registerUser)
	router.post('/user/edit/update', authController.updateUser)
	return app.use('/', router)
}

module.exports = initRoutes
