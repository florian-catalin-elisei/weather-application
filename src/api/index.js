import axios from "axios";

const weatherApi = "https://api.openweathermap.org/data/2.5";
const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;

const instance = axios.create({
  baseURL: weatherApi,
  timeout: 5000,
  params: {
    appid: weatherApiKey,
    units: "metric",
  },
});

const getWeather = async (city) => {
  try {
    const response = await instance.get("/weather", {
      params: {
        q: city,
      },
    });
    const { data } = response;

    return data;
  } catch (error) {
    throw new Error(`Unable to get weather: ${error.message}`);
  }
};

export default getWeather;
