import BitcoinSVG from '../../../assets/BitcoinSVG';
import TradingViewWidget from './TradingViewWidget';
import CurrentMarketValue from './CurrentMarketValue';

const CurrentCoin = () => {
  return (
    <div className='h-full mt-5 mx-5'>
      <div className='flex justify-between w-64 gap-5'>
        <div className='flex items-center justify-between w-3/4'>
          <BitcoinSVG />
          <span className='text-2xl font-semibold'>Bitcoin</span>
          <span className='text-slate-500 font-semibold'>BTC</span>
        </div>
        <div className='bg-slate-500 px-3 py-1 tracking-wider rounded-md text-white min-w-max'>
          Rank #1
        </div>
      </div>
      <div className='flex flex-col bg-white rounded-md mx-auto p-7 w-full mt-5'>
        <CurrentMarketValue />
        <TradingViewWidget />
      </div>
    </div>
  );
};

export default CurrentCoin;
