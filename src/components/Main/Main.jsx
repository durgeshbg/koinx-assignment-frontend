import Analytics from './Analytics/Analytics';
import Sentiment from './Sentiment/Sentiment';
import BreadCrumbs from './CurrentCoin/BreadCrumbs';
import CurrentCoin from './CurrentCoin/CurrentCoin';
import AboutBitCoin from './AboutBitCoin/AboutBitCoin';
import Team from './Team/Team';
import YouMayAlsoLike from './YouMayAlsoLike/YouMayAlsoLike';
import GetStarted from './GetStarted/GetStarted';
import TrendingCoins from './TrendingCoins/TrendingCoins';
import Tokenomics from './Tokenomics/Tokenomics';

const Main = () => {
  return (
    <div className='bg-slate-100 lg:flex'>
      <div className='flex flex-col lg:w-9/12'>
        <BreadCrumbs items={['Cryptocurrencies', 'Bitcoin']} activeIndex={1} />
        <CurrentCoin />
        <Analytics />
        <Sentiment />
        <AboutBitCoin />
        <Tokenomics />
        <Team />
        <YouMayAlsoLike />
      </div>
      <div className='flex flex-col lg:w-3/12'>
        <GetStarted />
        <TrendingCoins />
      </div>
    </div>
  );
};

export default Main;
