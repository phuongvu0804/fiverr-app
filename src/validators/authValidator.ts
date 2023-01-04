import * as yup from 'yup';
import message from './messages';
import pattern from './pattern';

//Sign in
const signInSchema = yup.object().shape({
    email: yup.string().required(message.required).email(message.email),
    password: yup.string().required(message.required).matches(pattern.password, message.password),
});

//Sign up
const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));

const signUpSchema = yup.object().shape({
    name: yup.string().required(message.required).matches(pattern.name, message.string),
    email: yup.string().required(message.required).email(message.email),
    password: yup.string().required(message.required).matches(pattern.password, message.password),
    phone: yup.string().required(message.required).matches(pattern.phone, message.phone),
    birthday: yup.date().required(message.required).nullable().max(yesterday, message.birthday.max),
    gender: yup.boolean().nullable().typeError(message.birthday.invalid).required(message.required),
});

export { signUpSchema, signInSchema };
