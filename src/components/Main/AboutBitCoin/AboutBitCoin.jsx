import ArrowSVG from '../../../assets/ArrowSVG';

const AboutBitCoin = () => {
  return (
    <div className='flex flex-col bg-white rounded-md mx-5 p-7 mt-5 lg:ml-10'>
      <h3 className='text-2xl font-semibold'>About Bitcoin</h3>
      <div>
        <h3 className='text-xl font-semibold mt-5'>What is Bitcoin?</h3>
        <p className='mt-3'>
          What is Bitcoin? Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of
          $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day
          all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has
          a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
        </p>
      </div>
      <div>
        <h3 className='text-xl font-semibold mt-5'>Lorem ipsum dolor sit amet</h3>
        <p className='mt-3'>
          Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra.
          Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi
          diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies
          urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi
          sodales odio sed rhoncus.
        </p>
        <p className='mt-3'>
          Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque
          auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio
          cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed
          volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc
          praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus.
          Integer pellentesque enim convallis ultricies at.
        </p>
        <p className='mt-3'>
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis
          ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti
          iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget.
          Ullamcorper dui
        </p>
      </div>
      <div>
        <h3 className='text-xl font-semibold mt-5'>Already Holding Crypto?</h3>
        <div className='flex gap-3 flex-wrap' >
          <div className='mt-3 bg-gradient-to-br from-green-400 to-blue-500 p-3 rounded-md flex gap-5'>
            <img src='image2.png' className='w-32' alt='' />
            <div className='flex flex-col justify-around'>
              <h4 className='text-white font-semibold text-xl leading-8 w-[220px]'>
                Calculate your Profits
              </h4>
              <div className='bg-white max-w-max flex items-center rounded-md px-3 py-1'>
                Check Now <ArrowSVG />
              </div>
            </div>
          </div>
          <div className='mt-3 bg-gradient-to-br from-red-400 to-red-600 p-3 rounded-md flex gap-5'>
            <img src='image1.png' className='w-32' alt='' />
            <div className='flex flex-col justify-around'>
              <h4 className='text-white font-semibold text-xl leading-8 w-[220px]'>
                Calculate your tax liability
              </h4>
              <div className='bg-white max-w-max flex items-center rounded-md px-3 py-1'>
                Check Now <ArrowSVG />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBitCoin;
