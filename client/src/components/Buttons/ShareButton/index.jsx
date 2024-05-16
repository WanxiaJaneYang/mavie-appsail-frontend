import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { LoadingButton } from '@mui/lab';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';
import theme from '../../../theme';
import { getProductShareLink, getSurveyShareLink } from '../../../thunk';
import SharedLinkCard from '../../Cards/SharedLinkCard';

function ShareButton() {
	const dispatch = useDispatch();
	const { productId, surveyId } = useParams();
	const { loading } = useSelector((state) => state.share);
	const [open, setOpen] = useState(false);

	const clickShare = () => {
		if (productId) {
			dispatch(getProductShareLink({ productId }));
		} else if (surveyId) {
			dispatch(getSurveyShareLink({ surveyId }));
		}
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Box sx={{
			padding: '0px',
		}}
		>
			<LoadingButton
				fullWidth
				variant="outlined"
				sx={{
					mt: 2,
					mb: 2,
					borderRadius: {
						xs: 40,
						sm: 40,
						md: 52,
					},
					height: {
						xs: 26,
						sm: 28,
						md: 30,
					},
					backgroundColor: theme.palette.primary.main,
					color: theme.palette.primary.contrastText,
					'&:hover': {
						backgroundColor: theme.palette.primary.light,
					},
				}}
				startIcon={<ShareOutlinedIcon />}
				loading={loading}
				onClick={clickShare}
			>
				Share
			</LoadingButton>
			<SharedLinkCard open={open} handleClose={handleClose} />
		</Box>
	);
}

export default ShareButton;
