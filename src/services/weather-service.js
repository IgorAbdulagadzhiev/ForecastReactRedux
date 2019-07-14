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
}