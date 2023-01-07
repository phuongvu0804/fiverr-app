import { useState } from 'react';
import { LOCAL_STORAGE_USER_NAME } from '@/constants/constants';

const useAuth = () => {
    let existedUser = localStorage.getItem(LOCAL_STORAGE_USER_NAME);
    if (existedUser) {
        existedUser = JSON.parse(existedUser);
    }

    const [user, setUser] = useState(existedUser);

    const signin = (user: any) => {
        localStorage.setItem(LOCAL_STORAGE_USER_NAME, JSON.stringify(user));

        setUser(user);
    };

    const signout = () => {
        localStorage.removeItem(LOCAL_STORAGE_USER_NAME);
        setUser(null);
    };

    return { user, signin, signout };
};

export default useAuth;
