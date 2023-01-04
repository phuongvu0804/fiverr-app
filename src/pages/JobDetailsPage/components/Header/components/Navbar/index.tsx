import React, { useEffect, useState } from 'react';
import { NavbarItemProps } from '../../../../types';

//Others
import './Navbar.scss';

interface Props {
    data: NavbarItemProps[];
}

const Navbar = ({ data }: Props) => {
    const [isActive, setActive] = useState<string>('overview');

    useEffect(() => {
        const navHighLighter = () => {
            let SCROLL_Y = window.pageYOffset;
            let currentSection = '';
            const SECTIONS = document.querySelectorAll('section');

            SECTIONS.forEach((section) => {
                const SECTION_TOP = section.offsetTop;

                if (SCROLL_Y === 0) {
                    currentSection = 'overview';
                } else if (SCROLL_Y >= SECTION_TOP) {
                    currentSection = section.getAttribute('id') || 'overview';
                }
                setActive(currentSection);
            });
        };

        window.addEventListener('scroll', navHighLighter);

        return () => {
            window.removeEventListener('scroll', navHighLighter);
        };
    }, []);

    return (
        <div className="job-details-head__nav-list">
            {data.map((item, index) => (
                <a
                    key={index}
                    href={`#${item.href}`}
                    className={
                        isActive === item.href ? 'job-details-head__nav-item active' : 'job-details-head__nav-item'
                    }
                    onClick={() => setActive(item.href)}
                >
                    {item.name}
                </a>
            ))}
        </div>
    );
};

export default Navbar;
