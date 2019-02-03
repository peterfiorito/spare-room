import axios from 'axios';

const Instance = axios.create({
  baseURL: 'http://localhost:8081',
  timeout: 1000,
  headers: {'X-Custom-Header': 'application/json'}
});

export default class teamRequestService {
  getEvents () {
    return Instance.get('/events');
  }
  getVenues () {
    return Instance.get('/venues');
  }
  getEventDetails (id) {
    return Instance.post('/eventId/', {id: id});
  }
  getMapsKey () {
    return Instance.get('/key');
  }
}
