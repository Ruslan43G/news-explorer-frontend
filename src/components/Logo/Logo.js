import React from 'react';
import './Logo.css';

export default function Logo (props) {

    return (
        <div className={`logo ${props.open ? 'logo_mobile-opened' : ''}`}>NewsExplorer</div>
    )


}
