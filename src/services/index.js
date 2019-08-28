import axios from 'axios';

const api = axios.create({ baseURL: 'https://api.github.com/repos/' });
// const api = axios.create({ baseURL: 'https://api.github.com/users/Wallacehayabusa/repos' });

export default api;