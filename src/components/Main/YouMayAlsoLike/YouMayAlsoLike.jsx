import Charts from './Charts';

const YouMayAlsoLike = () => {
  return (
    <div className='px-5 bg-white'>
      <h2 className='text-xl font-semibold'>You May Also Like</h2>
      <Charts />
      <h2 className='text-xl font-semibold mt-12'>Trending Coins</h2>
      <Charts />
    </div>
  );
};

export default YouMayAlsoLike;
