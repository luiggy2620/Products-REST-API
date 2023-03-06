import { model, Schema } from 'mongoose';

const ProductSchema = Schema({
	title: {
		type: String,
		required: true,
		unique: true
	},
	description: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	amount: {
		type: Number,
		required: true
	},
	tags: {
		type: Array
	},
	images: {
		type: Array
	},
	types: {
		type: Array
	},
	message: {
		type: Array
	}
});

export default model('Product', ProductSchema);
