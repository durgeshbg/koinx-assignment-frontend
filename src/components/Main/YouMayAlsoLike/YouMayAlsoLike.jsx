import Charts from './Charts';

const YouMayAlsoLike = () => {
  return (
    <div className='px-5 bg-white mx-5 mb-5 rounded-md lg:mt-5 lg:mx-auto'>
      <h2 className='text-xl font-semibold mt-12'>You May Also Like</h2>
      <Charts />
      <h2 className='text-xl font-semibold mt-12'>Trending Coins</h2>
      <Charts />
    </div>
  );
};

export default YouMayAlsoLike;
