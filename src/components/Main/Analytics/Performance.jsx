const Performance = () => {
  return (
    <div className='flex flex-col gap-7 items-start'>
      <h3 className='text-2xl font-semibold'>Performance</h3>
      <div className='flex justify-between items-center w-full'>
        <div className='flex flex-col w-40 gap-2 '>
          <span className='min-w-max text-slate-600 text-sm'>Today&apos;s Low</span>
          <span>46,930.22</span>
        </div>
        <div className='w-full bg-gradient-to-r from-orange-600 via-yellow-400 to-green-500 rounded-full h-1'></div>
        <div className='flex flex-col items-end  gap-2 w-40'>
          <span className='min-w-max text-slate-600 text-sm'>Today&apos;s High</span>
          <span>49,343.83</span>
        </div>
      </div>
      <div className='flex justify-between items-center w-full'>
        <div className='flex flex-col w-40 gap-2 '>
          <span className='min-w-max text-slate-600 text-sm'>52W Low</span>
          <span>16,930.22</span>
        </div>
        <div className='w-full bg-gradient-to-r from-orange-600 via-yellow-400 to-green-500 rounded-full h-1'></div>
        <div className='flex flex-col items-end  gap-2 w-40'>
          <span className='min-w-max text-slate-600 text-sm'>52W High</span>
          <span>49,743.83</span>
        </div>
      </div>
    </div>
  );
};

export default Performance;
