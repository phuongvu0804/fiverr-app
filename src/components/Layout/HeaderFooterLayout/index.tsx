//Components
import Footer from '@/components/Layout/components/Footer';
import Header from '@/components/Layout/components/Header/index';

interface Props {
    children: JSX.Element;
}

const HeaderFooterLayout = ({ children }: Props) => {
    return (
        <div>
            <Header />
            <div className="content">{children}</div>
            <Footer />
        </div>
    );
};

export default HeaderFooterLayout;
