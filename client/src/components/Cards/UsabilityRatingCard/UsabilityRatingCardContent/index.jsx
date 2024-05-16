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
			>
				<Grid
					item
					xs={12}
					md={expertOpinionOn ? 6 : 12}
					marginBottom={expertOpinionOn ? 2 : 0}
				>
					<DomainList />
				</Grid>
				{(isLargeScreen || isExtraExtraLargeScreen) && (
					<Grid
						item
						display={expertOpinionOn ? 'flex' : 'none'}
						xs={expertOpinionOn ? 0 : 12}
						md={expertOpinionOn ? 6 : 0}
						height="auto"
					>
						<ExpertOpinion />
					</Grid>
				)}
			</Grid>
			{!isLargeScreen && !isExtraExtraLargeScreen && expertOpinionOn && (
				<Divider sx={{ marginTop: '10px', marginBottom: '10px', border: '2px solid #E0E0E0' }} />)}
			{!isLargeScreen && !isExtraExtraLargeScreen && expertOpinionOn && (
				<ExpertOpinion />)}
		</Box>
	);
}

export default UsabilityRatingCardContent;
