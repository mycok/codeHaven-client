import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { useWindowDimensions } from '../../../hooks/useWindowDimensions';
import SidebarMenus from '../sidebar/SidebarMenus';
import './navigation.css';

export default function Navigation() {
    const { width } = useWindowDimensions();
    const [showMenu, setShowMenu] = useState(false);

    function onClickToggle() {
        setShowMenu(!showMenu)
    }

    function onRequestClose() {
        setShowMenu(false)
    }

    function getMobileMenu() {
        if (width <= 768) {
            return (
                <FontAwesomeIcon
                    className="nav-mobile-menu"
                    icon={faBars}
                    size="lg"
                    onClick={onClickToggle}
                />
            )
        }

        return null;
    }

    return (
        <>
            <nav>
                {getMobileMenu()}
                <strong>Super Forum</strong>
            </nav>
            <ReactModal
                className="modal-menu"
                isOpen={showMenu}
                onRequestClose={onRequestClose}
                shouldCloseOnOverlayClick
            >
                <SidebarMenus />
            </ReactModal>
        </>
    )
}
