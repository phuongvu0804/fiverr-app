import images from '@/assets/images';
import { MUIAlertProps, UserDataProps } from '@/constants/intefaces';
import { LearnCardDataProps } from './types';

export const LEARN_CARD_DATA: LearnCardDataProps = {
    logo: images.learnLogo,
    illustration: images.learnEnroll,
    title: 'Earn badges and stand out',
    desc: 'Boost your sales, by boosting your expertise.',
};

export const DATA_INIT_STATE: UserDataProps = {
    avatar: '',
    birthday: '',
    bookingJob: [],
    certification: [],
    email: '',
    gender: false,
    id: -1,
    name: '',
    password: '',
    phone: '',
    role: '',
    skill: [],
};

export const SUCCESS_DELETE_ALERT: MUIAlertProps = {
    state: true,
    type: 'success',
    title: 'Success',
    content: 'You have successfully deleted your booking!',
};

export const FAIL_DELETE_ALERT: MUIAlertProps = {
    state: true,
    type: 'error',
    title: 'Error',
    content: 'Oops! Something went wrong, you cannot delete your booking at this time. Please try again later!',
};
