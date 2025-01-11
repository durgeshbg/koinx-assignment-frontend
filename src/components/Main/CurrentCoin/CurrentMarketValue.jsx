import { useRecoilValue } from 'recoil';
import { bitcoinDataAtom } from '../../../Atoms';

const CurrentMarketValue = () => {
  const data = useRecoilValue(bitcoinDataAtom);

  return (
    <div className='flex border-b gap-5 mb-6 pb-6'>
      <div className='money mr-auto'>
        <div className='usd text-3xl font-semibold'>${data.bitcoin.usd.toLocaleString('en-US')}</div>
        <div className='inr text-xl'>₹{data.bitcoin.inr.toLocaleString('en-IN')}</div>
      </div>
      <div
        className={`flex h-fit items-center px-2 py-1 rounded-md gap-2 ${
          data.bitcoin.usd_24h_change > 0.5 ? 'bg-green-50' : 'bg-red-50'
        }`}
      >
        <svg
          width='11'
          height='8'
          viewBox='0 0 11 8'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          transform={`${data.bitcoin.usd_24h_change > 0.5 ? '' : 'rotate(180)'}`}
        >
          <path
            d='M5.5 0L11 8H0L5.5 0Z'
            fill={`${data.bitcoin.usd_24h_change > 0.5 ? '#14B079' : '#FF0000'}`}
          />
        </svg>
        <span
          className={`${data.bitcoin.usd_24h_change > 0.5 ? 'text-green-600' : 'text-red-500'}`}
        >
          {data.bitcoin.usd_24h_change.toFixed(3)}%
        </span>
      </div>
      <div className='period text-slate-400 pt-1'>(24H)</div>
    </div>
  );
};

export default CurrentMarketValue;
