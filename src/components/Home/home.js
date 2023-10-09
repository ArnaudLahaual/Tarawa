import './home.scss';
import { HamburgerIcon } from '@chakra-ui/icons';
import  LoaderLogo from '../../Assets/loader-logo-animated.png';
import  LoaderLogoText from '../../Assets/loader-text.png';

function Home() {

  return (

    <div className="home">
        <div className="header">
            <div className="header__burger">
                <HamburgerIcon boxSize={30} />
            </div>

            <div className="header__booking">
                <p>Réserver</p>
            </div>
        </div>
                <div className="logo">
                    <img src={LoaderLogo}/>
                    <img src={LoaderLogoText}/>
                </div>

        <div className="video-container">

        <video autoPlay muted loop playsInline>
            <source src="https://player.vimeo.com/progressive_redirect/playback/792253575/rendition/720p/file.mp4?loc=external&signature=330bc77f16767149251523115a87eeaed4931dee14596a9f90d13582c342a4c6" type="video/mp4"/>
        </video>
    
    </div>
      
    </div>
  );
}
// == Export
export default Home;