import { PostProps } from '@/constants/intefaces';
import { AxiosResponse } from 'axios';

const SYSTEM_ERROR = 1;
const API_ERROR = 2;

export interface CustomedErrorProps {
    idError: number | string;
    message: string;
}

export interface ApiContentResponseProps {
    content: PostProps;
    dateTime: string;
    statusCode: number;
}

export interface ApiResponseProps extends AxiosResponse {
    data: ApiContentResponseProps;
}

interface AxiosErrorProps {
    content: string;
    dateTime: string;
    message: string;
    statusCode: number;
}

//Categorize error types and assign suitable msg
const validateResponse = (error: AxiosErrorProps) => {
    let customedError: CustomedErrorProps = {
        idError: '',
        message: '',
    };

    let type = API_ERROR;

    switch (error.statusCode) {
        case 400:
        case 403:
        case 404:
        case 420:
        case 422:
        case 500:
            if (error.message) {
                customedError = {
                    idError: error.statusCode,
                    message: error.content,
                };
            }
            break;
        default:
            type = SYSTEM_ERROR;
            customedError = {
                idError: 'Server Error',
                message: 'Oops! There were some errors from the server.',
            };
    }

    return {
        type,
        customedError,
    };
};

const callApi = (api: any, onRequest: any, onError?: (error: any) => void, onFinally?: any) => {
    api.then((response: ApiResponseProps) => {
        onRequest && onRequest(response.data.content);
    })
        .catch((error: any) => {
            const CUSTOM_ERROR = validateResponse(error.response?.data);

            onError && onError(CUSTOM_ERROR);
        })
        .finally(() => {
            onFinally && onFinally();
        });
};

export { callApi };
