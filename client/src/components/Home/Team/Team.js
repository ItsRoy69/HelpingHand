import React from "react";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { GrFacebookOption, GrGithub } from "react-icons/gr";

import teammember from "../../../assets/teammember.png";
import team1 from "../../../assets/team1.png";

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
                  <button className="icon" href={"https://github.com/ItsRoy69"}>
                    <GrGithub />
                  </button>
                  <button className="icon" href={"https://www.linkedin.com/in/jyotirmoyroy69/"}>
                    <FaLinkedinIn />
                  </button>
                  <button className="icon" href={"https://twitter.com/itsmeroy69"}>
                    <FaTwitter />
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
