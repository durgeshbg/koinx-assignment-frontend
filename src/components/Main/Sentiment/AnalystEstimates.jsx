import InfoSVG from '../../../assets/InfoSVG';

const AnalystEstimates = () => {
  return (
    <>
      <h2 className='flex items-center text-xl font-semibold text-gray-700 mt-4'>
        Analyst Estimates <InfoSVG />
      </h2>
      <div className='flex items-center gap-5 mt-4'>
        <div className='w-32 h-32 bg-green-100 text-green-600 flex items-center justify-center rounded-full text-4xl'>
          76 <span className='text-base'>%</span>
        </div>
        <div className='flex flex-col text-gray-600 w-1/2'>
          <div className='flex items-center justify-between mb-4  '>
            <div className='pr-5'>Buy</div>
            <div className='w-full gap-3 bg-white h-2 flex items-center'>
              <div className='bg-green-600 h-2 rounded-[2px] w-[76%]'></div>
              <div>76%</div>
            </div>
          </div>
          <div className='flex items-center justify-between mb-4  '>
            <div className='pr-4'>Hold</div>
            <div className='w-full gap-3 bg-white h-2 flex items-center'>
              <div className='bg-gray-400 h-2 rounded-[2px] w-[8%]'></div>
              <div>8%</div>
            </div>
          </div>
          <div className='flex items-center justify-between mb-4 '>
            <div className='pr-5'>Sell</div>
            <div className='w-full gap-3 bg-white h-2 flex items-center'>
              <div className='bg-red-500 h-2 rounded-[2px] w-[16%]'></div>
              <div>16%</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalystEstimates;
