import { useSelector, useDispatch } from 'react-redux';
import { Chip, Box, Typography } from '@mui/material';
import { setSelectedProductIds } from '../../../../../features/filters/surveySlice';

function SelectedRelatedProductChips() {
	const dispatch = useDispatch();
	const {
		currentSurvey, selectedRelatedProductIds,
	} = useSelector((state) => state.filters.survey);
	const relatedProductList = currentSurvey?.relatedProductList;

	const onProductChipClick = (productId) => {
		// if the product is already selected, deselect it
		if (selectedRelatedProductIds.includes(productId)) {
			const updatedProductIds = selectedRelatedProductIds.filter((id) => id !== productId);
			dispatch(setSelectedProductIds(updatedProductIds));
		} else {
			// if the product is not selected, select it
			const updatedProductIds = [...selectedRelatedProductIds, productId];
			dispatch(setSelectedProductIds(updatedProductIds));
		}
	};

	const selected = (productId) => {
		if (selectedRelatedProductIds.includes(productId)) {
			return true;
		}
		return false;
	};

	return (
		relatedProductList?.map((product) => (
			<Chip
				key={`${product.id}-chip`}
				label={(
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<Box sx={{
							width: '6px',
							height: '6px',
							borderRadius: '50%',
							backgroundColor: 'currentColor',
							marginRight: '8px',
						}}
						/>
						<Typography variant="body2">
							{product.name}
						</Typography>
					</Box>
				)}
				sx={{
					margin: '5px',
				}}
				onClick={() => onProductChipClick(product.id)}
				variant={selected(product.id) ? 'default' : 'outlined'}
			/>
		))
	);
}

export default SelectedRelatedProductChips;
