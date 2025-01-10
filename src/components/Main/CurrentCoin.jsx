import BitcoinSVG from '../../assets/BitcoinSVG';

const CurrentCoin = () => {
  return (
    <div className='flex justify-between w-64 gap-5 mt-5 mx-5'>
      <div className='flex items-center justify-between w-3/4'>
        <BitcoinSVG />
        <span className='text-2xl font-semibold'>Bitcoin</span>
        <span className='text-slate-500 font-semibold'>BTC</span>
      </div>
      <div className='bg-slate-500 p-2 tracking-wider rounded-md text-white min-w-max'>Rank #1</div>
    </div>
  );
};

export default CurrentCoin;
