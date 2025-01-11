const Tokenomics = () => {
  return (
    <div className='flex flex-col bg-white rounded-md rounded-b-none p-7 mx-5 mt-5 lg:ml-10'>
      <h3 className='text-2xl font-semibold'>Tokenomics</h3>
      <h4 className='mt-7 text-xl font-semibold'>Initial Distribution</h4>
      <div className='flex items-center gap-8 mt-5'>
        <img className='w-36' src='/pie.png' alt='' />
        <div>
          <p className='flex items-center gap-4'>
            <div className='w-3 h-3 rounded-full bg-[#0082FF]'></div> Crowdsale investors: 80%
          </p>
          <p className='flex items-center gap-4'>
            <div className='w-3 h-3 rounded-full bg-[#FAA002]'></div>Foundation: 20%
          </p>
        </div>
      </div>
      <p className='my-4'>
        Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc
        dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus
        orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa
        habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet
        aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere
        facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu
        ac risus.
      </p>
    </div>
  );
};

export default Tokenomics;
