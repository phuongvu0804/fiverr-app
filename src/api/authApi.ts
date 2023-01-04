import { SignUpValuesProps } from '@/pages/Register/types';
import { signInValuesProps } from '@/pages/SignIn/types';
import axiosClient from './config/axiosClient';

const RESOURCE_NAME = 'auth';

const authApi = {
    signUp: (user: SignUpValuesProps) => {
        const url = RESOURCE_NAME + '/signup';
        return axiosClient.post(url, user);
    },
    signIn: (user: signInValuesProps) => {
        const url = RESOURCE_NAME + '/signin';
        return axiosClient.post(url, user);
    },
};

export default authApi;
