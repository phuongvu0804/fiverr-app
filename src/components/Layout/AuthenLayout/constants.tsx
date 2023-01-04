import { signInValuesProps } from '@/pages/SignIn/types';
import { FormikErrors, FormikTouched } from 'formik';
import TextInput from './components/TextInput';
//Functions and values that can be used in both Sign In and Sign Up Pages

export const renderTextInputs = (
    formInputList: string[],
    values: signInValuesProps,
    errors: FormikErrors<signInValuesProps>,
    touched: FormikTouched<signInValuesProps>,
    handleChange: (e: string | React.ChangeEvent<any>) => void,
    handleBlur: (e: React.FocusEvent<any, Element>) => void,
) => {
    return formInputList.map((item: string, index: number) => {
        return (
            <TextInput
                key={index}
                name={item}
                value={values[item as keyof typeof values]}
                error={errors[item as keyof typeof errors]}
                touched={touched[item as keyof typeof touched]}
                handleChange={handleChange}
                handleBlur={handleBlur}
            />
        );
    });
};
