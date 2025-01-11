import BitcoinSVG from '../../../assets/BitcoinSVG';
import TradingViewWidget from './TradingViewWidget';
import CurrentMarketValue from './CurrentMarketValue';

const CurrentCoin = () => {

  return (
    <div className='h-full mt-5 mx-5 lg:bg-white lg:rounded-t-md lg:ml-10'>
      <div className='flex justify-between w-64 gap-5 lg:px-3 lg:pt-4'>
        <div className='flex items-center justify-between gap-2 w-3/4'>
          <BitcoinSVG />
          <span className='text-2xl font-semibold'>Bitcoin</span>
          <span className='text-slate-500 font-semibold'>BTC</span>
        </div>
        <div className='bg-slate-500 px-3 py-1 tracking-wider rounded-md text-white min-w-max'>
          Rank #1
        </div>
      </div>
      <div className='flex flex-col bg-white rounded-md p-7 mt-5'>
        <CurrentMarketValue />
        <TradingViewWidget />
      </div>
    </div>
  );
};

export default CurrentCoin;
