import { model, Schema } from 'mongoose';

const ProductSchema = Schema(
	{
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
		tags: {
			type: Array
		},
		reviews: {
			type: Array
		}
	},
	{
		versionKey: false
	}
);

export default model('Product', ProductSchema);
