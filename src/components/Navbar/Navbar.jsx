import { useState } from 'react';
import LogoSVG from '../../assets/LogoSVG';
import MenuSVG from '../../assets/MenuSVG';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='flex items-center px-5 py-3 md:px-10'>
      <span className='cursor-pointer mr-auto'>
        <LogoSVG />
      </span>
      <nav className='bg-white'>
        <span className='cursor-pointer md:hidden' onClick={toggleMenu}>
          <MenuSVG />
        </span>
        <ul
          className={`${
            menuOpen
              ? 'absolute right-10 border-2 rounded-md bg-white flex flex-col py-8 z-10 px-3 items-start gap-5'
              : 'hidden md:flex md:justify-between md:items-center font-semibold'
          }`}
        >
          {['Crypto Taxes', 'Free Tools', 'Resource Center'].map((item) => (
            <li className='mx-6' key={item}>
              <a href='#'>{item}</a>
            </li>
          ))}

          <button className='bg-gradient-to-tr from-blue-600 to-blue-700 px-6 py-2 text-white rounded-md ml-6'>
            Get started
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
