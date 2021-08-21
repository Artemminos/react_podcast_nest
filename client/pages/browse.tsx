import React from 'react';
import Search from "@/components/search/search";
import PodcastItem from "@/components/podcast_item/podcast_item";

const Browse = () => {
    return (
        <section className={'browse'}>
            <h1 className="browse__title">
                Browse
            </h1>
            <Search/>
            <div className="browse__choice">
                <div className="browse__choice-item">
                    <div className="browse__choice-icon"/>
                    <div className="browse__choice-text">Categories</div>
                </div>
                <div className="browse__choice-item">
                    <div className="browse__choice-icon"/>
                    <div className="browse__choice-text">Categories</div>
                </div>
                <div className="browse__choice-item">
                    <div className="browse__choice-icon"/>
                    <div className="browse__choice-text">Categories</div>
                </div>
                <div className="browse__choice-item">
                    <div className="browse__choice-icon"/>
                    <div className="browse__choice-text">Categories</div>
                </div>
            </div>
            <div className="browse__content">
                <div className="browse__header">
                    Categories (4)
                </div>
                <div className="browse__categories">
                    <div className="browse__categories-item">
                        <div className="browse__categories-icon"/>
                        <div className="browse__categories-text">
                            Art and entertaiment
                        </div>
                    </div>
                    <div className="browse__categories-item">
                        <div className="browse__categories-icon"/>
                        <div className="browse__categories-text">
                            Art and entertaiment
                        </div>
                    </div>
                    <div className="browse__categories-item">
                        <div className="browse__categories-icon"/>
                        <div className="browse__categories-text">
                            Art and entertaiment
                        </div>
                    </div>
                    <div className="browse__categories-item">
                        <div className="browse__categories-icon"/>
                        <div className="browse__categories-text">
                            Art and entertaiment
                        </div>
                    </div>
                </div>
                <div className="browse__topics">
                    <div className="browse__topics-item">
                        <img className="browse__topics-image"/>
                        <div className="browse__topics-title">
                            Positive psychology
                            and our motivations
                        </div>
                        <div className="browse__topics-info">
                            <p className="browse__topics-author">Authors: 124</p>
                            <p className="browse__topics-podcasts">Podcasts:7 282</p>
                        </div>
                    </div>
                    <div className="browse__topics-item">
                        <img className="browse__topics-image"/>
                        <div className="browse__topics-title">
                            Positive psychology
                            and our motivations
                        </div>
                        <div className="browse__topics-info">
                            <p className="browse__topics-author">Authors: 124</p>
                            <p className="browse__topics-podcasts">Podcasts:7 282</p>
                        </div>
                    </div>
                </div>
                <div className="browse__authors">
                    <div className="browse__authors-item">
                        <img src="" alt="" className="browse__authors-photo"/>
                        <div className="browse__authors-info">
                            <div className="browse__authors-name">
                                Robert Dugoni
                            </div>
                            <div className="browse__authors-podcasts">
                                Podcasts: 7 276
                            </div>
                        </div>
                    </div>
                    <div className="browse__authors-item">
                        <img src="" alt="" className="browse__authors-photo"/>
                        <div className="browse__authors-info">
                            <div className="browse__authors-name">
                                Robert Dugoni
                            </div>
                            <div className="browse__authors-podcasts">
                                Podcasts: 7 276
                            </div>
                        </div>
                    </div>
                </div>
                <div className="browse__podcasts">
                    <PodcastItem type={'square'}/>
                    <PodcastItem type={'square'}/>

                </div>
                <div className="browse__episodes">
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
            </div>
        </section>
    );
};

export default Browse;