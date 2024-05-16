import {
	Box, Typography, Button, TextField, InputBase,
} from '@mui/material';
import { useState } from 'react';
import theme from '../../../../../theme';
import ReportCommentPopup from '../../../../Popup/ReportCommentPopup';

function PDFNotesAddingComponent() {
	const [open, setOpen] = useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
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
				Add Notes to PDF
			</Typography>
			<Box sx={{
				display: 'flex',
				flexDirection: 'row',
				minWidth: '450px',
				width: '100%',
				pl: 2,
				justifyContent: 'space-between',
				alignItems: 'center',

			}}
			>
				<InputBase
					fullWidth
					placeholder="Add comments that will be printed on the PDF"
					readOnly
				>
					Add comments that will be printed on the PDF
				</InputBase>
				<Button
					sx={{
						fontSize: '12px',
						minWidth: '140px',
					}}
					variant="outlined"
					onClick={handleOpen}
				>
					Add Notes to PDF
				</Button>
				<ReportCommentPopup open={open} handleClose={handleClose} />
			</Box>
		</Box>
	);
}

export default PDFNotesAddingComponent;
