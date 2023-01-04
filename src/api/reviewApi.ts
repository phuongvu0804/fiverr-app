import AXIOS_CLIENT from './config/axiosClient';

const RESOURCE_NAME = 'binh-luan';

const reviewApi = {
    getReviewsbyJob: (id: string) => {
        const URL = `${RESOURCE_NAME}/lay-binh-luan-theo-cong-viec/${id}`;
        return AXIOS_CLIENT.get(URL);
    },
};

export default reviewApi;
