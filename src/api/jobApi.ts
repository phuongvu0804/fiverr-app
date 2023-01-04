import { BookingInfo } from '@/assets/models/BookingInfor';
import AXIOS_CLIENT from './config/axiosClient';

const RESOURCE_NAME = 'cong-viec';

const jobApi = {
    getAllJobs: () => {
        return AXIOS_CLIENT.get(RESOURCE_NAME);
    },

    getJobsByName: (searchedValue: string) => {
        const URL = `${RESOURCE_NAME}/lay-danh-sach-cong-viec-theo-ten/${searchedValue}`;
        return AXIOS_CLIENT.get(URL);
    },
    getJobCategoryList: () => {
        const URL = RESOURCE_NAME + '/lay-menu-loai-cong-viec';
        return AXIOS_CLIENT.get(URL);
    },
    getJobDetails: (id: string) => {
        const URL = `${RESOURCE_NAME}/lay-cong-viec-chi-tiet/${id}`;
        return AXIOS_CLIENT.get(URL);
    },
    bookService: (service: any) => {
        return AXIOS_CLIENT.post('thue-cong-viec', service);
    },
};

export default jobApi;
