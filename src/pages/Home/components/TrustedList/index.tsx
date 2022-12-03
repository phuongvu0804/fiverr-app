import { trustedListData } from './constants';

import './TrustedList.scss';

const TrustedList = () => {
    const renderTrustedList = () => {
        return trustedListData.map((item, index) => {
            return (
                <div key={index} className="trusted-item">
                    <img alt={item.name} src={item.img} />
                </div>
            );
        });
    };

    return (
        <div className="home__trusted-list-wrapper">
            <div className="home__trusted-list-content">
                <span className="trusted-list__text hide-on-tablet-mobile">Trusted by:</span>
                <div className="home__trusted-list">{renderTrustedList()}</div>
            </div>
        </div>
    );
};

export default TrustedList;
