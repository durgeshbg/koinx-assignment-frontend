const Team = () => {
  return (
    <div className='flex flex-col bg-white rounded-md mx-auto p-7 w-full mt-5'>
      <h3 className='text-2xl font-semibold'>Team</h3>
      <p className='my-3'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto doloribus laudantium
        sequi illo consequatur aperiam, cumque ducimus, reiciendis eos voluptas maxime laborum quia
        distinctio repellat consectetur minus deleniti necessitatibus reprehenderit.
      </p>
      <div className='bg-blue-50 rounded-md p-3 flex flex-col items-center mt-4'>
        <div className=' items-center flex flex-col'>
          <img className='w-24' src='/team1.png' alt='' />
          <p className="font-semibold" >John Smith</p>
          <p className="text-sm text-gray-500" >Designation here</p>
        </div>
        <p className="mt-3 text-sm leading-6" >
          Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero
          hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus
          arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id
          facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est
          ipsum. Malesuada etiam mi gravida praesent interdu
        </p>
      </div>
    </div>
  );
};

export default Team;
