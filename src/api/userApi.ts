import AXIOS_CLIENT from './config/axiosClient';

const RESOURCE_NAME = 'users';

const userApi = {
    getUserInfo: (userId: any) => {
        const URL = `${RESOURCE_NAME}/${userId}`;

        return AXIOS_CLIENT.get(URL);
    },
};

export default userApi;
