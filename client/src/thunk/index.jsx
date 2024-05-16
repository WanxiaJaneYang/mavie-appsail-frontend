import createBaseAsyncThunk from './baseThunk';
import {
	auth as authApi,
	login as loginApi,
	logout as logoutApi,
	getProductInfo as getProductInfoApi,
	getPersona as getPersonaApi,
	getCodesigners as getCodesignersApi,
	getCoDesignerSurvey as getCoDesignerSurveyApi,
	getProductShareLink as getProductShareLinkApi,
	getSurveyShareLink as getSurveyShareLinkApi,
	getProductFilter as getProductFilterApi,
	getProductRating as getProductRatingApi,
	getProductFeature as getProductFeatureApi,
	getProductReport as getProductReportApi,
	getSurveyDomains as getSurveyDomainsApi,
	getSurveyProductInfo as getSurveyProductInfoApi,
	getSurveyProductRating as getSurveyProductRatingApi,
	getSurveyProductFeature as getSurveyProductFeatureApi,
	getComparisonReport,
	getShareProductAccessInfo as getShareProductAccessInfoApi,
	getShareSurveyAccessInfo as getShareSurveyAccessInfoApi,
	sendProductReport as sendProductReportApi,
	sendSurveyReport as sendSurveyReportApi,
} from './api';
import {
	authResponseSchema,
	productInfoSchema,
	productPersonaSchema,
	productFeatureRatingSchema,
	productCodesignerSchema,
	productFilterSchema,
	codesignerSurveySchema,
	productRatingSchema,
} from './schema';

export const auth = createBaseAsyncThunk('auth/auth', authApi, authResponseSchema);
export const login = createBaseAsyncThunk('auth/login', loginApi, authResponseSchema);
export const logout = createBaseAsyncThunk('auth/logout', logoutApi);
export const getProductInfo = createBaseAsyncThunk('product/getProductInfo', getProductInfoApi, productInfoSchema);
export const getPersona = createBaseAsyncThunk('product/getPersona', getPersonaApi, productPersonaSchema);
export const getCodesigners = createBaseAsyncThunk('product/getCodesigners', getCodesignersApi, productCodesignerSchema);
export const getCoDesignerSurvey = createBaseAsyncThunk('product/getCoDesignerSurvey', getCoDesignerSurveyApi, codesignerSurveySchema);
export const getProductFilter = createBaseAsyncThunk('product/getProductFilter', getProductFilterApi, productFilterSchema);
export const getProductRating = createBaseAsyncThunk('product/getProductRating', getProductRatingApi, productRatingSchema);
export const getProductFeature = createBaseAsyncThunk('product/getProductFeature', getProductFeatureApi, productFeatureRatingSchema);
export const getReport = createBaseAsyncThunk('product/getReport', getProductReportApi);
export const getSurveyDomains = createBaseAsyncThunk('survey/getSurveyDomains', getSurveyDomainsApi);
export const getSurveyProductInfo = createBaseAsyncThunk('survey/getSurveyProductInfo', getSurveyProductInfoApi);
export const getSurveyProductRating = createBaseAsyncThunk('survey/getSurveyProductRating', getSurveyProductRatingApi);
export const getSurveyProductFeature = createBaseAsyncThunk('survey/getSurveyProductFeature', getSurveyProductFeatureApi);
export const getSurveyReport = createBaseAsyncThunk('survey/getSurveyReport', getComparisonReport);
export const getProductShareLink = createBaseAsyncThunk('product/getProductShareLink', getProductShareLinkApi);
export const getSurveyShareLink = createBaseAsyncThunk('survey/getSurveyShareLink', getSurveyShareLinkApi);
export const getShareProductAccessInfo = createBaseAsyncThunk('auth/getShareProductAcccess', getShareProductAccessInfoApi);
export const getShareSurveyAccessInfo = createBaseAsyncThunk('auth/getShareSurveyAccess', getShareSurveyAccessInfoApi);
export const sendProductReport = createBaseAsyncThunk('product/sendProductReport', sendProductReportApi);
export const sendSurveyReport = createBaseAsyncThunk('survey/sendSurveyReport', sendSurveyReportApi);
