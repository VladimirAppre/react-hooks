export default class FetchService {
  _baseUrl = 'https://swapi.dev/api/';

  getPlanet = async (id) => {
    const response = await fetch(`${this._baseUrl}planets/${id}/`);
    const result = await response.json();
    return result;
  };

  getPlanetName = async (id) => {
    const response = await this.getPlanet(id);
    return response.name;
  };
};

