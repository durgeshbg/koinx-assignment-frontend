import InfoSVG from '../../../assets/InfoSVG'
const Fundamentals = () => {
  return (
    <div>
      <h3 className='text-xl font-semibold mt-10 flex items-center'>
        Fundamentals
        <InfoSVG />
      </h3>
      <div className='border-b text-sm py-3 w-full flex justify-between'>
        <span className='text-slate-500'>Bitcoin Price</span>
        <span>$16,815.46</span>
      </div>
      <div className='border-b text-sm py-3 w-full flex justify-between'>
        <span className='text-slate-500'>24h Low / 24h High</span>
        <span>$16,382.07 / $16,874.12</span>
      </div>
      <div className='border-b text-sm py-3 w-full flex justify-between'>
        <span className='text-slate-500'>7d Low / 7d High</span>
        <span>$16,382.07 / $16,874.12</span>
      </div>
      <div className='border-b text-sm py-3 w-full flex justify-between'>
        <span className='text-slate-500'>Trading Volume</span>
        <span>$23,249,202,782</span>
      </div>
      <div className='border-b text-sm py-3 w-full flex justify-between'>
        <span className='text-slate-500'>Market Cap Rank</span>
        <span>#1</span>
      </div>
      <div className='border-b text-sm py-3 w-full flex justify-between'>
        <span className='text-slate-500'>Market Cap</span>
        <span>$323,507,290,047</span>
      </div>
      <div className='border-b text-sm py-3 w-full flex justify-between'>
        <span className='text-slate-500'>Market Cap Dominance</span>
        <span>38.343%</span>
      </div>
      <div className='border-b text-sm py-3 w-full flex justify-between'>
        <span className='text-slate-500'>Volume / Market Cap</span>
        <span>0.0718</span>
      </div>
      <div className='border-b text-sm py-3 w-full flex justify-between items-center'>
        <span className='text-slate-500'>All-Time High</span>
        <span className='text-right'>
          <div>
            $69,044.77 <span className="text-red-500" >-75.6%</span>
          </div>
          <div className='text-slate-500 text-xs'>Nov 10, 2021 (about 1 year)</div>
        </span>
      </div>
      <div className='border-b text-sm py-3 w-full flex justify-between items-center'>
        <span className='text-slate-500'>All-Time Low</span>
        <span className='text-right'>
          <div>
          $67.81  <span className="text-green-500" >24729.1%</span>
          </div>
          <div className='text-slate-500 text-xs'>Jul 06, 2013 (over 9 years)</div>
        </span>
      </div>
    </div>
  );
};

export default Fundamentals;
