import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

//Components
import AuthenDialog from '@/components/Layout/AuthenLayout/components/AuthenDialog';
import {
    INIT_DIALOG_VALUE,
    NotiDialogProps,
    NotiTypes,
} from '@/components/Layout/AuthenLayout/components/AuthenDialog/constants';

//Material UI
import { LoadingButton } from '@mui/lab';

//Others
import authApi from '@/api/authApi';
import useAuth from '@/hooks/useAuth';
import { SIGN_IN_SCHEMA } from '@/validators/authValidator';
import { FORM_INPUT_LIST, INITIAL_VALUES } from './constants';
import { renderTextInputs } from '@/components/Layout/AuthenLayout/constants';
import { useAppDispatch } from '@/hooks';
import { actGetUserFail, actGetUserRequest, actGetUserSuccess } from '@/store/actions/user';
import { callApi } from '@/api/config/errorHandling';
import { LogErrorProps, UserDataTokenProps } from '@/constants/intefaces';

const SignIn = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const auth = useAuth();

    const [loading, setLoading] = useState(false);
    const [openDialog, setOpenDialog] = useState<boolean>(false);
    const [dialogContent, setDialogContent] = useState<NotiDialogProps>(INIT_DIALOG_VALUE);

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
        initialValues: INITIAL_VALUES,
        validationSchema: SIGN_IN_SCHEMA,
        onSubmit: (values) => {
            setLoading(true);
            dispatch(actGetUserRequest());

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
                        content: error.customedError.message || 'Oops! Something went wrong. Please try again later.',
                    });
                    dispatch(actGetUserFail(error));
                },
                () => setLoading(false),
            );
        },
    });

    return (
        <>
            <form action="" className="authen__form" onSubmit={handleSubmit}>
                {renderTextInputs(FORM_INPUT_LIST, values, errors, touched, handleChange, handleBlur)}
                <LoadingButton loading={loading} type="submit" className="contained-primary-btn">
                    Continue
                </LoadingButton>
            </form>
            <AuthenDialog open={openDialog} setOpen={setOpenDialog} dialogContent={dialogContent} />
        </>
    );
};

export default SignIn;
