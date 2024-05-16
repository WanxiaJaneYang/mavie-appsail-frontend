import {
	Box, RadioGroup, Typography, FormControlLabel, Radio,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setReportType } from '../../../../../features/share';
import theme from '../../../../../theme';

function PDFTypeSelector() {
	const dispatch = useDispatch();
	const handleChange = (event) => {
		dispatch(setReportType(event.target.value));
	};
	const { productId, surveyId } = useParams();

	const isProduct = (productId && !surveyId);

	const getFormList = () => {
		if (isProduct) {
			return [
				{
					value: 'summary',
					label: 'Summary PDF - 1 Page with the Usability Rating',
				},
				{
					value: 'standard',
					label: 'Standard PDF - Summary PDF + Domains details and Features with importance features',
				},
				{
					value: 'detailed',
					label: 'Detailed PDF - Standard PDF + Detailed Features graphs',
				},
			];
		}

		return [

			{
				value: 'comparative',
				label: 'Comparative PDF - Comparative testing report of different product',
			}];
	};

	return (
		<Box>
			<Typography
				sx={{
					fontSize: '14px',
					fontWeight: 600, // semibold
					color: theme.palette.darkest,
				}}
			>
				Select PDF style
			</Typography>
			<Box sx={{
				pr: 2,
			}}
			>
				<RadioGroup
					column
					aria-label="pdfStyle"
					defaultValue={isProduct ? 'summary' : 'comparative'}
					sx={{
						'& .MuiTypography-root': {
							fontSize: '12px',
							color: theme.palette.grey,
							fontFamily: 'Inter',
						},
						'& .MuiFormControlLabel-root': {
							width: '100%',
							display: 'flex',
							flexDirection: 'row',
							alignContent: 'center',
						},
						minWidth: '550px',
						width: '100%',
					}}
				>
					{getFormList().map((form) => (
						<FormControlLabel
							key={`${form.value}-form`}
							value={form.value}
							control={<Radio />}
							label={form.label}
							onChange={handleChange}
						/>
					))}
				</RadioGroup>
			</Box>

		</Box>
	);
}

export default PDFTypeSelector;
