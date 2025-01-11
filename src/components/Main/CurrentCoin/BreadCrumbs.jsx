const BreadCrumbs = ({ items, activeIndex }) => {
  return (
    <ul className='flex pt-6 gap-2 mx-5'>
      {items &&
        items.map((item, i) => (
          <li
            className={`flex items-center gap-3 ${
              activeIndex === i ? 'text-black' : 'text-slate-500'
            }`}
            key={item}
          >
            {i !== 0 && (
              <svg
                width='11'
                height='11'
                viewBox='0 0 11 11'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clipPath='url(#clip0_57_455)'>
                  <path
                    d='M5.44075 5.75968C5.46028 5.68807 5.44726 5.60669 5.40168 5.51554C5.36262 5.44393 5.30728 5.36906 5.23567 5.29093L1.24153 1.30656C1.13736 1.20239 1.01366 1.15031 0.870435 1.15031C0.727205 1.15031 0.605135 1.20239 0.504224 1.30656C0.403312 1.41073 0.352856 1.53442 0.352856 1.67765C0.352856 1.82088 0.401685 1.94458 0.499341 2.04875L4.30793 5.74992L0.499341 9.46086C0.408195 9.54549 0.356112 9.64966 0.343091 9.77336C0.33007 9.89705 0.357739 10.0126 0.426099 10.12C0.494458 10.2275 0.590487 10.2974 0.714185 10.33C0.837882 10.3625 0.95507 10.356 1.06575 10.3105C1.13085 10.2844 1.18944 10.2454 1.24153 10.1933L5.23567 6.2089C5.30728 6.13078 5.35937 6.06242 5.39192 6.00382C5.43749 5.91268 5.45377 5.8313 5.44075 5.75968ZM10.1282 5.29093L6.13411 1.30656C6.02994 1.20239 5.90624 1.15031 5.76301 1.15031C5.61978 1.15031 5.49771 1.20239 5.3968 1.30656C5.29589 1.41073 5.24543 1.53442 5.24543 1.67765C5.24543 1.82088 5.29426 1.94458 5.39192 2.04875L9.20051 5.75968L5.39192 9.45109C5.30077 9.54224 5.24869 9.64966 5.23567 9.77336C5.22265 9.89705 5.25195 10.011 5.32356 10.1152C5.39517 10.2193 5.4912 10.2893 5.61165 10.3251C5.73209 10.3609 5.84765 10.356 5.95833 10.3105C6.02343 10.2844 6.07877 10.2454 6.12434 10.1933L10.1282 6.21867C10.1999 6.12752 10.2519 6.05591 10.2845 6.00382C10.3301 5.91919 10.3463 5.83781 10.3333 5.75968C10.3659 5.62297 10.2975 5.46672 10.1282 5.29093Z'
                    fill='#3E5765'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_57_455'>
                    <rect
                      width='10'
                      height='10.5'
                      fill='white'
                      transform='matrix(1 0 0 -1 0.339966 11)'
                    />
                  </clipPath>
                </defs>
              </svg>
            )}
            {item}
          </li>
        ))}
    </ul>
  );
};

export default BreadCrumbs;
