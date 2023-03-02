import { BookingInfo } from '@/assets/models/BookingInfor';
import AXIOS_CLIENT from '../configs/api/axiosClient';

const RESOURCE_NAME = 'thue-cong-viec';

const bookingApi = {
    bookService: (bookingInfo = new BookingInfo()) => {
        return AXIOS_CLIENT.post(RESOURCE_NAME, bookingInfo);
    },
    getBookingList: () => {
        const URL = `${RESOURCE_NAME}/lay-danh-sach-da-thue`;
        return AXIOS_CLIENT.get(URL);
    },
    deleteBooking: (id: any) => {
        const URL = `${RESOURCE_NAME}/${id}`;
        return AXIOS_CLIENT.delete(URL);
    },
};

export default bookingApi;
