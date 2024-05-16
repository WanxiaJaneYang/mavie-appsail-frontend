import axiosInstance from '../../utils/apiHelper/axiosInstance';

export const auth = async () => axiosInstance.get('/auth');

export const logout = async () => axiosInstance.get('/logout');

export const login = async (loginInfo) => axiosInstance.post('/login', loginInfo);

export const getProductInfo = async (productId) => axiosInstance.get(`/product/${productId}`);

export const getSurveyProductInfo = async ({ surveyId, productIds }) => axiosInstance.post(`/survey/${surveyId}/productInfo`, { productIds });

export const getProductFilter = async (productId) => axiosInstance.get(`/product/${productId}/filter`);

export const getSurveyDomains = async ({ surveyId, productIds }) => axiosInstance.post(`/survey/${surveyId}/domains`, { productIds });

export const getProductRating = async (productId) => axiosInstance.get(`/product/${productId}/rating`);

export const getSurveyProductRating = async ({ surveyId, productIds }) => axiosInstance.post(`/survey/${surveyId}/rating`, { productIds });

export const getProductFeature = async ({ productId, featureId }) => axiosInstance.get(`/product/${productId}/feature/${featureId}`);

export const getSurveyProductFeature = async ({ surveyId, productId, featureId }) => axiosInstance.get(`/survey/${surveyId}/product/${productId}/feature/${featureId}`);

export const getPersona = async (productId) => axiosInstance.get(`/product/${productId}/persona`);

export const getSurveyPersona = async (surveyId) => axiosInstance.get(`/survey/${surveyId}/persona`);

export const getCodesigners = async ({ productId, queryParams }) => {
	if (!queryParams) {
		return axiosInstance.get(`/product/${productId}/codesigner`);
	}
	return axiosInstance.get(`/product/${productId}/codesigner?${queryParams}`);
};

export const getSurveyCodesigners = async ({ surveyId, queryParams }) => {
	if (!queryParams) {
		return axiosInstance.get(`/survey/${surveyId}/codesigner`);
	}
	return axiosInstance.get(`/survey/${surveyId}/codesigner?${queryParams}`);
};

export const getCoDesignerSurvey = async ({ productId, coDesignerId }) => axiosInstance.get(`/product/${productId}/codesigner/${coDesignerId}`);

export const getSurveyCoDesignerSurvey = async ({ surveyId, coDesignerId }) => axiosInstance.get(`/survey/${surveyId}/codesigner/${coDesignerId}`);

export const getProductShareLink = async ({ productId }) => axiosInstance.get(`/product/${productId}/shareLink`);

export const getSurveyShareLink = async ({ surveyId }) => axiosInstance.get(`/survey/${surveyId}/shareLink`);
export const verifyCode = async ({ productId, code }) => axiosInstance.post(`/product/${productId}/verifyCode`, {
	uuid: code,
});

export const generateReport = async ({ productId, reportType, pageHtml }) => {
	const response = await axiosInstance.post(`/product/${productId}/report?reportType=${reportType}`, {
		pageHtml,
	}, {
		responseType: 'blob',
	});
	const file = new Blob([response], { type: 'application/pdf' });
	const fileURL = URL.createObjectURL(file);
	window.open(fileURL);
};

export const getProductReport = async ({
	productId, reportType, comment, commentTitle,
}) => {
	const response = await axiosInstance.post(`/product/${productId}/report?type=${reportType}`, {
		comment,
		commentTitle,
	}, {
		responseType: 'blob',
		headers: {
			'Include-Headers': 'true',
		},
	});
	const file = new Blob([response.data], { type: 'application/pdf' });
	const fileName = `${reportType}-${productId}.pdf`;
	if (fileName) {
		const fileURL = URL.createObjectURL(file);
		const link = document.createElement('a');
		link.href = fileURL;
		link.setAttribute('download', fileName);
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}
};

export const getComparisonReport = async ({
	surveyId, comment, commentTitle,
}) => {
	const response = await axiosInstance.post(`/survey/${surveyId}/report`, {
		comment,
		commentTitle,
	}, {
		responseType: 'blob',
		headers: {
			'Include-Headers': 'true',
		},
	});
	const file = new Blob([response.data], { type: 'application/pdf' });
	const fileName = `Comparative-Report-${surveyId}.pdf`;
	if (fileName) {
		const fileURL = URL.createObjectURL(file);
		const link = document.createElement('a');
		link.href = fileURL;
		link.setAttribute('download', fileName);
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}
};

export const getShareProductAccessInfo = async ({
	productId,
}) => axiosInstance.get(`/product/${productId}/access`);

export const getShareSurveyAccessInfo = async ({
	surveyId,
}) => axiosInstance.get(`/survey/${surveyId}/`);

export const sendProductReport = async ({
	productId, comment, commentTitle, emails, reportType,
}) => axiosInstance.post(`/product/${productId}/sendReport?type=${reportType}`, {
	comment,
	commentTitle,
	emails,
});

export const sendSurveyReport = async ({
	surveyId, comment, commentTitle, emails,
}) => axiosInstance.post(`/survey/${surveyId}/sendReport`, {
	comment,
	commentTitle,
	emails,
});
