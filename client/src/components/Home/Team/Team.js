import React from "react";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import teammember from "../../../assets/teammember.png";
import "./Team.css";

const Team = () => {
  return (
    <>
      <div className="container" id="team">

        <h2 className="team_header">Meet our team</h2>

        <div className="teamcards_parent">


          <div className="teamdetailcardinfo">
            <div className="teamdetailaboutpic">
              <img className="bannerbg" src={teammember} alt="images" />
            </div>
            <div className="teamdetailcard">
              <div className="teamdetailabout">
                <h4>Jyotirmoy Roy</h4>
                <p>Lead Developer</p>
                <div className="values-list">
                  <button className="icon" href={"/"}>
                    <GrFacebookOption />
                  </button>
                  <button className="icon" href={"/"}>
                    <FaLinkedinIn />
                  </button>
                  <button className="icon" href={"/"}>
                    <FaTwitter />
                  </button>
                </div>
              </div>
            </div>
          </div>



          <div className="teamdetailcardinfo">
            <div className="teamdetailaboutpic">
              <img className="bannerbg" src={teammember} alt="images" />
            </div>
            <div className="teamdetailcard">
              <div className="teamdetailabout">
                <h4>Srija Mukherjee</h4>
                <p>Technical Writer</p>
                <div className="values-list">
                  <button className="icon" href={"/"}>
                    <GrFacebookOption />
                  </button>
                  <button className="icon" href={"/"}>
                    <FaLinkedinIn />
                  </button>
                  <button className="icon" href={"/"}>
                    <FaTwitter />
                  </button>
                </div>
              </div>
            </div>
          </div>



          <div className="teamdetailcardinfo">
            <div className="teamdetailaboutpic">
              <img className="bannerbg" src={teammember} alt="images" />
            </div>
            <div className="teamdetailcard">
              <div className="teamdetailabout">
                <h4>Anshu Sarkar</h4>
                <p>XYZ</p>
                <div className="values-list">
                  <button className="icon" href={"/"}>
                    <GrFacebookOption />
                  </button>
                  <button className="icon" href={"/"}>
                    <FaLinkedinIn />
                  </button>
                  <button className="icon" href={"/"}>
                    <FaTwitter />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="teamdetailcardinfo">
            <div className="teamdetailaboutpic">
              <img className="bannerbg" src={teammember} alt="images" />
            </div>
            <div className="teamdetailcard">
              <div className="teamdetailabout">
                <h4>Anjushree Sen</h4>
                <p>Web Designer</p>
                <div className="values-list">
                  <button className="icon" href={"/"}>
                    <GrFacebookOption />
                  </button>
                  <button className="icon" href={"/"}>
                    <FaLinkedinIn />
                  </button>
                  <button className="icon" href={"/"}>
                    <FaTwitter />
                  </button>
                </div>
              </div>
            </div>
          </div>


          <div className="teamdetailcardinfo">
            <div className="teamdetailaboutpic">
              <img className="bannerbg" src={teammember} alt="images" />
            </div>
            <div className="teamdetailcard">
              <div className="teamdetailabout">
                <h4>Debadyuti Paul</h4>
                <p>Graphics Designer</p>
                <div className="values-list">
                  <button className="icon" href={"/"}>
                    <GrFacebookOption />
                  </button>
                  <button className="icon" href={"/"}>
                    <FaLinkedinIn />
                  </button>
                  <button className="icon" href={"/"}>
                    <FaTwitter />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="teamdetailcardinfo">
            <div className="teamdetailaboutpic">
              <img className="bannerbg" src={teammember} alt="images" />
            </div>
            <div className="teamdetailcard">
              <div className="teamdetailabout">
                <h4>Raunak Sarkar</h4>
                <p>Data Collector</p>
                <div className="values-list">
                  <button className="icon" href={"/"}>
                    <GrFacebookOption />
                  </button>
                  <button className="icon" href={"/"}>
                    <FaLinkedinIn />
                  </button>
                  <button className="icon" href={"/"}>
                    <FaTwitter />
                  </button>
                </div>
              </div>
            </div>
          </div>



          <div className="teamdetailcardinfo">
            <div className="teamdetailaboutpic">
              <img className="bannerbg" src={teammember} alt="images" />
            </div>
            <div className="teamdetailcard">
              <div className="teamdetailabout">
                <h4>Aritra Samanta</h4>
                <p>XYZ</p>
                <div className="values-list">
                  <button className="icon" href={"/"}>
                    <GrFacebookOption />
                  </button>
                  <button className="icon" href={"/"}>
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