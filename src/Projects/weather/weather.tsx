import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./weather.scss";
import { RootState, AppDispatch } from "./store";
import { fetchWeather } from "./weather_slice";
import { cityMap } from "./cityMap";
import sun from "../../assets/weather/sun.png";
import clouds_sun from "../../assets/weather/clouds_sun.png";
import clouds from "../../assets/weather/clouds.png";

function Weather() {
  const dispatch: AppDispatch = useDispatch();

  const { data, loading } = useSelector((state: RootState) => state.weather);
  const temperature = data?.current.temperature_2m;
  const cloudiness: number = data?.current.cloud_cover || 0;

  let imageWeather = clouds;

  if (cloudiness >= 25 && cloudiness <= 75) {
    imageWeather = clouds_sun;
  } else if (cloudiness < 25) {
    imageWeather = sun;
  }

  const [cityName, setCityName] = useState("Lviv");

  useEffect(() => {
    dispatch(fetchWeather(cityName));
  }, [dispatch, cityName]);

  const handleCityName = (value: string) => {
    setCityName(value);
  };

  return (
    <div className="main">
      <div className="container">
        <div className="bodyBox">
          <div className="selectBox">
            <h1>Weather for today</h1>
            <select
              className="citySelect"
              onChange={(event) => handleCityName(event.target.value)}
            >
              {Object.keys(cityMap).map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </select>
          </div>

          <div className="weatherInfoBox">
            {loading ? (
              <h2 className="load">LOADING...</h2>
            ) : (
              <div className="weatherInfo">
                <h2>{temperature}°C</h2>
                <img src={imageWeather} alt="sun" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
