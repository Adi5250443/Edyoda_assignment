import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import icon1 from "../Icons/homepage_icon.png";
import icon2 from "../Icons/module_icon.png";
import icon3 from "../Icons/instructor_icon.png";
import icon4 from "../Icons/arrow_down.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate("/home");
  };
  const handleClickModules = () => {
    navigate("/module");
  };
  const handleClickInstructor = () => {
    navigate("/instructor");
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (name) => {
    setSelectedOption(name);
  };

  return (
    <div>
      <div className="header">
        <h1>
          <b>EDYODA</b>{" "}
        </h1>
        <h3>Hi test learner!</h3>
      </div>
      <div className={`blue_box ${isOpen ? `blue_box-active` : ``}`}>
        <div className="box_items">
          <div className="dropdown">
            <div className="dropdown_select">
              <h2>{selectedOption}</h2>
              <img
                src={icon4}
                alt="not found"
                className="dropdown_icon"
                onClick={handleToggle}
              />
            </div>

            <div
              className={`dropdown_list ${
                isOpen ? `dropdown_list-active` : ``
              }`}
            >
              <h3>Select Program</h3>
              <ul>
                <li onClick={() => handleOptionChange("ECRD")}>
                  <b>ECRD</b>
                </li>
                <li onClick={() => handleOptionChange("FSR22222")}>
                  <b>FSR22222</b>
                </li>
                <li onClick={() => handleOptionChange("DS261121")}>
                  <b>DS261121</b>
                </li>
                <li onClick={() => handleOptionChange("DS031221")}>
                  <b>DS031221</b>
                </li>
              </ul>
            </div>
          </div>
          <h2>Data Scientist Program</h2>
        </div>
      </div>
      <div className="side_bar">
        <div className="home" onClick={handleClickHome}>
          <div className="homepage_logo">
            <img src={icon1} alt="not found" />
            <h3>Home</h3>
          </div>
        </div>
        <div className="modules" onClick={handleClickModules}>
          <div className="module_logo">
            <img src={icon2} alt="not found" />
            <h3>Modules</h3>
          </div>
        </div>
        <div className="instructor" onClick={handleClickInstructor}>
          <div className="instructor_icon">
            <img src={icon3} alt="not found" />
            <h3>Instructor</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
