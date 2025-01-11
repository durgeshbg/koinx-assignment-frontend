import AnalyticsNav from './AnalyticsNav';
import Performance from './Performance';
import Fundamentals from './Fundamentals';

const Analytics = () => {
  return (
    <div className='h-full mt-5 mx-5'>
      <AnalyticsNav activeIndex={0} />
      <div className='flex flex-col bg-white rounded-md mx-auto p-7 w-full mt-5'>
        <Performance />
        <Fundamentals />
      </div>
    </div>
  );
};

export default Analytics;
