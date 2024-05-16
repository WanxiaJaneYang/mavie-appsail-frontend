import { Box, Grid, Divider } from '@mui/material';
import { useSelector } from 'react-redux';
import PersonaSelector from '../../../../components/Selectors/PersonaFilterWithSliderWithoutRuler';
import DomainSelector from '../../../../components/Selectors/DomainSelector';
import ViewToggle from './ViewToggle';
import AgeSelector from './AgeSelector';
import GenderSelector from './GenderSelector';
import FilterReset from './FilterReset';
import ShareButton from '../../../../components/Buttons/ShareButton';
import LogoutButton from '../../../../components/Buttons/LogoutButton';
import ProductOrSurveySelector from '../../../../components/Selectors/ProductOrSurveySelector';

function ProductFilter() {
	const currentSelectedProduct = useSelector((state) => state.filters.product.currentProduct);
	const { currentSurvey, isSurvey } = useSelector((state) => state.filters.survey);

	const productFilterPanel = () => (
		<>
			<FilterReset
				sx={{
					position: 'sticky', top: 0, zIndex: 10, width: '90%',
				}}
			/>
			<Box
				sx={{
					overflowY: 'auto',
					overflowX: 'hidden',
					flex: 1,
					width: '100%',
				// paddingLeft: '10px',
				}}
			>

				<PersonaSelector />

				<Divider sx={{
					width: '100%',
					marginTop: '10px',
					marginBottom: '10px',
				}}
				/>

				<AgeSelector />
				<GenderSelector />

				<Divider sx={{
					width: '100%',
					marginTop: '10px',
				// marginBottom: '10px',
				}}
				/>

				<DomainSelector />
				<ViewToggle />
			</Box>
		</>
	);

	const surveyFilterPanel = () => (
		<>
			<FilterReset
				sx={{
					position: 'sticky', top: 0, zIndex: 10, width: '90%',
				}}
			/>
			<Box
				sx={{
					overflowY: 'auto',
					overflowX: 'hidden',
					flex: 1,
					width: '100%',
					// paddingLeft: '10px',
				}}
			>
				<DomainSelector />
				<ViewToggle />
			</Box>
		</>
	);

	const renderFilterPanel = () => {
		if (!isSurvey && currentSelectedProduct) {
			return productFilterPanel();
		}
		if (isSurvey && currentSurvey) {
			return surveyFilterPanel();
		}
		return null;
	};
	return (
		<Box
			sx={
				{
					position: 'relative', // added
					maxHeight: '100vh', // ensure it does not exceed the viewport height
					overflow: 'auto', // hide the scrollbars
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'start',
					alignItems: 'start',
					width: '95%',
					height: '100%',
					marginTop: '10px',
					paddingLeft: '23px',
					paddingRight: '5px',
					marginLeft: '0px',
					marginRight: '0px',
					marginBottom: '10px',
					borderRadius: '0px 0px 0px 0px',
					boxShadow: '0px 0px 0px 0px',
				}
			}
		>
			<ProductOrSurveySelector />
			<Divider
				sx={{
					width: '100%',
					marginTop: '10px',
				}}
			/>
			{
				renderFilterPanel()
			}
			<Grid
				container
				spacing={1}
				sx={{
					position: 'sticky', bottom: 0, zIndex: 10,
				}}
			>
				<Grid item xs={6}>
					<ShareButton />
				</Grid>
				<Grid item xs={6}>
					<LogoutButton />
				</Grid>
			</Grid>
		</Box>
	);
}

export default ProductFilter;
