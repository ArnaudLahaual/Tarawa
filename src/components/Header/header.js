import './header.scss';
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'

// The default icon size is 1em (16px)
<PhoneIcon />



function Header() {
  
  return (

    <div className='header'>
      <div className="header_burger">
        <h1>icone burger</h1>
        <PhoneIcon />
      </div>

      <div className="header_booking">
        <h1>Réserver</h1>
      </div>
    </div>
  );
}
// == Export
export default Header;