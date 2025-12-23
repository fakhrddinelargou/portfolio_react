import "./sidbar.css";
import { House ,UserRound ,Layers, Briefcase , NotebookPen,MessageCircleMore ,GraduationCap} from 'lucide-react';

function sidbar() {
  return (
    <aside className="aside">
      <a href="#home" className="nav__logo">
        <img src="./public/images/logo.png" alt="" className="logo"/>
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
              <a href="#resume" className="nav__link"><GraduationCap /></a>
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
