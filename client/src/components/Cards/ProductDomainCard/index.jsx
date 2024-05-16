import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
	Card, CardContent, CardHeader, IconButton,
} from '@mui/material';
import CloseIcon from '../../icons/CloseIcon';
import { setSelectedDomain } from '../../../features/filters/domainFilterSlice';
import DomainCardContent from './DomainCardContent';

function ProductDomainCard({ productId, domainId }) {
	const domainInfo = useSelector((state) => state.domain.entities[domainId]);

	const dispatch = useDispatch();

	const handleCloseClick = () => {
		dispatch(setSelectedDomain(
			{
				[domainId]: false,
			},
		));
	};

	return (
		<Card
			sx={{
				display: 'flex',
				flexDirection: 'column',
				backgroundColor: '#FFFFFF',
				width: '100%',
				height: 'auto',
				marginBottom: '15px',
			}}
		>
			<CardHeader
				sx={{
					alignItems: 'center',
					justifyContent: 'space-between',
					width: '100%',
					// padding: '10px',
					padding: '16px',
					height: '88px',
				}}
				titleTypographyProps={{
					sx: {
						color: '#455468',
						fontFamily: 'Inter, sans-serif',
						fontWeight: 600,
						fontSize: '18px',
						textAlign: 'left',
						marginTop: '-10px',
					},
				}}
				title={domainInfo?.name}
				action={(
					<IconButton
						onClick={handleCloseClick}
						sx={{
							'& .MuiSvgIcon-root': {
								width: '40px',
								height: '40px',
							},
							'& .MuiIconButtonBase-root': {
								padding: '0px',

							},

						}}
					>
						<CloseIcon />
					</IconButton>
				)}
			/>
			<CardContent sx={{ height: '100%', marginTop: '-16px' }}>
				<DomainCardContent domainId={domainId} productId={productId} />
			</CardContent>
		</Card>
	);
}

ProductDomainCard.propTypes = {
	domainId: PropTypes.string.isRequired,
	productId: PropTypes.string.isRequired,
};

export default ProductDomainCard;
