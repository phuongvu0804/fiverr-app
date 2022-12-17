import { NavLink } from 'react-router-dom';
import Slider from 'react-slick';

//Material UI

//Others
import { JobCategoryProps } from '@/constants/intefaces';
import JobCategoryNextArrow from './components/JobCategoryNextArrow';
import JobCategoryPrevArrow from './components/JobCategoryPrevArrow';

interface Props {
    data: JobCategoryProps[];
}

const JobCategoryListTablet = ({ data }: Props) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: false,
        slidesToShow: 5.5,
        slidesToScroll: 1,
        nextArrow: <JobCategoryNextArrow />,
        prevArrow: <JobCategoryPrevArrow />,
    };

    return (
        <Slider {...settings} className="job-category__list hide-on-pc hide-on-mobile">
            {data.map((item: JobCategoryProps, index: number) => (
                <div key={index} className="job-category__item hide-on-mobile">
                    <NavLink
                        className={({ isActive }) => (isActive ? 'job-category__link active' : 'job-category__link')}
                        to={`/job-list/${item.id}`}
                    >
                        {item.tenLoaiCongViec}
                    </NavLink>
                </div>
            ))}
        </Slider>
    );
};

export default JobCategoryListTablet;
