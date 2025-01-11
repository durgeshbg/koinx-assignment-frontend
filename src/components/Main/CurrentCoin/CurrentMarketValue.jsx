const CurrentMarketValue = () => {
  return (
    <div className="flex border-b gap-5 mb-6 pb-6" >
      <div className='money mr-auto'>
        <div className='usd text-3xl font-semibold'>$16,953.04</div>
        <div className='inr text-xl'>₹ 13,42,343</div>
      </div>
      <div className='rate bg-green-50 flex h-fit items-center px-2 py-1 rounded-md gap-2'>
        <svg
          width='11'
          height='8'
          viewBox='0 0 11 8'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M5.5 0L11 8H0L5.5 0Z' fill='#14B079' />
        </svg>
        <span className="text-green-600" >2.51%</span>
      </div>
      <div className='period text-slate-400 pt-1'>(24H)</div>
    </div>
  );
};

export default CurrentMarketValue;
