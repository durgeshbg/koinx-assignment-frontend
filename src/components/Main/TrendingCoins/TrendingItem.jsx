const TrendingItem = ({ path, name, symbol, change }) => {
  return (
    <li className='flex items-center w-full justify-between mt-4'>
      <div className='flex items-center gap-2'>
        <img className="rounded-full" src={path} alt='' />
        <p>
          {name}({symbol})
        </p>
      </div>
      <span
        className={`${
          change > 0.5 ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'
        } flex h-fit items-center rounded-md gap-2 px-2`}
      >
        <svg
          width='11'
          height='8'
          viewBox='0 0 11 8'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          transform={`${change > 0.5 ? '' : 'rotate(180)'}`}
        >
          <path d='M5.5 0L11 8H0L5.5 0Z' fill={`${change > 0.5 ? '#14B079' : '#FF0000'}`} />
        </svg>
        {change}%
      </span>
    </li>
  );
};

export default TrendingItem;
