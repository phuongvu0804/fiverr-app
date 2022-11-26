import React, { Fragment, useState } from 'react';

//Material UI
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse, ListItem } from '@mui/material';
import { ColumnType } from '../../constants';

const CollapseMenuItem = ({ menuItem }: { menuItem: ColumnType }) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Fragment>
            <ListItem className="footer__category" onClick={handleClick}>
                <h5 className="footer__category-name">{menuItem.title}</h5>
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={open} timeout="auto" unmountOnExit>
                {menuItem.children.map((item, index) => (
                    <ListItem className="footer__category-item" key={index}>
                        <a href={item.href} className="footer__category-link">
                            {item.title}
                        </a>
                    </ListItem>
                ))}
            </Collapse>
        </Fragment>
    );
};

export default CollapseMenuItem;
