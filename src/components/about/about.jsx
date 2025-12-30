import "./about.css";
import AboutBox from "./AboutBox";

function About() {
  return (
    <section className="about container section" id='about'>
   <h2 className="section__title">About Me</h2>
   <div className="about__container grid">
    <img src="./public/images/image_about.jpg" alt="" className="about__img" />
    <div className="about__data grid">
      <div className="about__info">
        <p className="about__description">I am Fakhreddine Largou, a frontend web developer. 
I create modern, responsive websites using HTML, CSS, JavaScript, and React. 
I enjoy building clean user interfaces and improving user experience.</p>
        <a href="" className="btn">Download CV</a>
      </div>
      <div className="about__skills grid">
        {/* skills data */}
        <div className="skills__data">
          <div className="skills__titles">
            <h3 className="skills__name">Development</h3>
            <span className="skills__number ">90%</span>
          </div>
          <div className="skills__bar">
            <span className="skills__percentage development"></span>
          </div>
        </div>
        {/* === */}
                <div className="skills__data">
          <div className="skills__titles">
            <h3 className="skills__name">UI/UX design</h3>
            <span className="skills__number ">80%</span>
          </div>
          <div className="skills__bar">
            <span className="skills__percentage ui__design"></span>
          </div>
        </div>

        <div className="skills__data">
          <div className="skills__titles">
            <h3 className="skills__name">Photography</h3>
            <span className="skills__number ">60%</span>
          </div>
          <div className="skills__bar">
            <span className="skills__percentage photography"></span>
          </div>
        </div>

      </div>
    </div>
   </div>
   <AboutBox/>
    </section>
  )
}

export default About;
