import axiosClient from './config/axiosClient';

const RESOURCE_NAME = 'cong-viec';

const jobApi = {
    getAllJobs: () => {
        return axiosClient.get(RESOURCE_NAME);
    },

    getJobsByName: (searchedValue: string) => {
        const url = `${RESOURCE_NAME}/lay-danh-sach-cong-viec-theo-ten/${searchedValue}`;
        return axiosClient.get(url);
    },

    getJobCategoryList: () => {
        const url = RESOURCE_NAME + '/lay-menu-loai-cong-viec';
        return axiosClient.get(url);
    },
};

export default jobApi;
