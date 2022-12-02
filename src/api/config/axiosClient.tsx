import axios from 'axios';
import apiConfig from './apiConfig';

interface UserType {
    address: string;
    birthday: string;
    deleteAt: boolean;
    email: string;
    gender: false;
    name: string;
    password: string;
    phone: string;
    tickets: string[];
    token: string;
    type: string;
    __v: number;
    _id: string;
}

//Set config defaults by creating the instance
const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

//Add request interceptor
axiosClient.interceptors.request.use(
    (config) => {
        config.headers!.tokenByClass = apiConfig.authToken;

        let user = localStorage.getItem('user');
        if (user) {
            let userInfo: UserType = {
                address: '',
                birthday: '',
                deleteAt: false,
                email: '',
                gender: false,
                name: '',
                password: '',
                phone: '',
                tickets: [],
                token: '',
                type: '',
                __v: 0,
                _id: '',
            };

            userInfo = JSON.parse(user);

            config.headers!.token = `${userInfo.token}`;
        }

        return config;
    },
    (error) => Promise.reject(error),
);

export default axiosClient;
