//Components
import BookingCardSkeleton from '../BookingCard/components/BookingCardSkeleton';
import Header from '../Header';
import MUIBreadCrumbsSkeleton from '../MUIBreadCrumbs/components/MUIBreadCrumbsSkeleton';
import JobDescSkeleton from '../JobDesc/components/JobDescSkeleton';
import OverviewSkeleton from '../Overview/components/OverviewSkeleton';
import ReviewsSkeleton from '../Reviews/components/ReviewsSkeleton';
import SellerDescSkeleton from '../SellerDesc/components/SellerDescSkeleton';

//Others
import { NAVBAR_LIST } from '../../constants';

const JobDetailsPageSkeleton = ({ likedPosts, data, scrollDown }: { likedPosts: any; data: any; scrollDown: any }) => {
    return (
        <div id="job-details-page" className="padding-top-page">
            <Header likedPosts={likedPosts} postId={data.id} data={NAVBAR_LIST} scrollDown={scrollDown} />

            <div className="container-center">
                <MUIBreadCrumbsSkeleton />

                <div className="job-details__body">
                    <div className="job-details__content">
                        <OverviewSkeleton />
                        <BookingCardSkeleton className="display-tablet-mobile hide-on-pc" />
                        <JobDescSkeleton />
                        <SellerDescSkeleton />
                        <ReviewsSkeleton />
                    </div>

                    <BookingCardSkeleton className="hide-on-tablet-mobile" />
                </div>
            </div>
        </div>
    );
};

export default JobDetailsPageSkeleton;
