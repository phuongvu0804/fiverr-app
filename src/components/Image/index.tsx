import images from '@/assets/images';
import React, { useEffect, useState } from 'react';

interface Props {
    src: string;
    alt: string;
    className: string;
    fallback?: any;
}

const Image = (props: Props) => {
    const { src, alt, className, fallback: customFallback = images.noImage } = props;
    const [path, setPath] = useState('');

    useEffect(() => {
        setPath(src);
    }, []);

    const handleError = () => {
        setPath(customFallback);
    };

    return <img className={className} alt={alt} src={path} onError={handleError} />;
};

export default Image;
