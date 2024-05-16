import propType from 'prop-types';
import { Box, Typography, Divider } from '@mui/material';
import { commonCardStyles } from '../commonReportCardStyles';

function CommentCard({ comment }) {
	return (
		<Box width="100%" sx={{ ...commonCardStyles }}>
			<Typography
				sx={{
					fontSize: 18,
					fontFamily: 'Inter, sans-serif', // 'Inter, sans-serif
					fontWeight: 600,
					marginBottom: 1,
				}}
			>
				Comment:
			</Typography>
			<Divider sx={{
				marginTop: 1,
				marginBottom: 1,
			}}
			/>
			<Typography>
				{comment}
			</Typography>
		</Box>
	);
}

export default CommentCard;

CommentCard.propTypes = {
	comment: propType.string.isRequired,
};
