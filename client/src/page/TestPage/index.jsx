import { Box, Grid } from '@mui/material';
import ComparisonProductIntroCard from '../../components/Cards/ComparisonProductIntroCard';

function TestPage() {
	const ids = ['1', '2', '3'];
	const columns = 12 / ids.length;
	return (
		<Grid
			container
			spacing={2}
			width="100%"
		>
			{ids.map((id, index) => (
				<Grid item key={id} xs={columns}>
					<ComparisonProductIntroCard
						index={index}
						productId={id}
					/>
				</Grid>
			))}

		</Grid>
	);
}

export default TestPage;
