import React from 'react';

const Sidebar = () => {
    return (
        <div className={'sidebar'}>
            <div className="sidebar__header">
                <div className="sidebar__header-wrapper">
                    <h2 className="sidebar__header-title">
                        Hello, Artem
                    </h2>
                    <div className="sidebar__header-notify"/>
                    <div className="sidebar__header-close"/>
                </div>
                <div className="sidebar__header-wrapper">
                    <div className="sidebar__header-avatar"/>
                    <div className="sidebar__header-info">
                        <div className="sidebar__header-info-title">
                            Listened time:
                        </div>
                        <div className="sidebar__header-info-text">
                            24:15:05
                        </div>
                    </div>
                    <div className="sidebar__header-info">
                        <div className="sidebar__header-info-title">
                            Listened time:
                        </div>
                        <div className="sidebar__header-info-text">
                            24:15:05
                        </div>
                    </div>
                    <div className="sidebar__header-info">
                        <div className="sidebar__header-info-title">
                            Listened time:
                        </div>
                        <div className="sidebar__header-info-text">
                            24:15:05
                        </div>
                    </div>
                </div>
            </div>

            <ul className="sidebar__nav">
                <li className="sidebar__nav-item">
                    Browse
                </li>
                <li className="sidebar__nav-item">
                    Browse
                </li>
                <li className="sidebar__nav-item">
                    Browse
                </li>
                <li className="sidebar__nav-item">
                    Browse
                </li>
                <li className="sidebar__nav-item">
                    Browse
                </li>
                <li className="sidebar__nav-item">
                    Browse
                </li>
                <li className="sidebar__nav-item">
                    Browse
                </li>
            </ul>
            <div className="sidebar__logout">
                <button className="sidebar__logout-btn">
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;