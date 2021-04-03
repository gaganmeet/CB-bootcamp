import React from "react";
import jims from "../images//jims1.png";
import Card from "./Cards";
import bvimr from "../images/bvimr.jpg";

function Education() {
  const customimg = "w-1/4";

  return (
    <div className="max-h-full">
      <h1 className="lg:text-5xl md:text-3xl sm:text-xl pt-16 text-center text-indigo-800">
        Education
      </h1>
      <div className="flex flex-col justify-center items-center">
        <Card
          title1="Masters in Computer Application"
          title2="Jagan Institute of Management Studies"
          img={jims}
          imgprop={customimg}
        />

        <Card
          title1="Bachelors in Computer Application"
          title2="Bharati Vidyapeeth Institute of Management & Research"
          img={bvimr}
          imgprop={customimg}
        />
      </div>
    </div>
  );
}

export default Education;
