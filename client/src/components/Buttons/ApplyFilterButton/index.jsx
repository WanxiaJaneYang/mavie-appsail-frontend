import { Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { getCodesigners } from '../../../thunk';

function ApplyFilterButton() {
	const dispatch = useDispatch();
	const queryParamString = useSelector((state) => state.filters.persona.queryParamString);
	const { minAge, maxAge } = useSelector((state) => state.filters.age);
	const { male, female } = useSelector((state) => state.filters.gender.selectedGender);
	const personaState = useSelector((state) => state.filters.persona);
	const currentSelectedProduct = useSelector((state) => state.filters.product.currentProduct);
	const applyEnabled = currentSelectedProduct !== null;

	const getPersonaQueryString = () => {
		const personaFilterKeys = Object.keys(personaState);
		const selectedPersonaFilter = personaFilterKeys.map((key) => {
			const { selectedMin, selectedMax, name } = personaState[key];
			return `${name}_min=${selectedMin}&${name}_max=${selectedMax}`;
		})
			.join('&');
		return selectedPersonaFilter;
	};
	const handleApply = () => {
		let query = `age_min=${minAge}&age_max=${maxAge}`;
		if (male) {
			query += '&male';
		}
		if (female) {
			query += '&female';
		}
		const personaQuery = getPersonaQueryString();
		if (personaQuery) {
			query += `&${personaQuery}`;
		}
		console.log('personaQuery:', personaQuery);
		dispatch(getCodesigners({ productId: currentSelectedProduct.id, queryParams: query }));
	};

	return (
		<Button
			onClick={handleApply}
			style={{
				// cursor: 'pointer',
				padding: '-2px',
				fontWeight: '500',
				fontSize: '12px',
			}}
			size="small"
			variant="outlined"
			disabled={!applyEnabled}
		>
			Apply
		</Button>
	);
}

export default ApplyFilterButton;
