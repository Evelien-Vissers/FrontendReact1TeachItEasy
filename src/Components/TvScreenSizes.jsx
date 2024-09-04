import { formatScreenSizes } from '../helpers/formatScreenSizes.js';

const TvScreenSizes = ({ sizes }) => {
    const formattedSizes = formatScreenSizes(sizes);

    return (
        <div>
            <p>{formattedSizes}</p>
        </div>
    )
}
export default TvScreenSizes;