import './App.css';
import TotalSoldTvs from './Components/TotalSoldTvs.jsx';
import TotalStockedTvs from './Components/TotalStockedTvs.jsx';
import RemainingTvs from './Components/RemainingTvs.jsx';
import TvName from './Components/TvName.jsx';
import TvPrice from './Components/TvPrice.jsx';
import TvScreenSizes from './Components/TvScreenSizes.jsx';
import BestSellingTv from './Components/BestSellingTv.jsx';
import {bestSellingTv} from './inventory';


function App() {
  return (
      <>
      <main>
        <div className="products">
    <h1>Tech it easy dashboard</h1>
      <h2>Verkoopoverzicht</h2>
        <TotalSoldTvs />
        <TotalStockedTvs />
        <RemainingTvs />
          <TvName tv={bestSellingTv} />
        <TvPrice price={bestSellingTv.price} />
          <TvScreenSizes sizes={bestSellingTv.availableSizes} />
          <BestSellingTv />
        </div>
      </main>
     </>
  );
}

export default App
