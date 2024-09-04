import './App.css';
import TotalSoldTvs from './Components/TotalSoldTvs.jsx';
import TotalStockedTvs from './Components/TotalStockedTvs.jsx';
import RemainingTvs from './Components/RemainingTvs.jsx';
import TvName from './Components/TvName.jsx';
import TvPrice from './Components/TvPrice.jsx';
import TvScreenSizes from './Components/TvScreenSizes.jsx';
import BestSellingTv from './Components/BestSellingTv.jsx';
import {bestSellingTv} from './inventory';
import TvBrands from './Components/TvBrands.jsx';
import AllTvs from "./Components/AllTvs.jsx";
import SortBySold from "./Components/SortBySold.jsx";
import SortByPrice from './Components/SortByPrice.jsx';
import SortByRefreshRate from "./Components/SortByRefreshRate.jsx";

function App() {
  return (
      <>
      <main>
        <div className="products">
      <h1>Tech it easy dashboard</h1>
      <h2>Verkoopoverzicht</h2>

      <SortBySold />
      <SortByPrice />
      <SortByRefreshRate />

      <div className="stats-container">
        <TotalSoldTvs />
        <TotalStockedTvs />
        <RemainingTvs />
        </div>

        <TvName tv={bestSellingTv} />
        <TvPrice price={bestSellingTv.price} />

          <TvScreenSizes sizes={bestSellingTv.availableSizes} />
          <BestSellingTv />
          <TvBrands />

            <h2>Alle TVs</h2>
            <AllTvs />
        </div>
      </main>
     </>
  );
}

export default App
