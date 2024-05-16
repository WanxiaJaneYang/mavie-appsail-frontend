// query the window width and set the height of the feature list accordingly
// if large or above, 63*maxFeatureLines
// if large, 63*maxFeatureLines
// if larger than 900 60*maxFeatureLines
// if smaller than 600 57*maxFeatureLines
import { useMediaQuery } from '@mui/material';
import MaxFeatureLinesCalculator from '../../../../../../utils/MaxFeatureLinesCalculator';

function FeatureListHeight() {
	const maxFeatureLines = MaxFeatureLinesCalculator();
	const extraLargeScreen = useMediaQuery('(min-width:1920px)');
	const largeScreen = useMediaQuery('(min-width:1280px)');
	const mediumScreen = useMediaQuery('(min-width:900px)');
	const smallScreen = useMediaQuery('(min-width:600px)');

	const height = () => {
		if (extraLargeScreen) {
			return 63 * maxFeatureLines;
		}
		if (largeScreen) {
			return 63 * maxFeatureLines;
		}
		if (mediumScreen) {
			return 66 * maxFeatureLines;
		}
		if (smallScreen) {
			return 60 * maxFeatureLines;
		}

		return 60 * maxFeatureLines;
	};
	return 65 * maxFeatureLines;
}

export default FeatureListHeight;
