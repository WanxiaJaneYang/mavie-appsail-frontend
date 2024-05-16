import { useSelector } from 'react-redux';
import { Grid, Skeleton } from '@mui/material';
import SingleCodesignerCard from '../../../components/Cards/CoDesignerCard';

function PersonaCards() {
	const { loading, error } = useSelector((state) => state.persona);
	const ids = useSelector((state) => state.codesigner.ids);
	// const selectedPersonas = useSelector((state) => state.filters.persona);

	const getPersonaCards = () => {
		if (ids && ids.length > 0) {
			return (
				ids.map((id) => (
					<Grid
						item
						xs={12}
						sm={6}
						md={4}
						lg={3}
						key={`${id}-selected-grid`}
					>
						<SingleCodesignerCard codesignerId={id} key={`${id}-selected`} />

					</Grid>
				)));
		}
		return null;
	};

	if (error) {
		return null;
	}
	if (loading) {
		return <Skeleton variant="rectangular" width="100%" height="300px" />;
	}

	return (
		<Grid
			container
			spacing={2}
			// sx={{
			// 	width: '100%',
			// 	height: '100%',
			// 	padding: '0px',
			// 	margin: '0px',
			// }}
		>
			{getPersonaCards()}
		</Grid>
	);
}

export default PersonaCards;
