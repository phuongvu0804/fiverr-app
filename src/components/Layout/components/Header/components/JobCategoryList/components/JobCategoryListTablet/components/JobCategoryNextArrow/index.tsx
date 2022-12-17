import { ArrowForwardIos } from '@mui/icons-material';

const JobCategoryNextArrow = (props: any) => {
    const { onClick } = props;
    return (
        <div className="job-category__arrow-btn job-category__arrow-btn--next" onClick={onClick}>
            <ArrowForwardIos />
        </div>
    );
};

export default JobCategoryNextArrow;
