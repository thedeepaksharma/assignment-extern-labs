const Singleday = (props) => {
  const { day, image, tempC, tempF } = props;
  return (
    <div className="day-info">
      <p>{day}</p>
      <img src={image} alt={image} />
      <div className="temp-info">
        <p>
          {tempC}
          <sup>&#176;</sup>
        </p>
        <p className="tempF">
          {tempF}
          <sup>&#176;</sup>
        </p>
      </div>
    </div>
  );
};

export default Singleday;
