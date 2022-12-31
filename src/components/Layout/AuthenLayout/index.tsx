// Components
import { useLocation, useParams } from 'react-router-dom';
import AuthBackground from './components/AuthBackground';
import { DirectionProps } from './types';

interface Props {
    children: JSX.Element;
}

const AuthenLayout = ({ children }: Props) => {
    const { pathname } = useLocation();
    let pageName = '';
    const direction: DirectionProps = {
        path: pathname,
        bg: 'signInBg',
    };

    if (pathname === '/auth/sign-in') {
        pageName = 'Sign In to Fiverr';

        direction.bg = 'signInBg';
        direction.path = '/auth/sign-up';
        direction.text = 'Not a member yet?';
        direction.link = 'Join now';
    } else if (pathname === '/auth/sign-up') {
        pageName = 'Join Fiverr';

        direction.bg = 'signUpBg';
        direction.path = '/auth/sign-in';
        direction.text = 'Already a member?';
        direction.link = 'Sign In';
        direction.policy = 'By joining I agree to receive emails from Fiverr.';
    }
    return (
        <div>
            <AuthBackground pageName={pageName} direction={direction}>
                <div className="content">{children}</div>
            </AuthBackground>
        </div>
    );
};

export default AuthenLayout;
