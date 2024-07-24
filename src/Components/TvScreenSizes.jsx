import { formatScreenSizes } from '../formatScreenSizes.js';

const TvScreenSizes = ({ sizes }) => {
    const formatttedSizes = formatScreenSizes(sizes);

    return (
        <div>
            <p>{formattedSizes}</p>
        </div>
    )
}
export default TvScreenSizes;