import {
	Box, Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';

function ExpertOpinion() {
	const expertOpinion = useSelector((state) => state.product.productInfo
		.productDetail.expertOpinion);

	const getExpertOpinionContent = () => {
		if (expertOpinion) {
			return expertOpinion;
		}
		return 'No expert opinion available';
	};
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				padding: '0px',
				marginBottom: '10px',
			}}
		>
			<Typography
				sx={{
					color: '#455468',
					fontFamily: 'Inter, sans-serif',
					fontWeight: 600,
					fontSize: '16px',
					// textAlign: 'left',
					marginBottom: ['0px', '5px', '10px'], // [mobile, tablet, desktop
				}}
			>
				Expert Opinions
			</Typography>
			<Typography
				sx={{
					fontFamily: 'Inter, sans-serif',
					fontWeight: 500,
					fontSize: '14px',
					textAlign: 'left',
					color: '#455468',
				}}
			>
				{getExpertOpinionContent()}
			</Typography>
		</Box>
	);
}

export default ExpertOpinion;
