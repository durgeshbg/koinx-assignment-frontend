import { useRef } from 'react';
import InfoSVG from '../../../assets/InfoSVG';
import NotesSVG from '../../../assets/NotesSVG';
import AnalyticsSVG from '../../../assets/AnalyticsSVG';
import KeyEvent from './KeyEvent';

const KeyEvents = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='relative mt-4'>
      <h2 className='flex items-center text-xl font-semibold text-gray-700'>
        Key Events <InfoSVG />
      </h2>

      <button
        onClick={scrollLeft}
        className='absolute top-1/2 -left-4 transform -translate-y-1/2 p-3 bg-white shadow-lg rounded-full flex items-center justify-center z-10'
        style={{
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.06)',
        }}
      >
        <span className='text-black text-xl'>&larr;</span>
      </button>

      <div ref={scrollContainerRef} className='overflow-x-scroll mt-3 w-full flex gap-3 px-5'>
        <KeyEvent
          SVG={<NotesSVG />}
          title={'Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim'}
          body={
            'Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in abibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.'
          }
        />
        <KeyEvent
          SVG={<AnalyticsSVG />}
          title={'Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim'}
          body={
            'Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in abibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.'
          }
        />
        <KeyEvent
          SVG={<NotesSVG />}
          title={'Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim'}
          body={
            'Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in abibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.'
          }
        />
      </div>

      <button
        onClick={scrollRight}
        className='absolute top-1/2 -right-4 transform -translate-y-1/2 p-3 bg-white shadow-lg rounded-full flex items-center justify-center z-10'
        style={{
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.06)',
        }}
      >
        <span className='text-black text-xl'>&rarr;</span>
      </button>
    </div>
  );
};

export default KeyEvents;
