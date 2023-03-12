import { model, Schema } from 'mongoose';

export const TypeOfProduct = Schema(
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
			secure_id: String,
			required: true
		}
	},
	{
		versionKey: false
	}
);

export default model('TypeOfProduct', TypeOfProduct);
