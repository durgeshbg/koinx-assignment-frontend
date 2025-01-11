import TeamCard from './TeamCard';

const Team = () => {
  return (
    <div className='flex flex-col bg-white rounded-md mx-auto p-7 w-full mt-5'>
      <h3 className='text-2xl font-semibold'>Team</h3>
      <p className='my-3'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto doloribus laudantium
        sequi illo consequatur aperiam, cumque ducimus, reiciendis eos voluptas maxime laborum quia
        distinctio repellat consectetur minus deleniti necessitatibus reprehenderit.
      </p>
      <TeamCard path={'/team1.png'} name={'John Smith'} />
      <TeamCard path={'/team2.png'} name={'Elina Williams'} />
      <TeamCard path={'/team3.png'} name={'John Smith'} />
    </div>
  );
};

export default Team;
