import Logo from './assets/logo-text.png';

const Nav = () => {
    return (
       <nav className="flex justify-between">
        <img src={Logo} alt=""/>
        <ul className='flex gap-4'>
          <li>Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>

        </ul>
      </nav>
    );
};

export default Nav;