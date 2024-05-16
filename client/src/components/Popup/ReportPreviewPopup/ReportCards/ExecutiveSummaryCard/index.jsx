import { Box, Divider, Typography } from '@mui/material';
import propType from 'prop-types';
import GraphDetail from '../../../../../images/svg/GraphDetail.svg';
import { commonCardStyles } from '../commonReportCardStyles';

function ExecutiveSummaryCard({ data, isSummary }) {
	return (
		<Box sx={{ ...commonCardStyles }}>
			<Typography
				sx={{
					fontSize: 18,
					fontFamily: 'Inter, sans-serif', // 'Inter, sans-serif
					fontWeight: 600,
					marginBottom: 1,
				}}
			>
				Executive Summary:
			</Typography>
			<Divider sx={{
				marginTop: 1,
				marginBottom: 1,
			}}
			/>
			<Box sx={{
				display: 'flex',
				flexDirection: 'row',
				alignContent: 'center',
				justifyContent: 'flex-start',
				gap: 1,
			}}
			>
				<Typography width={isSummary ? '50%' : '100%'}>
					{data}
				</Typography>
				{isSummary && (
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'start',
							width: '50%',
						}}
					>
						<Typography
							sx={{
								fontSize: 8,
								fontFamily: 'Inter, sans-serif', // 'Inter, sans-serif
								fontWeight: 600,
								marginBottom: 1,
							}}
						>
							Graph Detail
						</Typography>
						<img
							src={GraphDetail}
							alt="Graph Detail"
							style={{
								minWidth: '200px',
								height: 'auto',
							}}
						/>
					</Box>
				)}
			</Box>
		</Box>

	);
}

ExecutiveSummaryCard.propTypes = {
	data: propType.string.isRequired,
	isSummary: propType.bool.isRequired,
};

export default ExecutiveSummaryCard;
