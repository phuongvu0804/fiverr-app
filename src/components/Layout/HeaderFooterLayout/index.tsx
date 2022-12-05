//Components
import Footer from '@/components/Layout/components/Footer';
import HeaderMove from '@/components/Layout/components/Header/components/HeaderMove/index';

interface Props {
    children: JSX.Element;
}

const HeaderFooterLayout = ({ children }: Props) => {
    return (
        <div>
            <HeaderMove />
            <div className="content">{children}</div>
            <Footer />
        </div>
    );
};

export default HeaderFooterLayout;
