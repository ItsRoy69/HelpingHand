import React from "react";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { GrFacebookOption, GrGithub } from "react-icons/gr";

import teammember from "../../../assets/teammember.png";
import team1 from "../../../assets/team1.png";
import team2 from "../../../assets/team2.png"

import "./Team.css";

const Team = () => {
  return (
    <>
      <div className="container" id="team">

        <h2 className="team_header">Meet our team</h2>

        <div className="teamcards_parent">


          <div className="teamdetailcardinfo">
            <div className="teamdetailaboutpic">
              <img className="bannerbg" src={team1} alt="images" />
            </div>
            <div className="teamdetailcard">
              <div className="teamdetailabout">
                <h4>Jyotirmoy Roy</h4>
                <p>Web Developer</p>
                <div className="values-list">
                  <button className="icon">
                  <a target="_blank" href="https://github.com/ItsRoy69">
                    <GrGithub color="orange" size={30}/>
                    </a>
                  </button>
                  <button className="icon" >
                  <a target="_blank" href="https://www.linkedin.com/in/jyotirmoyroy69/">
                    <FaLinkedinIn size={30}/>
                    </a>
                  </button>
                  <button className="icon" >
                    <a target="_blank" href="https://twitter.com/itsmeroy69">
                    <FaTwitter size={30}/>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="teamdetailcardinfo">
            <div className="teamdetailaboutpic">
              <img className="bannerbg" src={team2} alt="images" />
            </div>
            <div className="teamdetailcard">
              <div className="teamdetailabout">
                <h4>Megha Paul</h4>
                <p>Web Developer</p>
                <div className="values-list">
                  <button className="icon">
                  <a target="_blank" href="https://github.com/Megh2507">
                    <GrGithub color="orange" size={30}/>
                    </a>
                  </button>
                  <button className="icon" >
                  <a target="_blank" href="https://www.linkedin.com/in/megha-paul-88571118a">
                    <FaLinkedinIn size={30}/>
                    </a>
                  </button>
                  <button className="icon" >
                    <a target="_blank" href="https://twitter.com/miss_paul_megha">
                    <FaTwitter size={30}/>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
         

        </div>
      </div>
    </>
  );
};

export default Team;
