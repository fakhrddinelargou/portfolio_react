
import { Instagram ,Github , Linkedin ,Twitter} from 'lucide-react';

function HeaderSocials() {
  return (
   <div className="home__socials">
    <a href="https://www.instagram.com/fakhreddine_largou/" className="home__social-link" target="_blank"> <Instagram /></a>
    <a href="https://www.linkedin.com/in/fakhreddine-largou-05b7a3340/" className="home__social-link" target="_blank"> <Linkedin /></a>
    <a href="https://github.com/fakhrddinelargou" className="home__social-link" target="_blank"> <Github /></a>
    <a href="https://x.com/LFakhrddin" className="home__social-link" target="_blank"> <Twitter /></a>
   </div>
  )
}

export default HeaderSocials;
