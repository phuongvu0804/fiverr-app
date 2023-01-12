//Components
import { UseAlertProps } from '../../types';
import GigCard from './components/GigCard';
import NoContentCard from './components/NoContentCard';

//Others
import './Gig.scss';

interface Props extends UseAlertProps {
    data: [];
    loading: boolean;
}

const Gig = ({ data, loading, openAlert, onOpenAlert, timeOutId }: Props) => {
    const renderGigContent = () => {
        if (loading) {
            const ARRAY = Array.apply(null, Array(3));
            return ARRAY.map((item, index) => (
                <GigCard
                    key={index}
                    data={null}
                    loading={loading}
                    openAlert={openAlert}
                    onOpenAlert={onOpenAlert}
                    timeOutId={timeOutId}
                />
            ));
        }
        if (data?.length) {
            return data.map((item, index) => (
                <GigCard
                    key={index}
                    data={item}
                    loading={false}
                    openAlert={openAlert}
                    onOpenAlert={onOpenAlert}
                    timeOutId={timeOutId}
                />
            ));
        } else {
            return <NoContentCard />;
        }
    };
    return (
        <section className="profile__gig">
            {data?.length && <h2>Your booking</h2>}
            {renderGigContent()}
        </section>
    );
};

export default Gig;