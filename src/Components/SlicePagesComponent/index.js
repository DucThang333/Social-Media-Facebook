import React from 'react';
import './Styles/index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHouse, faTv, faStore, faPeopleGroup, faChessBoard,
} from '@fortawesome/free-solid-svg-icons';
import { ButtonWithIcon } from '../ButtonComponent/index'

const Index = () => {
    const listSlicePages = [
        {
            className: "header__link--element active",
            href: "#",
            icon: <FontAwesomeIcon icon={faHouse} />
        },
        {
            className: "header__link--element",
            href: "#",
            icon: <FontAwesomeIcon icon={faTv} />
        },
        {
            className: "header__link--element",
            href: "#",
            icon: <FontAwesomeIcon icon={faStore} />
        },
        {
            className: "header__link--element",
            href: "#",
            icon: <FontAwesomeIcon icon={faPeopleGroup} />
        },
    ]

    console.log(listSlicePages)

    return (
        <div className="header__feature--element header__link">
            {listSlicePages.map(item =>
                <ButtonWithIcon
                className={item.className} href={item.href}
                icon={item.icon} />
            )}
        </div>
    );
}

export default Index;
