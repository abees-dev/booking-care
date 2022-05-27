import User from '../models/User';
import Clouds from '../models/Clouds';
import cloudinary from '../utils/cloudinary';
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

// const storage = new CloudinaryStorage({
// 	cloudinary,
// 	params: {
// 		folder: 'bookingcate',
// 	},
// });
// const upload = multer({ storage: multer.diskStorage({}) });
class homeController {
	async upLoadImg(req, res) {
		console.log(req.file);
		try {
			const uploadRes = await cloudinary.uploader.upload(req.file.path, {
				upload_preset: 'bookingcare',
			});
			const newClouds = new Clouds({
				imageUrl: uploadRes.secure_url,
			});
			await newClouds.save();
			return res.json({ uploadRes });
		} catch (error) {
			return res
				.status(500)
				.json({ success: false, message: 'interval sever' });
		}
	}
}

module.exports = new homeController();
