/*
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
    <div className="flex flex-col items-center w-[400px] text-center space-y-4">
      <div>
        <img src={props.img} alt="Team Icon" className="w-[200px] h-[140px]" />
      </div>
      <div>
        <h1 className="text-[3rem] font-bold">{props.title}</h1>
      </div>
      <div>
        <span className="text-gray-600 text-[1.2rem] font-[510] leading-[2.2rem]">
          {props.description}
        </span>
      </div>
    </div>
  );
}


function Goal() {
  return (
    <div className="goalcontainer flex flex-col sm:flex-row sm:items-start sm:text-left lg:gap-8 lg:mt-12">
  <div className="lefthalf sm:w-full sm:mb-5 sm:pl-12 lg:pl-16">
    {/* Left half stays empty but aligned to the left }
  </div>
  
  <div className="righthalf sm:w-full sm:p-4 sm:text-center lg:text-left lg:pr-16">
    <div className="goalicon flex sm:justify-center lg:justify-start lg:mb-6">
      <img
        src={Texticon}
        alt="Goal Icon"
        className="w-[200px] h-[140px] sm:w-[150px] sm:h-[100px] lg:w-[180px] lg:h-[120px]"
      />
    </div>
    
    <div className="desc sm:px-0 sm:text-center sm:text-[1rem] sm:mt-[10px] lg:text-left lg:mt-4 lg:text-[1.1rem] lg:leading-[2rem]">
      <span className="text-gray-600">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
        repudiandae laudantium provident ratione dignissimos. Magni dicta,
        aperiam aut fuga error porro ipsa, molestiae illo corrupti dolorum
        mollitia vero eveniet praesentium.
        <br />
        <br />
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
        repudiandae laudantium provident ratione dignissimos. Magni dicta,
        aperiam aut fuga error porro ipsa, molestiae illo corrupti dolorum
        mollitia vero eveniet praesentium.
              </span>
    </div>

    <div className="writername sm:text-center sm:mt-[10px] pl-[50px] sm:pl-0 lg:text-left lg:mt-6 lg:pl-0">
      <h1 className="text-[1.5rem] sm:text-[1.5rem] lg:text-[1.8rem] font-bold">
Siti Sarah
</h1>
      <p className="text-gray-500 sm:text-[1rem] lg:text-[1.1rem] font-medium">
Founder Travosca
</p>
    </div>
  </div>
</div>
  );
}

function Statistics(props) {
  return (
    <div className="statbox flex items-center justify-center sm:flex-col sm:text-center">
      <div className="staticon flex-shrink-0">
        <img
          src={props.icon}
          alt="icon"
          className="w-[110px] h-[100px] sm:w-[90px] sm:h-[80px]"
        />
      </div>
      <div className="countandtitle pl-5 sm:pl-0">
        <h2
          className="text-white font-bold text-[2.7rem] sm:text-[2rem] sm:text-center"
          style={{ textShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)' }}
        >
          <CountUp end={props.no} duration={5} />
          <sup className="text-[1.5rem] sm:text-[1.25rem]">+</sup>
        </h2>
        <p
          className="text-gray-300 font-bold text-[22px] sm:text-[18px] sm:text-center"
          style={{ textShadow: '2px 2px 3px rgba(56, 56, 56, 0.4)' }}
        >
          {props.name}
        </p>
      </div>
    </div>
  );
}










const AboutUs = () => {
  return (
    <div>
      <h1>heloooo what are you thinking</h1>
      <div className="hero    bg-white text-red p-[500px] mt-[300px]"
      style={{}}>
        <h1 className="text-white font-bold  text-[70rem] shadow-[4px_4px 5px_2px_rgba(0,0,0,0.2)]"
        style={{textShadow:'4px 4.5px 2px rgba(0, 0, 0, 0.2)'  }}>
          About Us
        </h1>
        <p className="pt-[0.9rem] text-white font-bold text-[1.9rem] shadow-[4px_4.5px_2px_rgba(0,0,0,0.2)]">
          Home &gt; About Us
        </p>
      </div>
      <div className="bg-red-500">
  Test Red Background
</div>


      

      
      <div className="flex flex-wrap justify-around mb-[200px]">
        <div className="flex flex-col items-center w-[400px] text-center space-y-4">
          <img src={Teamicon} alt="Team Icon" className="w-[200px] h-[140px]" />
          <h1 className="text-[3rem] font-bold">Great team work</h1>
          <p className="text-gray-600 text-[1.2rem] font-[510] leading-[2.2rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            sequi nisi mollitia provident sed ad dicta, soluta est voluptatibus
            laborum iure. Quidem earum, numquam nostrum cumque distinctio
            molestiae aspernatur fugit?
          </p>
        </div>
        <div className="flex flex-col items-center w-[400px] text-center space-y-4">
          <img src={Visionicon} alt="Vision Icon" className="w-[200px] h-[140px]" />
          <h1 className="text-[3rem] font-bold">Our Vision</h1>
          <p className="text-gray-600 text-[1.2rem] font-[510] leading-[2.2rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            sequi nisi mollitia provident sed ad dicta, soluta est voluptatibus
            laborum iure. Quidem.
          </p>
        </div>
        <div className="flex flex-col items-center w-[400px] text-center space-y-4">
          <img src={Missionicon} alt="Mission Icon" className="w-[200px] h-[140px]" />
          <h1 className="text-[3rem] font-bold">Our Mission</h1>
          <p className="text-gray-600 text-[1.2rem] font-[510] leading-[2.2rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            sequi nisi mollitia provident sed ad dicta, soluta est voluptatibus
            laborum iure. Quidem earum.
          </p>
        </div>
      </div>

      <div className="goalcontainer">
        <Goal />
       
      </div>

      <div className="statistics sm:grid lg:flex sm:grid-cols-2 lg:justify-around gap-5 mt-[500px] mb-[500px] sm:text-center">
        <Statistics icon={Saticon} no={126} name="Satisfied client" />
        <Statistics icon={Travlericon} no={230} name="New Traveler" />
        <Statistics icon={Destination} no={230} name="Destination" />
        <Statistics icon={Award} no={230} name="Award" />
      </div>
    </div>
  );
};


export default AboutUs;




*/

import React from "react";
import '../styles/AboutUs.css';
import Teamicon from '../assets/team.png';
import Missionicon from '../assets/mission.png';
import Visionicon from '../assets/vision.png';
import Texticon from '../assets/Texticon.png';
import Saticon from '../assets/satisfied.png';
import Travlericon from '../assets/traveler.png';
import Destination from '../assets/destination.png';
import Award from '../assets/award.png';
import heroimg1 from '../assets/heroimg1.jpg';
import Goalimg2 from '../assets/goalimg2.jpg';
import Statimg3 from '../assets/statimg3.jpg';
import dubai  from '../assets/dubai.jpg';
import bali  from '../assets/bali.webp';
import paris  from '../assets/paris.webp';
import italy  from '../assets/italy.jpg';
import CountUp from 'react-countup';





function MissionandVision(props) {
  return (
    <div className="card flex flex-col items-center w-[400px] text-center ">
      <div>
        <img src={props.img} alt="Team Icon" className="icon pb-40px  w-[250px] h-[170px]" />
      </div>
      <div>
        <h1 className="title text-[3rem] font-bold">{props.title}</h1>
      </div>
      <div>
        <span className="descripition  text-gray-600 text-[1.3rem] font-[510] leading-[2.2rem]">
          {props.description}
        </span>
      </div>
    </div>
  );
}


{/* Goal */}

function Goal() {
  return (
    <div className="goalcontainer flex flex-col lg:flex-row items-stretch gap-8 mb-72 justify-around" 
        style={{ width: '100%', height: '600px', marginTop: '10rem' }}>
      <div className="lefthalf flex-1 flex flex-col justify-center text-center lg:text-left"
           style={{ paddingLeft: '60px' }}>
        <img src={Goalimg2} alt="Left Half Icon" className="p-4 rounded-none lg:rounded-tl-[150px] lg:rounded-br-[0px]" 
             style={{ height: '90%', width: '90%' ,borderRadius:'170px 0px'}} />
      </div>
      <div className="righthalf flex-1 flex flex-col justify-center p-4 lg:pl-16 lg:pr-16">
        <div className="goalicon flex justify-center lg:justify-start mb-6">
          <img src={Texticon} alt="Goal Icon" className="w-45 h-36 sm:w-40 sm:h-28 lg:w-170 lg:h-170" />
        </div>
        <div className="desc text-gray-600 text-lg leading-8 lg:text-xl lg:leading-9 text-center lg:text-left p-4 lg:p-0">
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            repudiandae laudantium provident ratione dignissimos. Magni dicta,aperiam aut fuga error porro 
            aperiam aut fuga error porro 
            <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            repudiandae laudantium provident ratione dignissimos. Magni dicta,
            aperiam aut fuga error porro ipsa, molestiae illo corrupti dolorum
            mollitia vero eveniet praesentium.
          </span>
        </div>
        <div className="writername mt-6 text-center lg:text-left">
          <h1 className="text-2xl lg:text-3xl font-bold">Siti Sarah</h1>
          <p className="text-gray-500 text-lg lg:text-xl  font-medium">Founder Travosca</p>
        </div>
      </div>
    </div>
);}


function Statistics(props) {
  return (
    <div className="statbox        flex items-center justify-center gap-3 sm:flex-raw sm:items-center sm:text-center">
      <div className="staticon flex-shrink-0">
  <img src={props.icon} alt="icon" className="w-[70px] h-[60px] sm:w-[90px] sm:h-[80px] lg:w-[120px] lg:h-[110px]" />
</div>
      <div className="countandtitle pl-5 sm:pl-0">
        <h2 className="text-white font-bold lg:text-[3rem] sm:text-[2rem] sm:text-center" style={{ textShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)' }}>
          <CountUp end={props.no} duration={5} />
          <sup className="text-gray-300 font-bold   lg:text-[1.5rem] lg:p-2  sm:text-[1.25rem]">+</sup>
        </h2>
        <p className="text-gray-300 font-bold lg:text-[20px] sm:text-[18px] sm:text-center" style={{ textShadow: '2px 2px 3px rgba(56, 56, 56, 0.4)' }}>
          {props.name}
        </p>
      </div>
    </div>
  );
}

function Moments() {
  return (
    <div style={{marginBottom:'200px'}} >
      <div className="Momenttext flex flex-col justify-center items-center">
        <p className="text-4xl 
        text-gray-600 font-medium leading-tight text-center">Gallery</p>
        <h1 className="text-4xl font-bold text-black 
        lg:text-6xl
        ">Unforgettable moment</h1>
      </div>
      <div className="pictures 
        lg:p-10 mt-16 h-[700px] flex">
        <div className="rightpic flex-1 flex flex-col h-full">
          <div className="bali flex-1 relative m-2">
            <img src={bali} alt="Bali" className="w-full h-full 
            
            object-cover " style={{ borderRadius:'20px', 
              height: '676px' }} />
            <div className="overlay absolute bottom-2 left-16 transform -translate-x-1/2 text-white font-bold text-4xl">Bali</div>
          </div>
        </div>
        <div className="leftpic flex-1 flex flex-col h-full">
          <div className="upperleft flex-1 relative m-2">
            <div className="dubai flex-1 relative">
              <img src={dubai} alt="Dubai" className="w-full h-[328px] object-cover rounded-lg" />
              <div className="overlay absolute bottom-2 left-16 transform -translate-x-1/2 text-white font-bold text-4xl">Dubai</div>
            </div>
          </div>
          <div className="lowerleft flex-1 flex">
            <div className="paris flex-1 relative m-2">
              <img src={paris} alt="Paris" className="w-full h-[328px] object-cover rounded-lg" />
              <div className="overlay absolute bottom-2 left-16 transform -translate-x-1/2 
            text-white font-bold text-2xl
            sm:m-2
            ">Paris</div>
            </div>
            <div className="italy flex-1 relative m-2">
              <img src={italy} alt="Italy" className="w-full h-[328px] object-cover rounded-lg" />
              <div className="overlay absolute bottom-2 left-16 transform -translate-x-1/2 
              text-white font-bold text-2xl">Italy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}













const AboutUs = () => {
  return (
  <div>
  <div className="hero bg-cover bg-center text-white p-8 sm:p-12 lg:p-20 min-h-screen flex flex-col items-center justify-center"
    style={{ backgroundImage: `url(${heroimg1})` }}>
        <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold" style={{ textShadow: '4px 4.5px 2px rgba(0, 0, 0, 0.2)' }}>
          About Us
        </h1>
        <p className="pt-4 text-xl sm:text-2xl lg:text-2.5xl font-bold" style={{ textShadow: '4px 4.5px 2px rgba(0, 0, 0, 0.2)' }}>
          Home &gt; About Us
        </p>
      </div>

      {/* Cards section */}
      <div className="cards flex flex-wrap justify-around mt-[130px]">
        <MissionandVision
          img={Teamicon}
          alt="Team Icon"
          title="Great team work"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sequi nisi mollitia provident sed ad dicta, soluta est voluptatibus laborum iure. Quidem earum, numquam nostrum cumque distinctio molestiae aspernatur fugit?"
        />
        <MissionandVision
          img={Visionicon}
          alt="Vision Icon"
          title="Our Vision"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sequi nisi mollitia provident sed ad dicta, soluta est voluptatibus laborum iure. Quidem."
        />
        <MissionandVision
          img={Missionicon}
          alt="Mission Icon"
          title="Our Mission"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sequi nisi mollitia provident sed ad dicta, soluta est voluptatibus laborum iure. Quidem earum."
        />
      </div>

 {/* Goal Section */}

 <div className="goalcontainer"  >
        <Goal />
  </div>
   {/* stat Section */}

   <div className="statistics-container relative flex flex-col items-center bg-cover bg-center    mb-20    bg-no-repeat   w-full lg:h-[600px] sm:h-[700px]  justify-center  text-white py-24" style={{ backgroundImage: `url(${Statimg3})`,marginBottom: '200px' }}>
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="relative z-10 statistics
 
  lg:flex lg:justify-around sm:grid sm:grid-cols-2 sm:gap-5 w-full max-w-12xl mx-auto px-4">
    <Statistics icon={Saticon} no={126} name="Satisfied client" />
    <Statistics icon={Travlericon} no={230} name="New Traveler" />
    <Statistics icon={Destination} no={230} name="Destination" />
    <Statistics icon={Award} no={230} name="Award" />
  </div>
</div>
  <div className="moments">
  <Moments/>
  </div>
    




</div>);}
export default AboutUs;


