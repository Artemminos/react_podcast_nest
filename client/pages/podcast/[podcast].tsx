import React from 'react';

const PodcastPage = () => {
    return (
        <section className={'podcast'}>
            <div className="podcast__header">
                <div className="podcast__header-inner">
                    <div className="podcast__header-title">
                        About flow and out motivations
                    </div>
                    <div className="podcast__header-text">
                        John doe & Amanda Smith
                    </div>
                    <div className="player">
                        <div className="player__inner">
                            <div className="player-undo"/>
                            <div className="player-play"/>
                            <div className="player-redo"/>
                        </div>
                    </div>
                </div>
                <div className="podcast__content">
                    <div className="podcast__tools">
                        <input className={'podcast__tools=volume'} type="text"/>
                        <div className="podcast__tools-wrapper">
                            <div className="podcast__tools-like">37 501</div>
                            <div className="podcast__tools-time">24:15:05</div>
                            <div className="podcast__tools-dislike">37 501</div>
                        </div>
                    </div>
                    <div className="podcast__info">
                        <div className="podcast__info-wrapper">
                            <div className="podcast__info-episode">Episode 2</div>
                            <div className="podcast__info-dowload">50 mb</div>
                            <div className="podcast__info-others"/>
                        </div>
                        <div className="podcast__info-text">
                            The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild
                            Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.
                        </div>
                    </div>
                    <div className="podcast__content">
                        <div className="podcast__content-title">
                            Episodes (10)
                        </div>
                        <div className="podcast__item">
                            <button className={'podcast__item-play'}/>
                            <div className="podcast__item-title">
                                Episode 1
                            </div>
                            <div className="podcast__item-date">
                                23 May 2019
                            </div>

                            <div className="podcast__item-time">
                                10:15:00
                            </div>

                            <div className="podcast__item-time">
                                10mb
                            </div>
                            <button className={'podcast__item-download'}/>
                        </div>
                    </div>



                </div>
            </div>
        </section>
    );
};

export default PodcastPage;