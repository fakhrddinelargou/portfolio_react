import "./sidbar.css";
import { House ,UserRound ,Layers, Briefcase , NotebookPen,MessageCircleMore ,GraduationCap} from 'lucide-react';

function sidbar() {
  return (
    <aside className="aside">
      <a href="#home" className="nav__logo">
        <svg className="logo" width="30"  viewBox="0 0 180 200" xmlns="http://www.w3.org/2000/svg">


  <rect x="0" y="0" width="32" height="200" rx="12" fill="#1E293B"/>
  <polygon
    points="40,20 170,20 150,60 40,60"
    fill="#1E293B"
  />

  <polygon
    points="40,85 135,85 115,120 40,120"
    fill="#FF4D5A"
  />

  <polygon
    points="40,145 170,145 150,185 40,185"
    fill="#1E293B"
  />

</svg>

      </a>

      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav__list">

            <li className="nav__item">
              <a href="#home" className="nav__link"><House /></a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link"><UserRound /></a>
            </li>

            <li className="nav__item">
              <a href="#services" className="nav__link"><Briefcase /></a>
            </li>

            <li className="nav__item">
              <a href="#Experience" className="nav__link"><GraduationCap /></a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link"><Layers  /></a>
            </li>

            <li className="nav__item">
              <a href="#blog" className="nav__link"><NotebookPen /></a>
            </li>
            
               <li className="nav__item">
              <a href="#contact" className="nav__link"><MessageCircleMore /></a>
            </li>

          </ul>
        </div>
      </nav>
     <span className="copyright">&copy; 2025 - 2026</span>
    </aside>
  );
}

export default sidbar;
