import './App.css';
import TotalSoldTvs from './TotalSoldTvs';
import TotalStockedTvs from './TotalStockedTvs';
import RemainingTvs from './RemainingTvs';
import TvName from './TvName';
import {bestSellingTv} from './inventory';

function App() {
  return (
      <>
      <main>
        <article className="products">
    <h1>Tech it easy dashboard</h1>
      <h2>Verkoopoverzicht</h2>
        <TotalSoldTvs />
        <TotalStockedTvs />
        <RemainingTvs />
          <TvName tv={bestSellingTv} />
      </article>
      </main>
     </>
  );
}

export default App
