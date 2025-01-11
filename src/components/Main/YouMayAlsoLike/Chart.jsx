const Chart = ({ symbol, sparkline, path, change, price }) => {
  return (
    <div className='border rounded-md py-2 px-3 flex flex-col items-start min-w-52'>
      <div className='flex items-center gap-2 min-w-max text-sm'>
        <img className='rounded-full' src={path} alt='' />
        <p>{symbol}</p>
        <span
          className={`${
            change > 0.5 ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'
          } flex h-fit items-center rounded-md gap-2`}
        >
          {change > 0.5 ? '+' : ''} {change}%
        </span>
      </div>
      <div className='my-1'>${price.toLocaleString('en-US')}</div>
      <img className='mx-auto mt-1 w-full' src={sparkline} alt='' />
    </div>
  );
};

export default Chart;
