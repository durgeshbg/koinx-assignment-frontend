import TrendingItem from './TrendingItem';

const TrendingCoins = () => {
  return (
    <div className='flex flex-col bg-white rounded-sm p-7 w-full mt-5'>
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
