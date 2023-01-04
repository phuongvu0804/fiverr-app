import React, { useState } from 'react';
import moment, { Moment } from 'moment';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

//Material UI
import { Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import LoadingButton from '@mui/lab/LoadingButton';

//Components
import AuthenDialog from '../../components/Layout/AuthenLayout/components/AuthenDialog';

//Others
import { initialValues, TEXT_INPUT_LIST } from './constants';
import { signUpSchema } from '@/validators/authValidator';
import authApi from '@/api/authApi';
import { SignUpValuesProps } from './types';
import useAuth from '@/hooks/useAuth';
import {
    initDialogValue,
    NotiDialogProps,
    NotiTypes,
} from '@/components/Layout/AuthenLayout/components/AuthenDialog/constants';
import { renderTextInputs } from '@/components/Layout/AuthenLayout/constants';

const Register = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const [gender, setGender] = useState('');
    const [date, setDate] = useState<Moment | null>(null);
    const [loading, setLoading] = useState(false);
    const [openDialog, setOpenDialog] = useState<boolean>(false);
    const [dialogContent, setDialogContent] = useState<NotiDialogProps>(initDialogValue);

    const handleAutoCloseSuccessNoti = () => {
        //Close Dialog
        setOpenDialog(false);

        //Navigate to home
        navigate('/');
    };

    const { handleSubmit, values, errors, touched, handleChange, setFieldValue, handleBlur } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values) => {
            setLoading(true);

            const handleSignUp = async (formValues: SignUpValuesProps) => {
                try {
                    await authApi.signUp(formValues);

                    //Save user data to local storage
                    auth.signin(formValues);

                    setOpenDialog(true);

                    setDialogContent({
                        ...initDialogValue,
                        content: `Congratulations ${formValues.name}! You have successfully created an account`,
                    });

                    //Close noti automatically after 5s
                    setTimeout(() => handleAutoCloseSuccessNoti(), 5000);
                } catch (error: any) {
                    setOpenDialog(true);
                    setDialogContent({
                        type: NotiTypes.ERROR,
                        title: 'Error',
                        content: error.response.data.content || 'Oops! Something went wrong. Please try again later.',
                    });
                } finally {
                    setLoading(false);
                }
            };

            handleSignUp(values);
        },
    });

    const handleDatePickerValue = (newValue: any) => {
        const birthday = moment(newValue);
        setDate(newValue);
        setFieldValue('birthday', birthday);
    };

    const handleGenderInput = (e: any) => {
        const genderValue = e.target.value === 'true';
        setGender(e.target.value as string);
        return setFieldValue('gender', genderValue);
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
