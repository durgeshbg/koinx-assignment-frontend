import Analytics from './Analytics/Analytics';
import BreadCrumbs from './CurrentCoin/BreadCrumbs';
import CurrentCoin from './CurrentCoin/CurrentCoin';

const Main = () => {
  return (
    <>
      <main className='bg-slate-100 flex flex-col px-5'>
        <BreadCrumbs items={['Cryptocurrencies', 'Bitcoin']} activeIndex={1} />
        <CurrentCoin />
        <Analytics />
      </main>
    </>
  );
};

export default Main;
