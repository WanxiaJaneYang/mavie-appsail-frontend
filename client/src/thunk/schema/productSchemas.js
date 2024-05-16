import * as yup from 'yup';

// Schema for detailed product information
export const productInfoSchema = yup.object().shape({
	brand: yup.string(),
	brandIcon: yup.string(),
	description: yup.string(),
	image: yup.string(),
	modelName: yup.string(),
	productCategoryName: yup.string(),
	expertOpinion: yup.string(),
	overallRating: yup.number().required().positive().max(5),
});

// Schema for a product rating
export const productRatingSchema = yup.object().shape({
	domainRating: yup.array().of(
		yup.object().shape({
			id: yup.string().required(),
			rating: yup.number(),
		}),
	),
	featureRatings: yup.array().of(
		yup.object().shape({
			id: yup.string().required(),
			rating: yup.number(),
		}),
	),
});

// Schema for the product filter
export const productFilterSchema = yup.object().shape({
	domains: yup.array().of(
		yup.object().shape({
			id: yup.string().required(),
			name: yup.string().required(),
			importance: yup.number().required(),
			icon: yup.string().required(),
			roundIcon: yup.string().required(),
			featureIds: yup.array().of(yup.string().required()),
			description: yup.string().required(),
		}),
	),
	features: yup.array().of(
		yup.object().shape({
			id: yup.string().required(),
			name: yup.string().required(),
			importance: yup.number().required(),
			icon: yup.string().required(),
			description: yup.string(),
		}),
	),
});

const personaSchema = yup.object().shape({
	id: yup.string().required(),
	name: yup.string().required(),
	icon: yup.string().required(),
	min: yup.number().required().positive(),
	max: yup.number().required().positive(),
});

// Schema for the product persona
export const productPersonaSchema = yup.array().of(personaSchema).required();

// Schema for the product feature rating
export const productFeatureRatingSchema = yup.object().shape({
	percentages: yup.array().of(
		yup.number().required(),
	),
});

const codesignerSchema = yup.object().shape({
	id: yup.string().required(),
	name: yup.string().required(),
	profile: yup.string(),
});

// Schema for the product codesigner
export const productCodesignerSchema = yup.array().of(codesignerSchema).required();

// Schema for the codesigner persona survey
export const codesignerSurveySchema = yup.object().shape({
	name: yup.string().required(),
	age: yup.number().required().positive().max(120),
	gender: yup.string().required(),
	profile: yup.string(),
	staticQuestions: yup.array().of(
		yup.object().shape({
			question: yup.string().required(),
			answer: yup.string().required(),
		}),
	),
	personaCategoriesRatings: yup.array().of(
		yup.object().shape({
			id: yup.string().required(),
			rating: yup.number().required().positive().max(5),
		}),
	),
});
