import React from "react";

import "./Scholarships.css";

export default function Scholarship() {
  return (
    <>
      <div className="course">
        <div className="cat-sel">
          <select className="inputsize">
            <option>Select Study level</option>
            <option>Postgraduate</option>
            <option>University Preparation</option>
            <option>Undergraducate</option>
            <option>vocational(VET)</option>
            <option>English Language</option>
            <option>School</option>
          </select>
        </div>

        <div className="cat-sel">
          <select className="inputsize">
            <option>Select a study destination</option>
            <option>Australia</option>
            <option>Canada</option>
            <option>ireland</option>
            <option>NewZealand</option>
            <option>United Kingdom</option>
            <option>United States</option>
          </select>
        </div>
        <div>
          <button type="button" className="Scholarshipbutton">
            Search
          </button>
        </div>
      </div>
    </>
  );
}
