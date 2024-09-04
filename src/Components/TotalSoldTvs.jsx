import {calculateTotalSoldTvs} from "../helpers/totalSoldTvs.js";
import {inventory} from "../inventory.js";

const TotalSoldTvs = () => {
    const totalSold = calculateTotalSoldTvs(inventory);

    return (
        <div className="green-box">
            <h3>Totaal aantal verkochte TVs:</h3>
            <p> {totalSold}</p>
        </div>
    )
}
export default TotalSoldTvs;