import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
	ProductIntroReportCard, CommentCard, ExecutiveSummaryCard, UsabilityRatingReportCard,
} from '../ReportCards';
import ReportHeader from './ReportHeader';
import { getProductFilter, getProductInfo, getProductRating } from '../../../../thunk';

function SummaryReport({ productId }) {
	const dispatch = useDispatch();
	const note = useSelector((state) => state.share.note);

	useEffect(
		() => {
			dispatch(getProductInfo(productId));
			dispatch(getProductFilter(productId));
			dispatch(getProductRating(productId));
		},
		[dispatch, productId],
	);
	return (
		<Box sx={{
			gap: 4,
			overflow: 'auto',
		}}
		>
			<ReportHeader />
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: 2,
				}}
			>
				<ProductIntroReportCard />
				<ExecutiveSummaryCard data="Lorem ipsum" isSummary />
				<CommentCard comment={note} />
				<UsabilityRatingReportCard />
			</Box>
		</Box>
	);
}

export default SummaryReport;

SummaryReport.propTypes = {
	productId: PropTypes.string.isRequired,
};
