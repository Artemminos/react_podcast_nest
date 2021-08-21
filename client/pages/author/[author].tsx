import React from 'react';

const AuthorPage = () => {
    return (
        <section className={'author'}>
            <div className="author__header">
                <div className="author__header-wrapper">
                    <div className="author__header-avatar"/>
                    <div className="author__header-title">
                        Mary Beth Keane
                    </div>
                    <div className="author__header-socials">
                        <div className="author__header-link">
                            <div className="author__header-facebook"></div>
                            <div className="author__header-facebook"></div>
                            <div className="author__header-facebook"></div>
                        </div>
                    </div>
                    <div className="author__header-statistic">
                        Podcasts 7 878
                    </div>

                </div>
                <div className="author__header-rating">
                    3.5
                </div>
            </div>
            <div className="author__description">
                <div className="author_description-text">
                    Mary Beth Keane is an American writer of Irish parentage. She is the author of The Walking People, Fever,and Ask Again, Yes. In 2011 she was named one of the National...
                </div>
            </div>
            <div className="author__follow">
                <button>Follow</button> +1.3k followers
            </div>

            <ul className="author__tabs">
                <li className="author__tabs-item">Recent</li>
                <li className="author__tabs-item">Recent</li>
                <li className="author__tabs-item">Recent</li>
            </ul>
            <div className="author__content">
                <div className="browse__episodes-item">
                    <div className="browse__episodes-head">
                        <div className="browse__episodes-play"/>
                        <div className="browse__episodes-wrapper">
                            <div className="browse__episodes-title">
                                Episode 1
                            </div>
                            <div className="browse__episodes-subtitle">
                                About flow and mot...
                            </div>
                        </div>
                        <div className="browse__episodes-wrapper">
                            <div className="browse__episodes-time">
                                10:15:00
                            </div>
                            <div className="browse__episodes-size">
                                15mb
                            </div>
                        </div>
                        <div className="browse__episodes-download"/>
                    </div>
                    <div className="browse__episodes-text">
                        The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild
                        Question Marks...
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AuthorPage;