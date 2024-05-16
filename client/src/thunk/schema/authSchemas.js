import * as yup from 'yup';

// Schema for a product (used in multiple places)
export const productSchema = yup.object().shape({
	id: yup.string().required(),
	name: yup.string().required(),
});

export const surveySchema = yup.object().shape({
	id: yup.string().required(),
	name: yup.string().required(),
	relatedProductList: yup.array().of(productSchema).required(),
});

// Schema for the auth check response
export const authResponseSchema = yup.object().shape({
	userId: yup.string().required(),
	productList: yup.array().of(productSchema).required(),
	surveyList: yup.array().of(surveySchema).required(),
});
