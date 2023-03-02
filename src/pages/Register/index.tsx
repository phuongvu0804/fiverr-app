import React, { useState } from 'react';
import moment, { Moment } from 'moment';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

//Material UI
import { FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import LoadingButton from '@mui/lab/LoadingButton';

//Components
import AuthenDialog from '../../components/Layout/AuthenLayout/components/AuthenDialog';

//Others
import { INITIAL_VALUES, TEXT_INPUT_LIST } from './constants';
import { SIGN_UP_SCHEMA } from '@/validators/authValidator';
import authApi from '@/api/authApi';
import useAuth from '@/hooks/useAuth';
import {
    INIT_DIALOG_VALUE,
    NotiDialogProps,
    NotiTypes,
} from '@/components/Layout/AuthenLayout/components/AuthenDialog/constants';
import { renderTextInputs } from '@/components/Layout/AuthenLayout/constants';
import { callApi } from '@/configs/api/errorHandling';
import { LogErrorProps, UserDataProps, UserDataTokenProps } from '@/constants/intefaces';
import { actGetUserFail, actGetUserSuccess } from '@/store/actions/user';
import { useAppDispatch } from '@/hooks';

const Register = () => {
    const auth = useAuth();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [gender, setGender] = useState('');
    const [date, setDate] = useState<Moment | null>(null);
    const [loading, setLoading] = useState(false);
    const [openDialog, setOpenDialog] = useState<boolean>(false);
    const [dialogContent, setDialogContent] = useState<NotiDialogProps>(INIT_DIALOG_VALUE);

    const handleAutoCloseSuccessNoti = () => {
        //Close Dialog
        setOpenDialog(false);

        //Navigate to home
        navigate('/');
    };

    const { handleSubmit, values, errors, touched, handleChange, setFieldValue, handleBlur } = useFormik({
        initialValues: INITIAL_VALUES,
        validationSchema: SIGN_UP_SCHEMA,
        onSubmit: (values) => {
            setLoading(true);

            callApi(
                authApi.signUp(values),
                (response: UserDataProps) => {
                    setOpenDialog(true);

                    setDialogContent({
                        ...INIT_DIALOG_VALUE,
                        content: `Congratulations ${values.name}! You have successfully created an account`,
                    });

                    //Close noti automatically after 5s
                    setTimeout(() => handleAutoCloseSuccessNoti(), 5000);

                    //Sign in user automatically
                    callApi(
                        authApi.signIn(values),
                        (response: UserDataTokenProps) => {
                            //Dispatch user info (not token) to redux store
                            dispatch(actGetUserSuccess(response.user));
                            //Save user data to local storage
                            auth.signin(response);

                            navigate('/');
                        },
                        (error: LogErrorProps) => {
                            setOpenDialog(true);
                            setDialogContent({
                                type: NotiTypes.ERROR,
                                title: 'Error',
                                content:
                                    error.customedError.message ||
                                    'Oops! Something went wrong. Please try again later.',
                            });
                            dispatch(actGetUserFail(error));
                        },
                    );
                },
                (error: LogErrorProps) => {
                    setOpenDialog(true);
                    setDialogContent({
                        type: NotiTypes.ERROR,
                        title: 'Error',
                        content: error.customedError.message || 'Oops! Something went wrong. Please try again later.',
                    });
                    dispatch(actGetUserFail(error));
                },
                () => setLoading(false),
            );
        },
    });

    const handleDatePickerValue = (newValue: any) => {
        const BIRTHDAY = moment(newValue);
        setDate(newValue);
        setFieldValue('birthday', BIRTHDAY);
    };

    const handleGenderInput = (e: any) => {
        const GENDER_VALUE = e.target.value === 'true';
        setGender(e.target.value as string);
        return setFieldValue('gender', GENDER_VALUE);
    };

    return (
        <>
            <form action="" className="authen__form" onSubmit={handleSubmit}>
                {renderTextInputs(TEXT_INPUT_LIST, values, errors, touched, handleChange, handleBlur)}
                <FormControl
                    className={
                        errors.birthday && touched.birthday ? 'authen__input-group error' : 'authen__input-group'
                    }
                >
                    <DesktopDatePicker
                        value={date}
                        inputFormat="DD/MM/YYYY"
                        onChange={handleDatePickerValue}
                        renderInput={(params) => (
                            <TextField
                                name="birthday"
                                onBlur={handleBlur}
                                error={errors.birthday && touched.birthday ? true : false}
                                {...params}
                                color="success"
                            />
                        )}
                    />
                    {errors.birthday && touched.birthday && <FormHelperText error>{errors.birthday}</FormHelperText>}
                </FormControl>

                <FormControl className="authen__input-group">
                    <InputLabel id="gender" className="authen-input-group__name">
                        Gender
                    </InputLabel>

                    <Select
                        error={errors.gender && touched.gender ? true : false}
                        labelId="gender"
                        className="authen-input-group__input"
                        label="gender"
                        value={gender}
                        onChange={handleGenderInput}
                        onBlur={handleBlur}
                        color="success"
                    >
                        <MenuItem value="true">Female</MenuItem>
                        <MenuItem value="false">Male</MenuItem>
                    </Select>
                    {errors.gender && touched.gender && <FormHelperText error>{errors.gender}</FormHelperText>}
                </FormControl>

                <LoadingButton loading={loading} type="submit" className="contained-primary-btn">
                    Continue
                </LoadingButton>
            </form>
            <AuthenDialog open={openDialog} setOpen={setOpenDialog} dialogContent={dialogContent} />
        </>
    );
};

export default Register;
