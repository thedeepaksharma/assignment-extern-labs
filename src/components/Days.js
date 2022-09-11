import { useState } from "react";
import cloud from "../images/cloud.png";
import sun from "../images/sun.png";
import fog from "../images/fog.png";
import Singleday from "./Singleday";
const Days = () => {
  const [dailyTemp] = useState([
    {
      day: "Tue",
      image: cloud,
      tempC: 43,
      tempF: 30,
    },
    {
      day: "Wed",
      image: fog,
      tempC: 43,
      tempF: 30,
    },
    {
      day: "Thu",
      image: fog,
      tempC: 43,
      tempF: 30,
    },
    {
      day: "Fri",
      image: sun,
      tempC: 43,
      tempF: 30,
    },
    {
      day: "Sat",
      image: sun,
      tempC: 43,
      tempF: 30,
    },
    {
      day: "Sun",
      image: fog,
      tempC: 43,
      tempF: 30,
    },
    {
      day: "Mon",
      image: sun,
      tempC: 43,
      tempF: 30,
    },
    {
      day: "Tue",
      image: sun,
      tempC: 43,
      tempF: 30,
    },
  ]);
  return (
    <div className="container days-section">
      <div className="days">
        {dailyTemp.map((element, index) => {
          return <Singleday key={index} {...element} />;
        })}
      </div>
      <hr />
    </div>
  );
};

export default Days;
