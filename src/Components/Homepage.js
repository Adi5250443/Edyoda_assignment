import React from 'react'
import Navbar from './Navbar'
import './Homepage.css';
import icon1 from "../Icons/DataAnalysis_icon.png";
import icon2 from "../Icons/DataWrangling_icon.png";
const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <div className="container1">
        <div className="container1_items">
          <img src={icon1} alt="" />
          <div className="exam_container">
          <h2>Data Analysis <br /> Certification</h2>
          <div className="exam_structure">
            <h3>Exam Structure</h3>
            <h4>Round 1</h4> <br />
            <h4>Round 2</h4> <br />
          </div>
          </div>
        </div>
      </div>
     <div className="heading">
      <h1>Continue Learning</h1>
     </div>
     <div className="containers">
      <div className="container2">
    <div className="container2_items">
      <img src={icon2} alt="" />
      <h2>Data Wrangling and <br /> Visualization</h2>
    </div>
    <p>Live Sessions :</p>
    <p>Assignments :</p>
    <p>MCQ Quiz :</p>

      </div>
      <div className="container3">
      <h3>Progress Overview</h3>
      <div className="boxex">
      <div className="box"><h1>%</h1></div>
      <div className="box"><h1>%</h1></div>
      </div>
      </div>
     </div>
    </div>
  )
}

export default Homepage
