import InfoSVG from '../../../assets/InfoSVG';
import NotesSVG from '../../../assets/NotesSVG';
import AnalyticsSVG from '../../../assets/AnalyticsSVG';

const KeyEvents = () => {
  return (
    <>
      <h2 className='flex items-center text-xl font-semibold text-gray-700 mt-4'>
        Key Events <InfoSVG />
      </h2>
      <div className='overflow-x-scroll mt-3 w-auto flex gap-2'>
        <div className='bg-blue-50 p-4 rounded-md flex gap-2 min-w-[345px]'>
          <div className='pt-2'>
            <NotesSVG />
          </div>
          <div>
            <p className='font-semibold leading-tight text-sm pb-2'>
              Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim{' '}
            </p>
            <p className='text-xs text-gray-600'>
              Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis.
              Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a
              bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.
            </p>
          </div>
        </div>
        <div className='bg-green-50 p-4 rounded-md flex gap-2 min-w-[345px]'>
          <div className='pt-2'>
            <AnalyticsSVG />
          </div>
          <div>
            <p className='font-semibold leading-tight text-sm pb-2'>
              Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim{' '}
            </p>
            <p className='text-xs text-gray-600'>
              Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis.
              Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a
              bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.
            </p>
          </div>
        </div>
        <div className='bg-blue-50 p-4 rounded-md flex gap-2 min-w-[345px]'>
          <div className='pt-2'>
            <NotesSVG />
          </div>
          <div>
            <p className='font-semibold leading-tight text-sm pb-2'>
              Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim{' '}
            </p>
            <p className='text-xs text-gray-600'>
              Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis.
              Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a
              bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default KeyEvents;
