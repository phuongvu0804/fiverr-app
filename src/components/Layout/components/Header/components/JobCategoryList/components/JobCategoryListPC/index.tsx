import { NavLink } from 'react-router-dom';

//Others
import { JobCategoryProps } from '@/constants/intefaces';

interface Props {
    data: JobCategoryProps[];
}

const JobCategoryListPC = ({ data }: Props) => {
    return (
        <ul className="job-category__list hide-on-tablet-mobile container-center">
            {data.map((item: JobCategoryProps, index: number) => (
                <li key={index} className="job-category__item">
                    <NavLink
                        className={({ isActive }) => (isActive ? 'job-category__link active' : 'job-category__link')}
                        to={`/job-list/${item.id}`}
                    >
                        {item.tenLoaiCongViec}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

export default JobCategoryListPC;
