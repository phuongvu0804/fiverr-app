import { SignUpValuesProps } from '@/pages/Register/types';
import { signInValuesProps } from '@/pages/SignIn/types';
import { FormControl, FormHelperText, TextField } from '@mui/material';
import { FormikErrors, FormikTouched } from 'formik';
import React from 'react';

interface Props {
    name: string;
    value: string | boolean | null;
    error: any;
    touched: any;
    handleChange: (e: string | React.ChangeEvent<any>) => void;
    handleBlur: (e: React.FocusEvent<any, Element>) => void;
}

const TextInput = ({ name, value, error, touched, handleChange, handleBlur }: Props) => {
    const INPUT_NAME: string = name.charAt(0).toUpperCase() + name.slice(1);

    return (
        <FormControl className="authen__input-group">
            <TextField
                error={error && touched}
                className="authen-input-group__input"
                label={INPUT_NAME}
                name={name}
                type={name}
                onChange={handleChange}
                onBlur={handleBlur}
                color="success"
                value={value}
            />
            {error && touched && <FormHelperText error>{error}</FormHelperText>}
        </FormControl>
    );
};

export default TextInput;
