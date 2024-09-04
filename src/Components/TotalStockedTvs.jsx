import { inventory } from '../inventory.js';
import { calculateTotalStockedTvs } from '../helpers/totalStockedTvs.js';

const TotalStockedTvs = () => {
    const totalStocked = calculateTotalStockedTvs(inventory);

    return (
        <div className="blue-box">
            <h3>Totaal aantal ingekochte TVs:</h3>
            <p>{totalStocked}</p>
        </div>
    );
};

export default TotalStockedTvs;