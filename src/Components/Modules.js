import React from "react";
import Navbar from "./Navbar";
import icon1 from "../Icons/python_icon.svg";
import icon2 from "../Icons/quiz_icon.svg";
import icon3 from "../Icons/assignment_icon.svg";
import icon4 from "../Icons/clock_icon.svg";
import icon5 from "../Icons/calendar_icon.svg";
import icon6 from "../Icons/videocam_icon.svg";
import icon7 from "../Icons/document_icon.svg";

import "./Modules.css";
import { useState } from "react";
const Modules = () => {
  const [ispythonShown, setIsPythonShown] = useState(false);
  const [isquizShown, setIsQuizShown] = useState(false);
  const [isassignmentShown, setIsAssignmentShown] = useState(false);

  const handleClick = () => {
    setIsPythonShown(!ispythonShown);
    setIsQuizShown(false);
  };
  const handleQuizClick = () => {
    setIsPythonShown(false);
    setIsQuizShown(!isquizShown);
    setIsAssignmentShown(false);
  };
  const handleAssignmentClick = () => {
    setIsQuizShown(false);
    setIsPythonShown(false);
    setIsAssignmentShown(!isassignmentShown);
  };
  return (
    <div>
      <Navbar />
      <div className="module_types">
        <ul>
          <li
            className={`list ${ispythonShown ? `list-active` : ``}`}
            onClick={handleClick}
          >
            <img src={icon1} alt="" />
            <p>
              <b>Python loops</b>
            </p>
          </li>
          <div
            className={`python_clicked ${
              ispythonShown ? `python_clicked-active` : ``
            }`}
          >
            <h1>
              Python Loops <br />
            </h1>
            <br />
            <p>15 Decemeber, Wednesday,7.30 PM</p>
            <div className="python_contents">
              <ul>
                <li>
                  {" "}
                  <h3>Session Plan</h3>{" "}
                </li>
                <li>
                  <img src={icon1} alt="" />
                  <h3>Pre-Watch Videos</h3>
                </li>
                <li>
                  <img src={icon6} alt="" />
                  <h3>Session Recording</h3>
                </li>
                <li>
                  <img src={icon7} alt="" />
                  <h3>References</h3>
                </li>
              </ul>
            </div>

            <div className="python_container">
              <div className="container_items">
                <h2>Session Plan</h2>
                <p>Live session is about to start. Please stay tuned</p>
                <div className="container_btn">
                  <button>Join Live Session</button>
                </div>
                <h3>Sub Topics</h3>
                <p>1-Sorting and Indexing Dataframe</p>
                <br />
                <p>2- Filtering Dataframe</p>
                <br />
                <p>3- Usage of Ioc and Iloc functions</p>
                <br />
                <br />
                <h3>Session Details</h3>
              </div>
            </div>
          </div>

          <li
            className={`list ${isquizShown ? `list-active` : ``}`}
            onClick={handleQuizClick}
          >
            <img src={icon2} alt="" />
            <p>
              <b>Quiz 1:Data Types</b>
            </p>
          </li>
          <div
            className={`quiz_clicked ${
              isquizShown ? `quiz_clicked-active` : ``
            }`}
          >
            <h1>
              Quiz-1 : Data Types <br />
            </h1>
            <br />
            <p>16 Decemeber 2021, Wednesday</p>
            <br />
            <h3>Quiz Details</h3>

            <div className="quiz_container">
              <div className="quiz_details">
                <div className="quiz_score">
                  <div className="problems">
                    <b>
                      <h2>10</h2>
                    </b>{" "}
                    <br />
                    <p>Questions</p>
                  </div>
                  <div className="problems">
                    <b>
                      <h2>-</h2>
                    </b>{" "}
                    <br />
                    <p>Duration</p>
                  </div>
                  <div className="score">
                    <b>
                      <h2>125</h2>
                    </b>
                    <br />
                    <p>Total Score</p>
                  </div>
                </div>

                <div className="quiz_timetable">
                  <div className="quiz_start">
                    <h3>Start</h3>
                    <div className="calender">
                      <img src={icon5} alt="not found" />{" "}
                      <p>20 september 2021</p>
                    </div>
                    <div className="clock">
                      <img src={icon4} alt="not found" /> <p>07:30 PM</p>
                    </div>
                  </div>
                </div>

                <div className="assignment_due">
                  <h3>Due</h3>
                  <div className="calender">
                    <img src={icon5} alt="not found" /> <p>19 December 2021</p>
                  </div>
                  <div className="clock">
                    <img src={icon4} alt="not found" /> <p>11:59 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <li
            className={`list ${isassignmentShown ? `list-active` : ``}`}
            onClick={handleAssignmentClick}
          >
            <img src={icon3} alt="" />
            <p>
              <b>
                Assignment1:
                <br />
                Operators|Loops
              </b>
            </p>
          </li>

          <div
            className={`assignment_clicked ${
              isassignmentShown ? `assignment_clicked-active` : ``
            }`}
          >
            <div className="assignment_desc">
              <div className="heading_left">
                <h1>
                  Assignment-1 : Operators|Loops
                  <br />
                </h1>
                <p>20 Decemeber,2021</p>
              </div>
              <div className="heading_right">
                <div className="problems">
                  <b>
                    <h2>3</h2>
                  </b>{" "}
                  <br />
                  <p>Problems</p>
                </div>
                <div className="score">
                  <b>
                    <h2>100</h2>
                  </b>
                  <br />
                  <p>Total Score</p>
                </div>
              </div>
            </div>
            <h3 className="paragraph">Assignment Details</h3>

            <div className="assignment_details_container">
              <div className="assignment_details">
                <div className="assignment_score">
                  <div className="problems">
                    <b>
                      <h2>3</h2>
                    </b>{" "}
                    <br />
                    <p>Problems</p>
                  </div>
                  <div className="score">
                    <b>
                      <h2>100</h2>
                    </b>
                    <br />
                    <p>Total Score</p>
                  </div>
                </div>

                <div className="assignment_timetable">
                  <div className="assignment_start">
                    <h3>Start</h3>
                    <div className="calender">
                      <img src={icon5} alt="not found" />{" "}
                      <p>20 september 2021</p>
                    </div>
                    <div className="clock">
                      <img src={icon4} alt="not found" /> <p>07:30 PM</p>
                    </div>
                  </div>
                  <div className="assignment_due">
                    <h3>Due</h3>
                    <div className="calender">
                      <img src={icon5} alt="not found" />{" "}
                      <p>26 september 2021</p>
                    </div>
                    <div className="clock">
                      <img src={icon4} alt="not found" /> <p>11:59 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Modules;
