import AnalyticsNav from './AnalyticsNav';

const Analytics = () => {
  return (
    <div className='h-full  mt-5 w-full'>
      <AnalyticsNav activeIndex={0} />
      <div className='flex flex-col bg-white rounded-md mx-auto p-7 w-full mt-5'>
      </div>
    </div>
  );
};

export default Analytics;
