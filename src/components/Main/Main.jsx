import BreadCrumbs from './BreadCrumbs';
import CurrentCoin from './CurrentCoin';

const Main = () => {
  return (
    <>
      <main className='bg-slate-100'>
        <BreadCrumbs items={['Cryptocurrencies', 'Bitcoin']} activeIndex={1} />
        <CurrentCoin />
      </main>
    </>
  );
};

export default Main;
