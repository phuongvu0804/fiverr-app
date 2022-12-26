import axiosClient from './config/axiosClient';

const RESOURCE_NAME = 'binh-luan';

const reviewApi = {
    getReviewsbyJob: (id: string) => {
        const url = `${RESOURCE_NAME}/lay-binh-luan-theo-cong-viec/${id}`;
        return axiosClient.get(url);
    },
};

export default reviewApi;
