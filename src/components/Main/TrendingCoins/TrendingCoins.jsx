import { useRecoilValue } from 'recoil';
import TrendingItem from './TrendingItem';
import { trendingCoinsAtom } from '../../../Atoms';

const TrendingCoins = () => {
  const data = useRecoilValue(trendingCoinsAtom);

  return (
    <div className='flex flex-col bg-white rounded-sm p-7 mt-5 lg:mx-5 lg:rounded-md lg:mr-10'>
      <h3 className='font-semibold text-xl'>Trending Coins (24H)</h3>
      <ul>
        <TrendingItem
          path={data.coins[0].item.small}
          name={data.coins[0].item.name}
          symbol={data.coins[0].item.symbol}
          change={data.coins[0].item.data.price_change_percentage_24h.usd.toFixed(2)}
        />
        <TrendingItem
          path={data.coins[1].item.small}
          name={data.coins[1].item.name}
          symbol={data.coins[1].item.symbol}
          change={data.coins[1].item.data.price_change_percentage_24h.usd.toFixed(2)}
        />
        <TrendingItem
          path={data.coins[2].item.small}
          name={data.coins[2].item.name}
          symbol={data.coins[2].item.symbol}
          change={data.coins[2].item.data.price_change_percentage_24h.usd.toFixed(2)}
        />
      </ul>
    </div>
  );
};

export default TrendingCoins;
