import './Styles/index.scss'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { faRectangleList, faBell, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import {ButtonWithIcon} from '../ButtonComponent/index'
const Index = () => {
    const listFeatures = [
        {
            className: 'header__other--box',
            href:'#',
            icon:<FontAwesomeIcon icon={faRectangleList} />
        },
        {
            className: 'header__other--box',
            href:'#',
            icon:<FontAwesomeIcon icon={faFacebookMessenger} />
        },
        {
            className: 'header__other--box',
            href:'#',
            icon:<FontAwesomeIcon icon={faBell} />
        },
        {
            className: 'header__other--box',
            href:'#',
            icon:<FontAwesomeIcon icon={faCaretDown} />
        },
    ]

    return (
        <div className="header__other--feature">
            {
                listFeatures.map(item => 
                 <ButtonWithIcon 
                 className={item.className}
                 href={item.href}
                 icon={item.icon}
                />      
            )}
        </div>
    );
}

export default Index;
