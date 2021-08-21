import React from 'react';
import Image from 'next/image'
import logo from '../../styles/images/logo.svg';

interface HeaderProps {
    pathname: string;
}

const Header: React.FC<HeaderProps> = ({pathname}) => {
    return (
        <header className="header">
            <div className="header__logo">
                <Image
                    height={72}
                    width={pathname === '/login' ? 100 : 80}
                    src={logo}
                    alt="logo"/>
            </div>
            <div className="header__tools">
                <div className="header__tools-search"/>
                <div className="header__tools-sidebar"/>
            </div>
        </header>
    );
};

export default Header;