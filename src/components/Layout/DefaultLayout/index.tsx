//Components
import HeaderFix from '@/components/Layout/components/Header/components/HeaderFix';
import Footer from '../components/Footer';

interface Props {
    children: JSX.Element;
}

const DefaultLayout = ({ children }: Props) => {
    return (
        <div>
            <HeaderFix />
            {/* Fix later */}
            {/* <JobFilter /> */}
            <div className="content">{children}</div>
            <Footer />
        </div>
    );
};

export default DefaultLayout;
