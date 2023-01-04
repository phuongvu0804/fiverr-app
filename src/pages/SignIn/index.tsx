import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

//Components
import AuthenDialog from '@/components/Layout/AuthenLayout/components/AuthenDialog';
import {
    initDialogValue,
    NotiDialogProps,
    NotiTypes,
} from '@/components/Layout/AuthenLayout/components/AuthenDialog/constants';

//Material UI
import { FormControl, FormHelperText, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';

//Others
import authApi from '@/api/authApi';
import useAuth from '@/hooks/useAuth';
import { signInSchema } from '@/validators/authValidator';
import { formInputList, initialValues } from './constants';
import { signInValuesProps } from './types';
import { renderTextInputs } from '@/components/Layout/AuthenLayout/constants';

const SignIn = () => {
    const navigate = useNavigate();
    const auth = useAuth();
    const [loading, setLoading] = useState(false);
    const [openDialog, setOpenDialog] = useState<boolean>(false);
    const [dialogContent, setDialogContent] = useState<NotiDialogProps>(initDialogValue);

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
        initialValues: initialValues,
        validationSchema: signInSchema,
        onSubmit: (values) => {
            console.log(values);
            setLoading(true);

            const handleSignIn = async (formValues: signInValuesProps) => {
                try {
                    await authApi.signIn(formValues);

                    //Save user data to local storage
                    auth.signin(formValues);

                    navigate('/');
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

            handleSignIn(values);
        },
    });

    return (
        <>
            <form action="" className="authen__form" onSubmit={handleSubmit}>
                {renderTextInputs(formInputList, values, errors, touched, handleChange, handleBlur)}
                <LoadingButton loading={loading} type="submit" className="contained-primary-btn">
                    Continue
                </LoadingButton>
            </form>
            <AuthenDialog open={openDialog} setOpen={setOpenDialog} dialogContent={dialogContent} />
        </>
    );
};

export default SignIn;
