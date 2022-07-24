import React from "react";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { GrFacebookOption, GrGithub } from "react-icons/gr";

import teammember from "../../../assets/teammember.png";
import team1 from "../../../assets/team1.png";
import team2 from "../../../assets/team2.png";
import team3 from "../../../assets/team3.png";
import team4 from "../../../assets/team4.png";
import team5 from "../../../assets/team5.png";
import team6 from "../../../assets/team6.png";
import team7 from "../../../assets/team7.png";

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



          <div className="teamdetailcardinfo">
            <div className="teamdetailaboutpic">
              <img className="bannerbg" src={team2} alt="images" />
            </div>
            <div className="teamdetailcard">
              <div className="teamdetailabout">
                <h4>Srija Mukherjee</h4>
                <p>Technical Writer</p>
                <div className="values-list">
                  <button className="icon" href={"https://github.com/justbeingsrija"}>
                    <GrGithub />
                  </button>
                  <button className="icon" href={"https://www.linkedin.com/mwlite/in/srija-mukherjee-8470b4218"}>
                    <FaLinkedinIn />
                  </button>
                  <button className="icon" href={"https://twitter.com/justbeingsrija?t=VzbRHV5Ss4NALAVHOLi8aA&s=08"}>
                    <FaTwitter />
                  </button>
                </div>
              </div>
            </div>
          </div>



          <div className="teamdetailcardinfo">
            <div className="teamdetailaboutpic">
              <img className="bannerbg" src={team3} alt="images" />
            </div>
            <div className="teamdetailcard">
              <div className="teamdetailabout">
                <h4>Anshu Sarkar</h4>
                <p>Data Collector</p>
                <div className="values-list">
                  <button className="icon" href={"https://github.com/AnshuSarkarANX"}>
                    <GrGithub />
                  </button>
                  <button className="icon" href={"https://linkedin.com/in/anshu-sarkar/"}>
                    <FaLinkedinIn />
                  </button>
                  <button className="icon" href={"https://twitter.com/anshu7anx"}>
                    <FaTwitter />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="teamdetailcardinfo">
            <div className="teamdetailaboutpic">
              <img className="bannerbg" src={team4} alt="images" />
            </div>
            <div className="teamdetailcard">
              <div className="teamdetailabout">
                <h4>Anjushree Sen</h4>
                <p>Web Designer</p>
                <div className="values-list">
                  <button className="icon" href={"https://github.com/anjushreesen"}>
                    <GrGithub />
                  </button>
                  <button className="icon" href={"https://www.linkedin.com/in/anjushree-sen-977610203"}>
                    <FaLinkedinIn />
                  </button>
                  <button className="icon" href={"https://mobile.twitter.com/AnjushreeSen"}>
                    <FaTwitter />
                  </button>
                </div>
              </div>
            </div>
          </div>


          <div className="teamdetailcardinfo">
            <div className="teamdetailaboutpic">
              <img className="bannerbg" src={team5} alt="images" />
            </div>
            <div className="teamdetailcard">
              <div className="teamdetailabout">
                <h4>Debadyuti Paul</h4>
                <p>Graphics Designer</p>
                <div className="values-list">
                  <button className="icon" href={"https://github.com/DebadyutiPaul"}>
                    <GrGithub />
                  </button>
                  <button className="icon" href={"https://www.linkedin.com/in/debadyuti-paul-429598199/"}>
                    <FaLinkedinIn />
                  </button>
                  <button className="icon" href={"https://twitter.com/DebadyutiPaul"}>
                    <FaTwitter />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="teamdetailcardinfo">
            <div className="teamdetailaboutpic">
              <img className="bannerbg" src={team6} alt="images" />
            </div>
            <div className="teamdetailcard">
              <div className="teamdetailabout">
                <h4>Raunak Sarkar</h4>
                <p>Data Collector</p>
                <div className="values-list">
                  <button className="icon" href={"https://github.com/Raunak34"}>
                    <GrGithub />
                  </button>
                  <button className="icon" href={"https://www.linkedin.com/in/raunak-sarkar-46685920b/"}>
                    <FaLinkedinIn />
                  </button>
                  <button className="icon" href={"https://twitter.com/iamraunak_s"}>
                    <FaTwitter />
                  </button>
                </div>
              </div>
            </div>
          </div>



          <div className="teamdetailcardinfo">
            <div className="teamdetailaboutpic">
              <img className="bannerbg" src={team7} alt="images" />
            </div>
            <div className="teamdetailcard">
              <div className="teamdetailabout">
                <h4>Aritra Samanta</h4>
                <p>Problem Solver</p>
                <div className="values-list">
                  <button className="icon" href={"https://github.com/aritraaaa"}>
                    <GrGithub />
                  </button>
                  <button className="icon" href={"https://www.linkedin.com/in/aritra-samanta-3276961b5"}>
                    <FaLinkedinIn />
                  </button>
                  <button className="icon" href={"/"}>
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