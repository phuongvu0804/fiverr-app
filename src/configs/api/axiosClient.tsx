import { LOCAL_STORAGE_USER_NAME } from '@/constants/constants';
import axios from 'axios';
import API_CONFIG from './apiConfig';

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

let userToken = localStorage.getItem(LOCAL_STORAGE_USER_NAME);
if (userToken) {
    userToken = JSON.parse(userToken).token;
}

//Set config defaults by creating the instance
const AXIOS_CLIENT = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

//Add request interceptor
AXIOS_CLIENT.interceptors.request.use(
    (config) => {
        config.headers!.TokenCybersoft = API_CONFIG.tokenCybersoft;
        config.headers!.token = userToken;

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

export default AXIOS_CLIENT;
