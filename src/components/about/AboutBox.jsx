import "./about.css";
import {Flame , BadgeCheck , UsersRound , Coffee  } from 'lucide-react';

function AboutBox(){
    return(
     <div className="about__boxs grid">
        <div className="about__box">
             <Flame size={40} color="#dedeea" />
             <div>
                <h3 className="about__title">198</h3>
                <span className="about__subtitle">Project completed</span>
             </div>
        </div>
        <div className="about__box">
             <Coffee  />
             <div>
                <h3 className="about__title">5670</h3>
                <span className="about__subtitle">Cup of coffee</span>
             </div>
        </div>
        <div className="about__box">
             <UsersRound  />
             <div>
                <h3 className="about__title">427</h3>
                <span className="about__subtitle">Satisfied clients</span>
             </div>
        </div>
        <div className="about__box">
             <BadgeCheck  />
             <div>
                <h3 className="about__title">35</h3>
                <span className="about__subtitle">Nominees winner</span>
             </div>
        </div>
     </div>
    )
}

export default AboutBox;