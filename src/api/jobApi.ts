import axiosClient from './config/axiosClient';

const RESOURCE_NAME = 'cong-viec';

const jobApi = {
    getJobByName: () => {
        return axiosClient.get(RESOURCE_NAME);
    },

    getJobCategoryList: () => {
        const url = RESOURCE_NAME + '/lay-menu-loai-cong-viec';
        return axiosClient.get(url);
    },
};

export default jobApi;
