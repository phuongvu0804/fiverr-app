const ServiceListPrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div className={`service-list__btn service-list__btn--prev hide-on-mobile ${className}`} onClick={onClick} />
    );
};

export default ServiceListPrevArrow;
