import React from "react";
import '../styles/AboutUs.css';
import Teamicon from '../assets/team.png';
import  Missionicon from '../assets/mission.png';
import Visionicon from  '../assets/vision.png';
import Texticon from '../assets/Texticon.png';
import Saticon from '../assets/satisfied.png';
import Travlericon from '../assets/traveler.png';
import Destination from '../assets/destination.png';
import Award from '../assets/award.png';
import CountUp from 'react-countup';


function MissionandVision(props) {
  return (
<div className="card">
  <div className="icon">
  <img src={props.img} alt="Team Icon" />
</div>
  <div className="title">
  <h1> {props.title}</h1>
   
  </div>
  <div className="descripition">
    <span>
     
   { props.description} 
    </span>
   
  </div>

</div>
  )
}

function Goal() {
  return (
    <div className="maincontainer">
      <div className="lefthalf">
        {/* Left half is empty */}
      </div>
      <div className="righthalf">
        <div className="goalicon">
          <img src={Texticon} /> 
        </div>
        <div className="desc">
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            repudiandae laudantium provident ratione dignissimos. Magni dicta,
            aperiam aut fuga error porro ipsa, molestiae illo corrupti dolorum
            mollitia vero eveniet praesentium.
            <br/>  <br/>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            repudiandae laudantium provident ratione dignissimos. Magni dicta,
            aperiam aut fuga error porro ipsa, molestiae illo corrupti dolorum
            mollitia vero eveniet praesentium.
            molestiae illo corrupti dolorum
            mollitia vero eveniet praesentium.
          </span>
        </div>
        <div className="writername">
          <h1>Siti Sarah</h1>
          <p>Founder Travosca</p> 
        </div>
      </div>
    </div>
  );
}

function Statistics(props) {
  return (
    <div className="statbox">
      <div className="staticon">
      <img src={ props.icon} alt="icon" />
      </div>
      <div className="countandtitle">
      <h2>
  <CountUp end={props.no} duration={5}  />
  <sup>+</sup>
</h2>

        <p>{props.name}</p>
      </div>
    </div>
  );
}






const AboutUs = () => {
return(
   
    <div className="about">
  <div className="hero">
      <h1>AboutUs</h1>
      <p>Home &gt; AboutuS</p>
    </div>
    <div className="cards">
    <MissionandVision 
    img={Teamicon}
    title="Great team work"
    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sequi nisi mollitia provident sed ad dicta, soluta est voluptatibus laborum iure. Quidem earum, numquam nostrum cumque distinctio molestiae aspernatur fugit?"
    />
    <MissionandVision
    img={Visionicon}
    title="Our Vision"
    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sequi nisi mollitia provident sed ad dicta, soluta est voluptatibus laborum iure. Quidem "
    />

    <MissionandVision
    img={Missionicon}
    title="Our Mission"
    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sequi nisi mollitia provident sed ad dicta, soluta est voluptatibus laborum iure. Quidem earum, "
    
    
    />
    </div>
    <div className="goalcontainer">
         <Goal/>
    </div>
   <div className="statistics">
  < Statistics
  icon={Saticon}
  no={126}
  name="Satisfied client"/>
  
  
  < Statistics
  icon={Travlericon}
  no={230}
  name="New Traveler"
  />
  < Statistics
  icon={Destination}
  no={230}
  name="Destination"

  
  />
  < Statistics
  icon={Award}
  no={230}
  name="Award"
  
  />
   </div>
   
</div> 
  );
};
export default AboutUs;

