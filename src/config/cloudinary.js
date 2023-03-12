import { v2 as cloudinary } from 'cloudinary';
import { CLOUD_NAME, API_KEY, API_SECRECT } from '../env/variables.js';

cloudinary.config({
	cloud_name: CLOUD_NAME,
	api_key: API_KEY,
	api_secret: API_SECRECT,
	secure: true
});

export const uploadImage = async (imagePath) => {
	try {
		return await cloudinary.uploader.upload(imagePath, {
			folder: 'productImages'
		});
	} catch (err) {
		console.log(err);
	}
};
