//Components
import Footer from '@/components/Layout/components/Footer';
import HeaderFix from '@/components/Layout/components/Header/components/HeaderFix';
import JobFilter from '@/components/Layout/components/JobFilter';

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
