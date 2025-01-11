import KeyEvents from "./KeyEvents";
import AnalystEstimates from "./AnalystEstimates";
const Sentiment = () => {
  return (
    <div className='flex flex-col bg-white rounded-md mx-auto p-7 w-full mt-5'>
      <h3 className='text-2xl font-semibold'>Sentiment</h3>
      <KeyEvents />
      <AnalystEstimates />
    </div>
  );
};

export default Sentiment;
