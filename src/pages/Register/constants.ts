import moment from 'moment';
import { SignUpValuesProps } from './types';

export const initialValues: SignUpValuesProps = {
    name: '',
    email: '',
    password: '',
    phone: '',
    birthday: '',
    gender: null,
};

export const TEXT_INPUT_LIST = ['name', 'email', 'phone', 'password'];
