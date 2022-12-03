import axiosClient from './config/axiosClient';

const RESOURCE_NAME = 'cong-viec';

const jobApi = {
    getJobByName: () => {
        return axiosClient.get(RESOURCE_NAME);
    },
};

export default jobApi;
