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
            let scrollY = window.pageYOffset;
            let currentSection = '';
            const sections = document.querySelectorAll('section');

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;

                if (scrollY === 0) {
                    currentSection = 'overview';
                } else if (scrollY >= sectionTop) {
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