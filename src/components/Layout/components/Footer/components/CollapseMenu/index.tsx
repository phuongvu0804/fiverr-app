//Material UI
import { List } from '@mui/material';
import { ColumnType } from '../../constants';
import CollapseMenuItem from '../CollapseMenuItem';

const CollapseMenu = ({ menuList }: { menuList: ColumnType[] }) => {
    return (
        <List className="footer__collapse-list">
            {menuList.map((item, index) => (
                <CollapseMenuItem key={index} menuItem={item} />
            ))}
        </List>
    );
};

export default CollapseMenu;
