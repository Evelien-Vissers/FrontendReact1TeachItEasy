
import {inventory} from '../inventory.js';
import { calculateRemainingTvs } from '../helpers/totalSoldTvs.js';

const RemainingTvs = () => {
    const remainingTvs = calculateRemainingTvs(inventory);

    return (
        <div className="red-box">
            <p>Aantal te verkopen producten: {remainingTvs}</p>
        </div>
    )
};
export default RemainingTvs;
