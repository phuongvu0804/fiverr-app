//Components
import Footer from '@/components/Layout/components/Footer';
import Header from '@/components/Layout/components/Header';

const HeaderFooterLayout = ({ children }: { children: JSX.Element }) => {
    return (
        <div>
            <Header />
            <div className="content">{children}</div>
            <Footer />
        </div>
    );
};

export default HeaderFooterLayout;
