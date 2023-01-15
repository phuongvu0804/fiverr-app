import { LogErrorProps } from '@/constants/intefaces';
import { actOpenAlert } from '@/store/actions/alert';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '.';

const useLogError = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    return (error: LogErrorProps) => {
        switch (error.type) {
            case 1: //System error
                dispatch(
                    actOpenAlert({
                        state: true,
                        type: 'error',
                        title: error.customedError.idError,
                        content: error.customedError.message,
                    }),
                );
                break;
            case 2: //Api error
                if (error.customedError.idError === 400) {
                    return navigate('/error');
                } else {
                    dispatch(
                        actOpenAlert({
                            state: true,
                            type: 'error',
                            title: error.customedError.idError,
                            content:
                                'Oops! Something went wrong, you cannot book this service at this time. Please check your action or try again later!',
                        }),
                    );
                }
                break;

            default:
                return false;
        }
    };
};

export default useLogError;
