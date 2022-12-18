import { JobCategoryProps } from '@/constants/intefaces';
import { Button } from '@mui/material';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

interface Props {
    data: JobCategoryProps[];
    onFilter?: any;
}

const CategoryFilter = ({ data, onFilter }: Props) => {
    const [isActive, setActive] = useState(-1);

    const handleClick = (index: number, category: string) => {
        setActive(index);
        onFilter(category);
    };
    return (
        <>
            {data?.map((item: JobCategoryProps, index: number) => (
                <Button
                    variant="text"
                    key={index}
                    className={isActive === index ? 'filter-menu__item active' : 'filter-menu__item'}
                    onClick={() => handleClick(index, item.tenLoaiCongViec)}
                >
                    {item.tenLoaiCongViec}
                </Button>
            ))}
        </>
    );
};

export default CategoryFilter;
