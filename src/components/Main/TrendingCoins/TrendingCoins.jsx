import { useRecoilValue } from 'recoil';
import TrendingItem from './TrendingItem';
import { trendingCoinsAtom } from '../../../Atoms';

const TrendingCoins = () => {
  const data = useRecoilValue(trendingCoinsAtom);
  console.log(data.coins);
  
  return (
    <div className='flex flex-col bg-white rounded-sm p-7 mt-5 lg:mx-5 lg:rounded-md'>
      <h3 className='font-semibold text-xl'>Trending Coins (24H)</h3>
      <ul>
        <TrendingItem />
        <TrendingItem />
        <TrendingItem />
      </ul>
    </div>
  );
};

export default TrendingCoins;
