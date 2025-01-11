import Analytics from './Analytics/Analytics';
import Sentiment from './Sentiment/Sentiment';
import BreadCrumbs from './CurrentCoin/BreadCrumbs';
import CurrentCoin from './CurrentCoin/CurrentCoin';
import AboutBitCoin from './AboutBitCoin/AboutBitCoin';
import Team from './Team/Team';
import YouMayAlsoLike from './YouMayAlsoLike/YouMayAlsoLike';

const Main = () => {
  return (
    <>
      <main className='bg-slate-100 flex flex-col px-5'>
        <BreadCrumbs items={['Cryptocurrencies', 'Bitcoin']} activeIndex={1} />
        <CurrentCoin />
        <Analytics />
        <Sentiment />
        <AboutBitCoin />
        <Team />
        <YouMayAlsoLike />
      </main>
    </>
  );
};

export default Main;
