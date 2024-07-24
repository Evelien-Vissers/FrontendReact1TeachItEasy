import {inventory} from '../inventory.js';
import { calculateTotalSoldTvs } from './calculateTotalSoldTvs';

const TotalSoldTvs = () => {
    const totalSoldTvs = calculateTotalSoldTvs(inventory);

    return (
        <div>
            <p className="green-text">Aantal verkochte producten</p>
        </div>
    )
}
export default TotalSoldTvs;