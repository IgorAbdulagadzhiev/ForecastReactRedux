export default class WeatherService {

  getCities = async (cityName) => {
    const res = await fetch(`/api/location/search/?query=${cityName}`);

    if (!res.ok) {
      throw new Error('Could not fetch');
    }
    const data = await res.json();
    return data.map((item) => {
      return {
        ...item,
        disabled: false
      }
    });
  }

  getWeather = async (woeid) => {
    const res = await fetch(`/api/location/${woeid}/`);

    if (!res.ok) {
      throw new Error('Could not fetch');
    }
    
    return await res.json();
  }
}