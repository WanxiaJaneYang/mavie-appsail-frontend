import {
	Box, Divider, Grid, useMediaQuery,
} from '@mui/material';
import { useSelector } from 'react-redux';
import DomainList from './DomainList';
import ExpertOpinion from './ExpertOpinion';
import UpperBody from './UpperBody';

function UsabilityRatingCardContent() {
	const expertOpinionOn = useSelector((state) => state.filters.toggle.expertOpinionsOn);
	const isLargeScreen = useMediaQuery('(min-width:900px)');
	const isExtraExtraLargeScreen = useMediaQuery('(min-width:1536px)');

	return (
		<Box sx={{ height: 'auto' }}>
			<UpperBody />
			<Divider sx={{ marginTop: '16px', marginBottom: '16px', border: '1px solid #E0E0E0' }} />
			<Grid
				container
				flexDirection="row"
				justifyContent="space-between"
				gap={2}
			>
				<Grid
					item
					xs={5}
				>
					<DomainList />
				</Grid>
				<Grid
					item
					xs={5}
					height="auto"
				>
					<ExpertOpinion />
				</Grid>
			</Grid>
		</Box>
	);
}

export default UsabilityRatingCardContent;
