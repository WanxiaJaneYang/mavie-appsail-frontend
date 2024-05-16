import {
	Card, CardContent, Divider, Skeleton,
} from '@mui/material';

function ComparisonProductIntroSkeleton() {
	return (
		<Card>
			<CardContent>
				<Skeleton variant="rectangular" width="100%" height={50} />
				<Divider
					sx={{ margin: '16px 0px 16px 0px' }}
				/>
				<Skeleton variant="rectangular" width="100%" height={200} />
			</CardContent>
		</Card>
	);
}

export default ComparisonProductIntroSkeleton;
