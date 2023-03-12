import { model, Schema } from 'mongoose';

export const ProductType = Schema(
	{
		productId: {
			type: Schema.Types.ObjectId,
			required: true
		},
		subtitle: {
			type: String
		},
		amount: {
			type: Number,
			required: true
		},
		image: {
			public_id: String,
			secure_url: String
		}
	},
	{
		versionKey: false
	}
);

export default model('ProductType', ProductType);
