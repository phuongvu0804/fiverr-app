const SlickPrevArrow = (props: any) => {
    const { className, onClick } = props;
    return <div className={`slick__btn slick__btn--prev hide-on-mobile ${className}`} onClick={onClick} />;
};

export default SlickPrevArrow;
