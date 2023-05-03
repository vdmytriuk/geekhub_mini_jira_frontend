import React, {FC, useState} from "react";

import {useTypedSelector} from "../../hooks/useTypedSelector";

import DashboardNav from "../../components/DashboardNav/DashboardNav";
import PrivateLayout from "../../layouts/PrivateLayout/PrivateLayout";
import EditUserProfile from "../../modules/EditUserProfile/EditUserProfile";
import UserProfileHeader from "../../components/UserProfileHeader/UserProfileHeader";

import DefaultUserAvatar from "../../UI/DefaultUserAvatar/DefaultUserAvatar";

import './UserProfilePage.scss';

const UserProfilePage: FC = () => {
    const user = useTypedSelector(state => state.user);

    return (
        <PrivateLayout
            toolbar={<DashboardNav/>}
            header={<UserProfileHeader/>}
        >
            <div className="user-profile">

                <div className="user-profile__content">

                    <DefaultUserAvatar
                        name={user.first_name}
                        last_name={user.last_name}
                    />

                    <div className="user-profile__info">
                        <div className="info-name">{user.first_name} {user.last_name}</div>

                        <div className="info-email">{user.email}</div>
                    </div>
                </div>

            </div>

            <EditUserProfile/>
        </PrivateLayout>
    );
};

export default UserProfilePage;