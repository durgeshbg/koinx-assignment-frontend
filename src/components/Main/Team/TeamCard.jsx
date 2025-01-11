const TeamCard = ({path, name}) => {
  return (
    <div className='bg-blue-50 rounded-md p-3 flex flex-col items-center mt-4'>
      <div className=' items-center flex flex-col'>
        <img className='w-24' src={path} alt='' />
        <p className='font-semibold'>{name}</p>
        <p className='text-sm text-gray-500'>Designation here</p>
      </div>
      <p className='mt-3 text-sm leading-6'>
        Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero
        hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus
        arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id
        facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum.
        Malesuada etiam mi gravida praesent interdu
      </p>
    </div>
  );
};

export default TeamCard;
