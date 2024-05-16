import {
	CardActions,
	CardContent, CardHeader, Dialog, IconButton,
} from '@mui/material';
import { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import DownloadIcon from '@mui/icons-material/Download';
import SummaryReport from './SummaryReport';
import StandardReport from './StandardReport';
import CloseIcon from '../../icons/CloseIcon';
import theme from '../../../theme';

function ReportPreviewPopup({
	open, handleClose, productId, reportType,
}) {
	const dispatch = useDispatch();
	const pageRef = useRef(null);
	const handleDownload = async () => {
		const canvas = await html2canvas(pageRef.current);
		const imgData = canvas.toDataURL('image/png');
		// eslint-disable-next-line new-cap
		const pdf = new jsPDF('p', 'mm', 'a4');
		const width = pdf.internal.pageSize.getWidth();
		const height = pdf.internal.pageSize.getHeight();
		pdf.addImage(imgData, 'PNG', 20, 20, width, height);
		pdf.save('download.pdf');
		// const pageHtml = pageRef.current.innerHTML;
		// const data = {
		// 	productId,
		// 	reportType,
		// 	pageHtml,
		// };
		// dispatch(generateReport(data));
	};

	const getReportByType = () => {
		switch (reportType) {
		case 'standard':
			return <StandardReport productId={productId} />;
		case 'summary':
			return <SummaryReport productId={productId} />;
		default:
			return null;
		}
	};
	return (
		<Dialog
			open={open}
			maxWidth="lg"
			maxHeight="95vh"
		>
			<CardHeader
				title="Report Preview"
				sx={{
					paddingBottom: '0px',
					position: 'sticky',
					topY: 0,
					zIndex: 10,
				}}
				titleTypographyProps={{
					sx: {
						color: theme.palette.primary.grey,
						fontFamily: 'Inter, sans-serif',
						fontWeight: 600,
						fontSize: '22px',
						textAlign: 'left',
					},
				}}
				action={(
					<IconButton
						onClick={handleClose}
						sx={{
							'& .MuiSvgIcon-root': {
								width: '40px',
								height: '40px',
								padding: '0px',
							},
						}}
					>
						<CloseIcon />
					</IconButton>

				)}
			>
				Report Preview
			</CardHeader>
			<CardContent sx={{
				overflow: 'auto',
				width: '210mm',
			}}
			>
				<div ref={pageRef}>
					{getReportByType()}
				</div>
			</CardContent>
			<CardActions>
				<IconButton onClick={handleDownload}>
					<DownloadIcon />
				</IconButton>
			</CardActions>
		</Dialog>
	);
}

ReportPreviewPopup.propTypes = {
	open: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
	productId: PropTypes.string.isRequired,
	reportType: PropTypes.string.isRequired,
};

export default ReportPreviewPopup;
export { StandardReport, SummaryReport };
