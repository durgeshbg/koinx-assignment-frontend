import ArrowSVG from '../../../assets/ArrowSVG';

const GetStarted = () => {
  return (
    <div className='flex flex-col text-white bg-[#0052FE] lg:mt-16 rounded-md mx-5 p-7 mt-5'>
      <img src='/getstarted.png' className='w-28 mx-auto' alt='' />
      <p className='font-semibold mx-auto mt-2'>Get Started with KoinX for FREE</p>
      <p className='text-center text-sm mt-6'>
        With our range of features that you can equip for free, KoinX allows you to be more educated
        and aware of your tax reports.
      </p>
      <div className='bg-white text-black rounded-md flex px-6 py-2 items-center text-sm mx-auto max-w-max mt-8'>
        Get Started for FREE <ArrowSVG />
      </div>
    </div>
  );
};

export default GetStarted;
