import React from 'react';
import Gig from './components/Gig';
import LearnCard from './components/LearnCard';
import UserCard from './components/UserCard';

//Others
import './Profile.scss';
const Profile = () => {
    return (
        <div id="profile" className="padding-top-page">
            <div className="profile__wrapper">
                <div className="profile__group profile__group--info-column">
                    <UserCard />
                    <LearnCard />
                </div>
                <div className="profile__group profile__group--gig-column">
                    <Gig data={false} />
                    <Gig data={true} />
                </div>
            </div>
        </div>
    );
};

export default Profile;
