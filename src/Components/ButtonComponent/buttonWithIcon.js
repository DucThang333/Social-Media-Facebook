import React from 'react';

const ButtonWithIcon = ({className='' , href='#' , icon=''}) => {
    return (
        <a className={className} href={href}>
            {icon}
        </a>
    );
}

export default ButtonWithIcon;
