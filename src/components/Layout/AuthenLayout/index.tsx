// Components
import AuthBackground from '../components/AuthBackground';

interface Props {
    children: JSX.Element;
}

const AuthenLayout = ({ children }: Props) => {
    return (
        <div>
            <AuthBackground />
            <div className="content">{children}</div>
        </div>
    );
};

export default AuthenLayout;
