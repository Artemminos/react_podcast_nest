import React from 'react';
import PodcastItem from "@/components/podcast_item/podcast_item";

const Topic = () => {
    return (
        <section className={'topic'}>
            <div className="topic__header">
                <div className="topic__header-title">
                    Positive psychology
                </div>
                <div className="topic__header-info">
                    <p>Authors 124</p>
                    <p>Podcasts 7 282</p>
                </div>
            </div>
            <div className="topic__subscribe">
                <button className="topic__subscribe-btn">Subscribe</button>
                <p className="topic__subscribe-info">+4.7k followers</p>
            </div>
            <ul className="topic__tabs">
                <li className="topic__tabs-item">Recent</li>
                <li className="topic__tabs-item">Authors</li>
                <li className="topic__tabs-item">Popular</li>
            </ul>
            <div className="topic__content">
                <PodcastItem type={'square'}/>
                <PodcastItem type={'square'}/>
                <PodcastItem type={'square'}/>
            </div>
        </section>
    );
};

export default Topic;