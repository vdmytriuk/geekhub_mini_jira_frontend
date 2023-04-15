import React, {FC} from "react";

import {useTypedSelector} from "../../hooks/useTypedSelector";

import DashboardNav from "../../components/DashboardNav/DashboardNav";
import PrivateLayout from "../../layouts/PrivateLayout/PrivateLayout";
import EditUserProfile from "../../modules/EditUserProfile/EditUserProfile";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";

import DefaultProfileAvatar from "../../UI/DefaultProfileAvatar/DefaultProfileAvatar";

import './UserProfilePage.scss';

const UserProfilePage: FC = () => {
    const user = useTypedSelector(state => state.user);

    return (
        <PrivateLayout
            toolbar={<DashboardNav/>}
            header={<DashboardHeader/>}
        >
            <div className="profile">

                <h2>User profile</h2>

                <div className="profile-wrapper">

                    <div className="profile__avatar-wrapper">
                        <DefaultProfileAvatar
                            name={user.name}
                            last_name={user.last_name}
                        />
                    </div>

                    <div className="profile__info-wrapper">
                        <div className="name">{user.name} {user.last_name}</div>

                        <div className="email">{user.email}</div>
                    </div>
                </div>

            </div>

            <EditUserProfile/>
        </PrivateLayout>
    );
};

export default UserProfilePage;