import './LoadingPage.scss';
const LoadingPage = () => {
    return (
        <div className="screen">
            <div className="loader">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="text">loading</div>
            </div>
        </div>
    );
};

export default LoadingPage;
