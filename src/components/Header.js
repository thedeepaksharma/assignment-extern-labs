import cloud from "../images/cloud.png";
const Hearder = () => {
  return (
    <div className="container header-section">
      <header>
        <img src={cloud} alt="sun" />
        <p>
          43
          <sup>
            &#176;C | <span>&#176;F</span>
          </sup>
        </p>
        <div className="hearder-info">
          <a>precipitation : 0%</a>
          <a>humadity : 16%</a>
          <a>wind : 8 km/h</a>
        </div>
      </header>
    </div>
  );
};

export default Hearder;
