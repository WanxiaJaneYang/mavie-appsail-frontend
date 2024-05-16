import { Skeleton, Box } from '@mui/material';

function CodesignerSurveySkeleton() {
	return (
		<Box sx={{
			display: 'flex',
			flexDirection: 'column',
			width: '100%',
			height: '100%',
			gap: '20px',
			justifyContent: 'center',
			alignItems: 'center',
		}}
		>
			<Box
				sx={{
					height: '50%',
					width: '100%',
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-around',
					alignItems: 'center',
				}}
			>
				<Box
					sx={{
						width: '30%',
						height: '100%',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Skeleton
						variant="circular"
						width={250}
						height={250}
					/>
					<Skeleton
						variant="text"
						width={200}
						height={50}
					/>
				</Box>
				<Box
					width="60%"
					height="100%"
					display="flex"
					flexDirection="column"
					justifyContent="center"
					alignItems="center"
					gap={2}
				>
					<Box
						width="100%"
						height="50%"
						display="flex"
						flexDirection="row"
						justifyContent="center"
						alignItems="center"
						gap={2}
					>
						<Skeleton
							variant="rectangular"
							width={250}
							height={150}
						/>
						<Skeleton
							variant="rectangular"
							width={250}
							height={150}
						/>
						<Skeleton
							variant="rectangular"
							width={250}
							height={150}
						/>
					</Box>
					<Box
						width="100%"
						height="50%"
						display="flex"
						flexDirection="row"
						justifyContent="center"
						alignItems="center"
						gap={2}
					>
						<Skeleton
							variant="rectangular"
							width={250}
							height={150}
						/>
						<Skeleton
							variant="rectangular"
							width={250}
							height={150}
						/>
						<Skeleton
							variant="rectangular"
							width={250}
							height={150}
						/>
					</Box>
				</Box>
			</Box>
			<Box sx={
				{
					height: '50%',
					width: '100%',
					justifyContent: 'center',
					alignItems: 'center',
				}
			}
			>
				<Skeleton
					variant="rectangular"
					width="100%"
					height={250}
				/>
			</Box>
		</Box>
	);
}

export default CodesignerSurveySkeleton;
