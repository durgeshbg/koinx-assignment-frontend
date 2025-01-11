const KeyEvent = ({ SVG, title, body }) => {
  return (
    <div className='bg-blue-50 p-4 rounded-md flex gap-2 min-w-[345px]'>
      <div className='pt-2'>{SVG}</div>
      <div>
        <p className='font-semibold leading-tight text-sm pb-2'>{title}</p>
        <p className='text-xs text-gray-600'>{body}</p>
      </div>
    </div>
  );
};

export default KeyEvent;
