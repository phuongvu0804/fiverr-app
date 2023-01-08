import { Edit, LocationOn, Person } from '@mui/icons-material';
import { Avatar, Button, Divider, IconButton } from '@mui/material';
import React from 'react';

//Others
import './UserCard.scss';
const UserCard = () => {
    return (
        <section className="profile__info-card profile__user-card">
            <div className="user-card__top">
                <Avatar className="user-card__avatar" />
                <p>phuongvu0804</p>
                <IconButton>
                    <Edit />
                </IconButton>
            </div>
            <Divider />
            <div className="user-card__bottom">
                <div className="user-card__info-group">
                    <div className="info-group__name">
                        <LocationOn />
                        <span>From</span>
                    </div>
                    <p>Finland</p>
                </div>
                <div className="user-card__info-group">
                    <div className="info-group__name">
                        <Person />
                        <span>Member since</span>
                    </div>
                    <p>Nov 2022</p>
                </div>
            </div>
        </section>
    );
};

export default UserCard;
