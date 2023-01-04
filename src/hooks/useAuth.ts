import { useState } from 'react';

const useAuth = () => {
    let existedUser = localStorage.getItem('fiver_user');
    if (existedUser) {
        existedUser = JSON.parse(existedUser);
    }

    const [user, setUser] = useState(existedUser);

    const signin = (user: any) => {
        localStorage.setItem('fiver_user', JSON.stringify(user));

        setUser(user);
    };

    const signout = () => {
        localStorage.removeItem('fiver_user');
        setUser(null);
    };

    return { user, signin, signout };
};

export default useAuth;
