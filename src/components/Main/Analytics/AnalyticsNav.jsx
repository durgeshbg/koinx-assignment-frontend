const AnalyticsNav = ({ activeIndex }) => {
  return (
    <ul className='flex gap-8 overflow-y-scroll py-2 scroll-m-0 border-b'>
      {[
        'Overview',
        'Fundamentals',
        'News',
        'Insights',
        'Sentiments',
        'Team',
        'Technicals',
        'Tokenomics',
      ].map((item, i) => (
        <li
          key={item}
          className={`${
            i === activeIndex
              ? 'underline-offset-[10px] text-blue-600 decoration-blue-600 decoration-4 underline'
              : ''
          }`}
        >
          <a href='#'>{item}</a>
        </li>
      ))}
    </ul>
  );
};

export default AnalyticsNav;
