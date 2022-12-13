import React, { useEffect, useState } from 'react';
import HeaderContent from '../HeaderContent';
import JobCategoryList from '../JobCategoryList';

import './HeaderMove.scss';

const HeaderMove = () => {
    const [scrollDown, setScrollDown] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const offsetY = window.pageYOffset;

            offsetY > 0 ? setScrollDown(true) : setScrollDown(false);
        };

        window.addEventListener('scroll', onScroll);
    }, []);

    return (
        <div id="header-move" className={scrollDown ? 'header on-scroll' : 'header no-scroll'}>
            <HeaderContent />
            <JobCategoryList />
        </div>
    );
};

export default HeaderMove;
