import fs from 'fs-extra';

import { uploadImage } from '../config/cloudinary.js';
import ProductType from '../model/ProductType.js';

export const addProductType = async (request, response) => {
	const newProductType = new ProductType(request.body);
	if (request.files?.image) {
		const imagePath = request.files.image.tempFilePath;
		const imageUpload = await uploadImage(imagePath);
		newProductType.image = {
			public_id: imageUpload.public_id,
			secure_url: imageUpload.secure_url
		};
		fs.removeSync(imagePath);
	}
	await newProductType.save();
	response.sendStatus(200);
};

export const deleteProductType = async (request, response) => {
	await ProductType.findByIdAndDelete(request.params.id);
	response.sendStatus(200);
}
