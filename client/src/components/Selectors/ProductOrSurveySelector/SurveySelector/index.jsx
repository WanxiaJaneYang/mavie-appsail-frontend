import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import { useEffect } from 'react';
import SelectedRelatedProductChips from './SelectedRelatedProductChips';
import { setCurrentSurvey, setSelectedProductIds } from '../../../../features/filters/surveySlice';

function SurveySelector() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const {
		currentSurvey, surveyList, selectedProductIds,
	} = useSelector((state) => state.filters.survey);
	const { surveyId, clientId } = useParams();

	const handleChange = (event) => {
		const selectedSurvey = surveyList.find((survey) => survey.id === event.target.value);
		const productIds = selectedSurvey.relatedProductList.map((product) => product.id);
		dispatch(setCurrentSurvey(selectedSurvey));
		dispatch(setSelectedProductIds(productIds));
		navigate(`/client/${clientId}/survey/${selectedSurvey.id}/metrics`);
	};

	const selectedValue = currentSurvey ? currentSurvey.id : '';

	useEffect(() => {
		if (surveyId) {
			const urlSurvey = surveyList.find((survey) => survey.id === surveyId);
			dispatch(setCurrentSurvey(urlSurvey));
		} else if (currentSurvey) {
			navigate(`/client/${clientId}/survey/${currentSurvey.id}/metrics`);
		}
	}, [currentSurvey, surveyList, surveyId, dispatch, navigate, clientId]);

	useEffect(() => {
		if (currentSurvey && selectedProductIds?.length === 0) {
			const productIds = currentSurvey.relatedProductList.map((product) => product.id);
			dispatch(setSelectedProductIds(productIds));
		}
	}, [currentSurvey, dispatch, selectedProductIds]);

	const getRenderedValue = () => {
		// only display the name of the survey when it is chosen
		if (currentSurvey) {
			return currentSurvey.name;
		}
		return 'Select Survey';
	};

	return (
		<Box sx={{ width: '100%' }}>
			<Select
				value={selectedValue}
				onChange={handleChange}
				inputProps={{ 'aria-label': 'Without label' }}
				sx={
					{
						marginLeft: '0px',
						marginBottom: '10px',
						marginTop: '10px',
						width: '100%',
						height: '35px',
						textAlign: 'left',
						paddingLeft: '0px',
					}
				}
				renderValue={getRenderedValue}
			>
				{surveyList && surveyList.map((survey) => (
					<MenuItem
						key={survey.id}
						value={survey.id}
						sx={{
							fontFamily: 'Inter, sans-serif',
							fontWeight: '400',
							display: 'flex',
							flexDirection: 'column',
							alignContent: 'flex-start',
							textAlign: 'left', // Ensure text aligns to the left
						}}
					>
						<Typography key={`${survey.id}-name`}>
							{survey.name}
						</Typography>
						{survey.relatedProductList?.map((product) => (
							<Box
								key={product.id}
								sx={{
									width: '100%',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'flex-start',
									pl: 2,
								}}
							>
								<Box sx={{
									width: '4px',
									height: '4px',
									borderRadius: '50%',
									backgroundColor: 'currentColor',
									marginRight: '8px',
								}}
								/>
								<Typography>
									{product.name}
								</Typography>
							</Box>
						))}
					</MenuItem>

				))}
			</Select>
			<SelectedRelatedProductChips />
		</Box>
	);
}

export default SurveySelector;
