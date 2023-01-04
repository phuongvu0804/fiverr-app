import * as yup from 'yup';
import MESSAGE from './messages';
import PATTERN from './pattern';

//Sign in
const SIGN_IN_SCHEMA = yup.object().shape({
    email: yup.string().required(MESSAGE.required).email(MESSAGE.email),
    password: yup.string().required(MESSAGE.required).matches(PATTERN.password, MESSAGE.password),
});

//Sign up
const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));

const SIGN_UP_SCHEMA = yup.object().shape({
    name: yup.string().required(MESSAGE.required).matches(PATTERN.name, MESSAGE.string),
    email: yup.string().required(MESSAGE.required).email(MESSAGE.email),
    password: yup.string().required(MESSAGE.required).matches(PATTERN.password, MESSAGE.password),
    phone: yup.string().required(MESSAGE.required).matches(PATTERN.phone, MESSAGE.phone),
    birthday: yup.date().required(MESSAGE.required).nullable().max(yesterday, MESSAGE.birthday.max),
    gender: yup.boolean().nullable().typeError(MESSAGE.birthday.invalid).required(MESSAGE.required),
});

export { SIGN_UP_SCHEMA, SIGN_IN_SCHEMA };
