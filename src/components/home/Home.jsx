import "./home.css";
import HeaderSocials from "./headerSocials";
import ScrollDown from "./ScrollDown";
import Shapes  from "./Shapes";


function Home() {
  return (
   <section className="home container" id="home">
   <div className="intro">
<img src="public/images/profile.png" alt="" className="home__img" />
<h1 className="home__name">Fakhreddine Largou</h1>
<span className="home__education">I'm a Full-stack developer web</span>
<HeaderSocials/>
<a href="#contact" className="btn">Hire me</a>
<ScrollDown/>
   </div>
   <Shapes />
   </section>
  )
}

export default Home;
