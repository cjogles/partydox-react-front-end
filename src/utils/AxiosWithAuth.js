import axios from 'axios';

const AxiosWithAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL: 'https://partydox.herokuapp.com',
        headers: {
            Authorization: token
        }
    });
};

export default AxiosWithAuth;
