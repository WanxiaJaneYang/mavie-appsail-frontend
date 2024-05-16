import { useParams } from 'react-router-dom';
import { Paper } from '@mui/material';
import { StandardReport, SummaryReport } from '../../components/Popup/ReportPreviewPopup';

function ReportPage() {
	const { productId, reportType } = useParams();

	function getReportByType() {
		if (reportType === 'standard') {
			console.log('standard');
			return <StandardReport productId={productId} />;
		}
		return <SummaryReport productId={productId} />;
	}

	return (
		<Paper elevation={0}>
			{getReportByType()}
		</Paper>
	);
}

export default ReportPage;
