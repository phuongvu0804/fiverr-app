import images from '@/assets/images';
import React, { useState } from 'react';

interface Props {
    src: string;
    alt: string;
    className: string;
    fallback: any;
}

const Image = (props: Props) => {
    const { src, alt, className, fallback: customFallback = images.noImage } = props;
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return <img className={className} alt={alt} src={src || fallback} onError={handleError} />;
};

export default Image;
