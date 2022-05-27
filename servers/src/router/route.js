import express from 'express';
import homeControllers from '../controllers/homeController';
import authController from '../controllers/authController';
import allCodeControllers from '../controllers/allCodeControllers';
const multer = require('multer');
const upload = multer({ storage: multer.diskStorage({}) });
const router = express.Router();

const initRoutes = (app) => {
	// Auth Router
	router.post('/api/auth/register', authController.registerUser);
	router.post('/api/auth/login', authController.loginUser);
	//
	router.get('/api/auth/get-all-users', authController.getAllUsers);
	router.get('/api/auth/get-user-by-id', authController.getUserById);
	router.post('/api/auth/create-new-user', authController.createUser);
	router.post('/api/auth/delete-user', authController.deleteUser);
	router.post('/api/auth/edit-user', authController.editUser);
	router.delete('/api/auth/delete-user', authController.deleteUser);
	// allCode
	router.get('/api/all-code', allCodeControllers.getAllCode);

	router.post(
		'/api/clouds',
		upload.single('imageUrl'),
		homeControllers.upLoadImg
	);

	return app.use('/', router);
};

module.exports = initRoutes;
