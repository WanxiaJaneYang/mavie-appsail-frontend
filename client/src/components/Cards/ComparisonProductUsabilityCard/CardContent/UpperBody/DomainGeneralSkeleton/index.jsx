import { Skeleton, Grid, Box } from '@mui/material';

function DomainGeneralSkeleton() {
	return (
		<Grid height="100%" container spacing={2} alignItems="center">
			<Grid
				item
				xs={5}
				sm={4}
				sx={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'flex-end',
					height: '100%',
					width: '100%',
				}}
			>
				<Skeleton
					variant="rectangular"
					sx={{
						width: '100%',
						// minWidth: '100px',
						minHeight: '20px',
						height: '20%',
						borderRadius: '20px',
					}}
				/>
			</Grid>
			<Grid item xs={7} sm={8}>
				<Skeleton
					variant="rectangular"
					sx={{
						width: '100%',
						height: '100px',
						borderRadius: '28px',
					}}
				/>
			</Grid>
		</Grid>
	);
}

export default DomainGeneralSkeleton;
