//Components
import Footer from '@/components/Layout/components/Footer';
import Header from '@/components/Layout/components/Header';
import JobFilter from '@/components/Layout/components/JobFilter';

const DefaultLayout = ({ children }: { children: JSX.Element }) => {
    return (
        <div>
            <Header />
            <JobFilter />
            <div className="content">{children}</div>
            <Footer />
        </div>
    );
};

export default DefaultLayout;
