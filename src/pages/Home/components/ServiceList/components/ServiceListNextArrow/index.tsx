const ServiceListNextArrow = (props: any) => {
    const { className, style, onClick } = props;

    return (
        <div className={`service-list__btn service-list__btn--next hide-on-mobile ${className}`} onClick={onClick} />
    );
};

export default ServiceListNextArrow;
