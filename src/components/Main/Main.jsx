import Analytics from './Analytics/Analytics';
import Sentiment from './Sentiment/Sentiment';
import BreadCrumbs from './CurrentCoin/BreadCrumbs';
import CurrentCoin from './CurrentCoin/CurrentCoin';
import AboutBitCoin from './AboutBitCoin/AboutBitCoin';
import Team from './Team/Team';
import YouMayAlsoLike from './YouMayAlsoLike/YouMayAlsoLike';
import GetStarted from './GetStarted/GetStarted';
import TrendingCoins from './TrendingCoins/TrendingCoins';

const Main = () => {
  return (
    <div className='bg-slate-100'>
      <div className='flex flex-col'>
        <BreadCrumbs items={['Cryptocurrencies', 'Bitcoin']} activeIndex={1} />
        <CurrentCoin />
        <Analytics />
        <Sentiment />
        <AboutBitCoin />
        <Team />
        <YouMayAlsoLike />
      </div>
      <div className='flex flex-col'>
        <GetStarted />
        <TrendingCoins />
      </div>
    </div>
  );
};

export default Main;
