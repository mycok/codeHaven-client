import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const authData = {
    user: {
        username: 'michael'
    }
}

export default function SidebarMenus() {
    // check and load user info from local storage
    return (
        <ul>
            <FontAwesomeIcon icon={faUser}/>
            <span className="menu-name">{authData.user.username}</span>
        </ul>
    )
}