export default class WeatherService {

  getCities = async (cityName) => {
    const res = await fetch(`/api/location/search/?query=${cityName}`);

    if (!res.ok) {
      throw new Error('Could not fetch');
    }
    return await res.json();
  } 
}