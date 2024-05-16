import { Box, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { LoadingButton } from '@mui/lab';
import theme from '../../../../../theme';
import ReportPreviewPopup from '../../../../Popup/ReportPreviewPopup';
import { getReport, getSurveyReport } from '../../../../../thunk';

function SavePDFButton() {
	const dispatch = useDispatch();
	const { productId } = useParams();
	const { surveyId } = useParams();
	const { reportType, comment, commentTitle } = useSelector((state) => state.share);
	const [open, setOpen] = useState(false);
	const onPreviewReport = () => {
		setOpen(true);
	};
	const { saveReportLoading } = useSelector((state) => state.share);

	const onClose = () => {
		setOpen(false);
	};

	const onSavePDF = () => {
		console.log('productId', productId);
		console.log('surveyId', surveyId);
		if (productId) {
			dispatch(getReport({
				productId, reportType, comment, commentTitle,
			}));
		}
		if (surveyId) {
			dispatch(getSurveyReport({
				surveyId, comment, commentTitle,
			}));
		}
	};
	return (
		<Box sx={
			{
				display: 'flex',
				justifyContent: 'end',
				gap: '20px',
				marginTop: '20px',
			}
		}
		>
			{/* <LoadingButton
				variant="outlined"
				sx={{
					width: '150px',
					display: 'flex',
					height: '33px',
					alignSelf: 'flex-end',
					backgroundColor: theme.palette.primary.main,
					color: theme.palette.primary.contrastText,
					'&:hover': {
						backgroundColor: theme.palette.primary.light,
					},
					'&.MuiButtonBase-root': {
						padding: 0,
					},
					fontSize: '14px',
					fontWeight: 600,
					// fontFamily: 'Auto',

				}}
				onClick={onPreviewReport}
				id="preview-report-button"
			>
				Preview Report
			</LoadingButton> */}
			<LoadingButton
				variant="outlined"
				loading={saveReportLoading}
				id="save-pdf-button"
				sx={{
					width: '150px',
					display: 'flex',
					height: '33px',
					alignSelf: 'flex-end',
					backgroundColor: theme.palette.primary.main,
					color: theme.palette.primary.contrastText,
					'&:hover': {
						backgroundColor: theme.palette.primary.light,
					},
					'&.MuiButtonBase-root': {
						padding: 0,
					},
					fontSize: '14px',
					fontWeight: 600,
					// fontFamily: 'Auto',

				}}
				onClick={onSavePDF}
			>
				Save PDF
			</LoadingButton>
			<ReportPreviewPopup
				open={open}
				handleClose={onClose}
				productId={productId}
				reportType={reportType}
			/>
		</Box>
	);
}

export default SavePDFButton;
