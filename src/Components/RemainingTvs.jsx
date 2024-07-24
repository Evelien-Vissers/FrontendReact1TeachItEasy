
import {inventory} from '../inventory.js';
import { calculateRemainingTvs } from '../helpers/totalSoldTvs.js';

const RemainingTvs = () => {
    const remainingTvs = calculateRemainingTvs(inventory);

    return (
        <div>
            <p className="red-text">Aantal te verkopen producten</p>
        </div>
    )
};
export default RemainingTvs;
