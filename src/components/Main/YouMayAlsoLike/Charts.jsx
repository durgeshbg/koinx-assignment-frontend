import { useRef } from 'react';
import Chart from './Chart';

const Charts = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200, // Adjust scroll distance here
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='relative my-3 mb-4'>
      <button
        onClick={scrollLeft}
        className='absolute top-1/2 left-2 transform -translate-y-1/2 p-3 bg-white shadow-lg rounded-full flex items-center justify-center'
        style={{
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.06)',
        }}
      >
        <span className='text-black text-xl'>&larr;</span>
      </button>

      <div ref={scrollContainerRef} className='overflow-x-scroll w-full flex gap-3 pl-8 pr-4'>
        <Chart />
        <Chart />
        <Chart />
        <Chart />
        <Chart />
        <Chart />
        <Chart />
        <Chart />
        <Chart />
        <Chart />
        <Chart />
        <Chart />
      </div>

      <button
        onClick={scrollRight}
        className='absolute top-1/2 right-2 transform -translate-y-1/2 p-3 bg-white shadow-lg rounded-full flex items-center justify-center'
        style={{
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.06)',
        }}
      >
        <span className='text-black text-xl'>&rarr;</span>
      </button>
    </div>
  );
};

export default Charts;
