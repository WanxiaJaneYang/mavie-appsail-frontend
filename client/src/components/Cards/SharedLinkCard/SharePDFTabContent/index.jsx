import {
	Box, Typography, Button, TextField, InputBase,
} from '@mui/material';
import theme from '../../../../theme';
import PDFNotesAddingComponent from './PDFNotesAddingComponent';
import PDFTypeSelector from './PDFTypeSelector';
import EmailPDF from './EmailPDF';
import SavePDFButton from './SavePDFButton';

function SharePDFContent() {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: '20px',
				width: '100%',
				padding: '20px',
			}}
		>
			<PDFNotesAddingComponent />
			<PDFTypeSelector />
			<EmailPDF />
			<SavePDFButton />
		</Box>
	);
}

export default SharePDFContent;
