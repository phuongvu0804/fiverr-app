//Material UI
import { ButtonPropType, TextIconButtonType } from '@/constants/intefaces';
import { Grid, IconButton } from '@mui/material';
import CollapseMenu from './components/CollapseMenu';
import { COLUMNS, SETTING_LIST, SOCIAL_LIST } from './constants';

import './Footer.scss';
const Footer = () => {
    const renderColumns = () => {
        return COLUMNS.map((column, index) => (
            <Grid item xs={12} sm={4} md={2.4} key={index} className="footer__category">
                <h5 className="footer__category-name">{column.title}</h5>
                <ul>
                    {column.children.map((item, index) => (
                        <li key={index} className="footer__category-item">
                            <a href={item.href} className="footer__category-link">
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </Grid>
        ));
    };

    const renderButtonList = (buttonList: TextIconButtonType[]) => {
        return buttonList.map((item, index) => {
            let props: ButtonPropType = {};
            if (item.href) {
                props.href = item.href;
            } else if (item.to) {
                props.to = item.to;
            } else if (item.onClick) {
                props.onClick = item.onClick;
            }

            if (item.content) {
                return (
                    <li key={index} className="footer__setting-item">
                        <button>
                            {item.icon}
                            <span>{item.content}</span>
                        </button>
                    </li>
                );
            } else {
                return (
                    <li key={index} className="footer__social-item">
                        <IconButton className="footer__social-link" {...props}>
                            {item.icon}
                        </IconButton>
                    </li>
                );
            }
        });
    };

    return (
        <div id="footer">
            <div className="footer__content container-center">
                {/* Footer top for PC + tablet starts */}
                <Grid container spacing={2} className="footer__top hide-on-mobile ">
                    {renderColumns()}
                </Grid>
                {/* Footer top for PC + tablet ends*/}

                {/* Footer top for mobile starts */}
                <div className="footer__top hide-on-pc-tablet">
                    <CollapseMenu menuList={COLUMNS} />
                </div>
                {/* Footer top for mobile ends */}

                <div className="footer__bottom">
                    <div className="footer__left">
                        <div className="footer__left-logo">
                            <svg
                                width="91"
                                height="27"
                                viewBox="0 0 91 27"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g fill="#7A7D85">
                                    <path d="m82.9 13.1h-3.2c-2.1 0-3.2 1.5-3.2 4.1v9.3h-6.1v-13.4h-2.6c-2.1 0-3.2 1.5-3.2 4.1v9.3h-6.1v-18.4h6.1v2.8c1-2.2 2.4-2.8 4.4-2.8h7.4v2.8c1-2.2 2.4-2.8 4.4-2.8h2v5zm-25.6 5.6h-12.6c.3 2.1 1.6 3.2 3.8 3.2 1.6 0 2.8-.7 3.1-1.8l5.4 1.5c-1.3 3.2-4.6 5.1-8.5 5.1-6.6 0-9.6-5.1-9.6-9.5 0-4.3 2.6-9.4 9.2-9.4 7 0 9.3 5.2 9.3 9.1 0 .9 0 1.4-.1 1.8zm-5.9-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3.1.8-3.4 3zm-23.1 11.3h5.3l6.7-18.3h-6.1l-3.2 10.7-3.4-10.8h-6.1zm-24.9 0h6v-13.4h5.7v13.4h6v-18.4h-11.6v-1.1c0-1.2.9-2 2.3-2h3.5v-5h-4.4c-4.5 0-7.5 2.7-7.5 6.6v1.5h-3.4v5h3.4z"></path>
                                </g>
                                <g fill="#7A7D85">
                                    <path d="m90.4 23.3c0 2.1-1.6 3.7-3.8 3.7s-3.8-1.6-3.8-3.7 1.6-3.7 3.8-3.7c2.2-.1 3.8 1.5 3.8 3.7zm-.7 0c0-1.8-1.3-3.1-3.1-3.1s-3.1 1.3-3.1 3.1 1.3 3.1 3.1 3.1 3.1-1.4 3.1-3.1zm-1.7.8.1.9h-.7l-.1-.9c0-.3-.2-.5-.5-.5h-.8v1.4h-.7v-3.5h1.4c.7 0 1.2.4 1.2 1.1 0 .4-.2.6-.5.8.4.1.5.3.6.7zm-1.9-1h.7c.4 0 .5-.3.5-.5 0-.3-.2-.5-.5-.5h-.7z"></path>
                                </g>
                            </svg>
                        </div>
                        <span className="footer__left-policy">© Fiverr International Ltd. 2022</span>
                    </div>
                    <div className="footer__right">
                        <ul className="footer__right-list footer__right-list--social">
                            {renderButtonList(SOCIAL_LIST)}
                        </ul>
                        <ul className="footer__right-list footer__right-list--setting">
                            {renderButtonList(SETTING_LIST)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
