//Components
import Footer from '@/components/Layout/components/Footer';
import Header from '@/components/Layout/components/Header';
import JobFilter from '@/components/Layout/components/JobFilter';

interface Props {
    children: JSX.Element;
}

const DefaultLayout = ({ children }: Props) => {
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
