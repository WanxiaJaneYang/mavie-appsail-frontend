import { Box, Typography, Grid } from '@mui/material';
import { useSelector } from 'react-redux/';
import { alpha } from '@mui/material/styles';
import theme from '../../../../theme';
import PersonaCategoryRating from './PersonaCategoryRating';
import { NO_PERSONA_PROFILE } from '../../../../constants';

function CoDesignerSurveyContent() {
	const { survey } = useSelector((state) => state.codesignerSurvey);
	return (
		<Box sx={{
			display: 'flex',
			flexDirection: 'column',
			gap: '38px',
			justifyContent: 'center',
			alignItems: 'center',
			width: '100%',
		}}
		>
			<Box
				id="survey-content-upper"
				width="100%"
				display="flex"
				gap="20px"
				sx={{
					maxHeight: ['100%', '45vh', '40vh'],
					flexDirection: ['column', 'row', 'row'],
					height: ['100%', '50%', '60%'],
				}}
				overflow="auto"
				position="relative"
			>
				<Box
					id="survey-content-upper-profile"
					height="100%"
					display="flex"
					flexDirection="column"
					alignItems="center"
					justifyItems="space-between"
					boxSizing="inherit"
					gap="20px"
					sx={{
						width: ['100%', '30%', '30%'],
						maxHeight: ['100%', '45vh', '30vh'],
						position: 'sticky',
						top: 0,
					}}
					overflow="visible"

				>
					<Box
						id="survey-content-upper-profile-avatar-container"
						width="40%"
						// height="50%"
						// borderRadius="50%"
						// overflow="hidden"
					>
						<img
							src={survey?.profile || NO_PERSONA_PROFILE}
							alt="avatar"
							style={{
								width: '100%',
								// minWidth: '150px',
								// minHeight: '150px',
								height: '100%',
								objectFit: 'cover',
								borderRadius: '50%',
							}}
						/>
					</Box>
					<Box
						sx={{
							height: '10%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Typography sx={{
							fontSize: '18px',
							fontWeight: 600,
							color: theme.palette.darkest,
						}}
						>
							{survey?.name}
						</Typography>
						<Typography sx={{
							fontSize: '16px',
							fontWeight: 400,
							color: theme.palette.darkest,

						}}
						>
							{`${survey?.gender} , ${survey?.age}`}
						</Typography>
					</Box>
				</Box>

				<Grid
					container
					columnGap={12.5}
					rowGap={3.5}
					width="70%"
					height="100%"
					sx={{
						width: ['100%', '70%', '70%'],
					}}
				>
					{
						survey?.personaCategoriesRatings?.map((personaCategoriesRating) => (
							<Grid
								item
								xs={12}
								md={4}
								xl={2.5}
								key={`personaCategoriesRating${personaCategoriesRating.id}`}
								sx={{
									display: 'flex',
									flexDirection: 'column',
									justifyContent: ['start', 'center', 'center'], // eslint-disable-line no-mixed-operators
									alignItems: 'start',
								}}
							>
								<PersonaCategoryRating
									id={personaCategoriesRating?.id}
									rating={personaCategoriesRating?.rating}
								/>
							</Grid>
						))
					}
				</Grid>

			</Box>

			<Grid
				container
				columnGap={8}
				rowGap={3.5}
				height="40%"
				width="100%"
				overflow="auto"
				sx={{ maxHeight: ['100%', '35vh', '30vh'] }}

			>
				{survey?.staticQuestions?.map((question) => (
					<Grid
						item
						xs={12}
						md={3}
						lg={3.5}
						key={question.question}
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'start',
							alignItems: 'start',

						}}
						spacing={2}
					>
						<Typography sx={{
							fontSize: '18px',
							fontWeight: 600,
							color: theme.palette.darkest,
							fontFamily: 'sans-serif',
							backgroundColor: alpha(theme.palette.primary.light, 0.3),
							borderRadius: '8px',
							padding: '10px',
							width: '100%',
						}}
						>
							{question.question}
						</Typography>
						<Typography sx={{
							fontSize: '16px',
							fontWeight: 400,
							color: theme.palette.darkest,
							maxHeight: '200px',
							overflow: 'auto',
							padding: ['5px', '10px', '15px'],
						}}
						>
							{question.answer}
						</Typography>
					</Grid>
				))}
			</Grid>

		</Box>
	);
}

export default CoDesignerSurveyContent;
