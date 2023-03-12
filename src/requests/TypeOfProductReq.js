import TypeOfProduct from '../model/TypeOfProduct.js';
import fs from 'fs-extra';

import { uploadImage } from '../config/cloudinary.js';

export const addTypeOfProduct = async (request, response) => {
	const newTypeOfProduct = new TypeOfProduct(request.body);
	if (request.files?.image) {
		const imagePath = request.files.image.tempFilePath;
		const imageUpload = await uploadImage(imagePath);
		newTypeOfProduct.image = {
			public_id: imageUpload.public_id,
			secure_url: imageUpload.secure_url
		};
		fs.removeSync(imagePath);
	}
	await newTypeOfProduct.save();
	response.sendStatus(200);
};
