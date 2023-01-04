import { SignUpValuesProps } from '@/pages/Register/types';
import { signInValuesProps } from '@/pages/SignIn/types';
import AXIOS_CLIENT from './config/axiosClient';

const RESOURCE_NAME = 'auth';

const authApi = {
    signUp: (user: SignUpValuesProps) => {
        const URL = RESOURCE_NAME + '/signup';
        return AXIOS_CLIENT.post(URL, user);
    },
    signIn: (user: signInValuesProps) => {
        const URL = RESOURCE_NAME + '/signin';
        return AXIOS_CLIENT.post(URL, user);
    },
};

export default authApi;
