import { Skeleton, Card } from '@mui/material';

function ProductIntroSkeleton() {
	return (
		<Card
			sx={{
				display: 'flex',
				flexDirection: 'row',
				padding: '16px',
				paddingTop: '0px',
				marginTop: '0px',
				width: '100%',
				border: 'none',
				gap: '16px',
			}}
			elevation={0}
		>
			<Skeleton variant="rectangular" width="33%" height="100px" />
			<Skeleton variant="rectangular" width="33%" height="100px" />
			<Skeleton variant="rectangular" width="33%" height="100px" />
		</Card>
	);
}

export default ProductIntroSkeleton;
