import { inventory } from '../inventory.js';
import { calculateTotalStockedTvs } from '../totalStockedTvs.js';

const TotalStockedTvs = () => {
    const totalStockedTvs = calculateTotalStockedTvs(inventory);

    return (
        <div>
            <p className="blue-text">Aantal ingekochte producten</p>
        </div>
    );
};

export default TotalStockedTvs;