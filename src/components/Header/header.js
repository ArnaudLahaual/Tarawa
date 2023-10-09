import './header.scss';
import { HamburgerIcon } from '@chakra-ui/icons'

function Header() {
  
  return (

    <div className='header'>
      <div className="header__burger">
        <HamburgerIcon boxSize={30} />
      </div>

      <div className="header__booking">
        <p>Réserver</p>
      </div>
    </div>
  );
}
// == Export
export default Header;