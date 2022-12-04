const SlickNextArrow = (props: any) => {
    const { className, onClick } = props;

    return <div className={`slick__btn slick__btn--next hide-on-mobile ${className}`} onClick={onClick} />;
};

export default SlickNextArrow;
