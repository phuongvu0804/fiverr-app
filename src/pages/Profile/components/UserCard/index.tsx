import moment from 'moment';

//Material UI
import { Cake, Edit, Phone } from '@mui/icons-material';
import { Avatar, Divider, IconButton, Skeleton, SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

//Others
import { UserDataProps } from '@/constants/intefaces';
import './UserCard.scss';

interface Props {
    data: UserDataProps;
    loading: boolean;
}

interface InforListProps {
    id: string;
    name: string;
    icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
    data: string;
}

const UserCard = ({ data, loading }: Props) => {
    const INFOR_LIST: InforListProps[] = [
        {
            id: 'phone',
            name: 'Phone number',
            icon: Phone,
            data: data.phone || 'Empty',
        },
        {
            id: 'birthday',
            name: 'Date Of Birth',
            icon: Cake,
            data: moment(data.birthday).format('DD/MM/YYYY') || 'Empty',
        },
    ];

    //If user has avatar, display avatar, elsewhere display first letter of name
    const renderAvatar = () => {
        if (data.avatar !== '') {
            return <Avatar className="user-card__avatar" src={data.avatar} alt="user's avatar" />;
        } else {
            return <Avatar className="user-card__avatar">{data.name.charAt(0).toUpperCase()}</Avatar>;
        }
    };

    const renderInfoGroups = () => {
        if (loading) {
            return INFOR_LIST.map((item, index) => (
                <div key={index} className="user-card__info-group">
                    <div className="info-group__name">
                        <item.icon />
                        <span>{item.name}</span>
                    </div>
                    <Skeleton variant="text" sx={{ fontSize: '20px' }} width="100px" />
                </div>
            ));
        } else {
            return INFOR_LIST.map((item, index) => (
                <div key={index} className="user-card__info-group">
                    <div className="info-group__name">
                        <item.icon />
                        <span>{item.name}</span>
                    </div>
                    <p>{item.data}</p>
                </div>
            ));
        }
    };

    return loading ? (
        <section className="profile__info-card profile__user-card">
            <div className="user-card__top">
                <Skeleton className="user-card__avatar" variant="circular" />
                <Skeleton variant="text" sx={{ fontSize: '20px' }} width="100px" />
                <IconButton>
                    <Edit />
                </IconButton>
            </div>
            <Divider />
            <div className="user-card__bottom">{renderInfoGroups()}</div>
        </section>
    ) : (
        <section className="profile__info-card profile__user-card">
            <div className="user-card__top">
                {renderAvatar()}
                <p>{data.name}</p>
                <IconButton>
                    <Edit />
                </IconButton>
            </div>
            <Divider />
            <div className="user-card__bottom">{renderInfoGroups()}</div>
        </section>
    );
};

export default UserCard;
