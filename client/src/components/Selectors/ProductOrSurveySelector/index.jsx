import { useSelector, useDispatch } from 'react-redux';
import {
	Box, Divider, Tabs, Tab,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect } from 'react';
import { setCurrentProduct } from '../../../features/filters/productListSlice';
import { setIsSurvey, setCurrentSurvey } from '../../../features/filters/surveySlice';
import ProductSelector from './ProductSelector';
import SurveySelector from './SurveySelector';
import theme from '../../../theme';

const MavyTab = styled(Tab)({
	'&.Mui-selected': {
		backgroundColor: theme.palette.primary.main, //
		color: theme.palette.primary.contrastText,
		borderRadius: '5px 5px 0px 0px',
	},
	'&.MuiTab-root': {
		fontFamily: 'Inter, sans-serif',
		fontWeight: '600',
		fontSize: '14px',
		color: theme.palette.dark,
		marginLeft: '10px',
		textAlign: 'left',
		justifyContent: 'center',
		textTransform: 'none',
		padding: '0px',
		margin: '0px',
		minWidth: '70px',
		minHeight: '36px',
	},

});

const MavyTabs = styled(Tabs)({
	'& .MuiTabs-indicator': {
		display: 'none',
	},
	'&.MuiTabs-root': {
		minHeight: '36px',
	},

});

function ProductOrSurveySelector() {
	const { isSurvey, surveyList } = useSelector((state) => state.filters.survey);
	const { products } = useSelector((state) => state.filters.product);
	const surveyExistedInUrl = window.location.href.includes('survey');
	const dispatch = useDispatch();
	const value = () => {
		if (isSurvey) {
			return 'Survey';
		}
		return 'Product';
	};

	const onChange = (_, newValue) => {
		if (newValue === 'Survey') {
			dispatch(setIsSurvey(true));
			dispatch(setCurrentProduct(null));
			const survey = surveyList[0];
			dispatch(setCurrentSurvey(survey));
		} else {
			dispatch(setIsSurvey(false));
			dispatch(setCurrentSurvey(null));
			const product = products[0];
			dispatch(setCurrentProduct(product));
		}
	};

	const productTabDisabled = () => {
		if (products?.length > 0) {
			return false;
		}
		return true;
	};

	const surveyTabDisabled = () => {
		if (surveyList?.length > 0) {
			return false;
		}
		return true;
	};

	useEffect(
		() => {
			if (surveyExistedInUrl) {
				dispatch(setIsSurvey(true));
				dispatch(setCurrentProduct(null));
			}
		},
		[dispatch, surveyExistedInUrl],
	);
	return (
		<Box width="100%" justifyContent="center">
			<MavyTabs
				value={value()}
				onChange={onChange}
				aria-label="disabled tabs example"
			>
				<MavyTab label="Single" value="Product" disabled={productTabDisabled()} />
				<MavyTab
					label="Comparative"
					value="Survey"
					disabled={surveyTabDisabled()}
					sx={{
						'&.MuiTab-root': {
							minWidth: '100px',
						},
					}}
				/>
			</MavyTabs>
			<Divider sx={{ marginBottom: '15px' }} />
			<Box width="90%" justifyContent="center" display="flex" justifyItems="center" justifySelf="center">
				{isSurvey ? <SurveySelector /> : <ProductSelector />}
			</Box>
		</Box>

	);
}
export default ProductOrSurveySelector;
