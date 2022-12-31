import React from 'react';
import { Link } from 'react-router-dom';

//Material UI
import { Divider } from '@mui/material';

//Components
import Image from '@/components/Image';

//Others
import images from '@/assets/images';
import { DirectionProps } from '../../types';
import './AuthBackground.scss';

interface Props {
    pageName: string;
    children: JSX.Element;
    direction: DirectionProps;
}

const AuthBackground = ({ pageName, children, direction }: Props) => {
    return (
        <div id="authen-page">
            <div className="authen-page__bg">
                <Image src={images[direction.bg as keyof typeof images]} alt="background" />
            </div>
            <div className="authen-page-wrappper">
                <div className="authen__head">
                    <h1 className="authen__title">{pageName}</h1>
                </div>

                <div className="authen__content">
                    {children}
                    {direction.policy && <p className="authen__text">{direction.policy}</p>}
                </div>

                <Divider />

                <div className="authen__footer">
                    <p className="authen__text">
                        {direction.text} <Link to={direction.path}>{direction.link}</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AuthBackground;
