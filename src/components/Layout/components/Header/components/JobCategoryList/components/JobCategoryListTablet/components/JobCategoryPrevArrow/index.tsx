import { ArrowBackIos } from '@mui/icons-material';

const JobCategoryPrevArrow = (props: any) => {
    const { onClick } = props;
    return (
        <div className="job-category__arrow-btn job-category__arrow-btn--prev" onClick={onClick}>
            <ArrowBackIos />
        </div>
    );
};

export default JobCategoryPrevArrow;
