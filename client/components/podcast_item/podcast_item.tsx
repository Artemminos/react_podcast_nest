import React from 'react';
import Button from "@/components/button/button";

interface PodcastProps {
    type: string;
    status?: boolean;
}


const PodcastItem: React.FC<PodcastProps> = ({type, status = false}) => {
    return (
        <div className="item__podcast" style={{backgroundImage: 'url("/_next/static/podcast-bg-1.png")'}}>
            {status && <div className="item__podcast-status">
                NEW
            </div>}

            <div className="item__podcast-inner">
                <div className="item__podcast-title">
                    About flow and our motivations
                </div>
                <div className="item__podcast-text">
                    <div className='item__podcast-wrapper'>
                        <div className='item__podcast-timeblock'>
                            <p className="item__podcast-date">
                                23.05.2019
                            </p>
                            <p className="item__podcast-time">
                                24:15:05
                            </p>
                        </div>
                        <p className="item__podcast-author">
                            <img className="item__podcast-author-avatar"
                                 src="https://i.pinimg.com/236x/de/a5/56/dea5561b71ed9404b36274ba28a6bf80.jpg" alt=""/>
                            Harold Mccoy
                        </p>
                    </div>
                    <Button color={'dark_red'} type={'play'}/>
                </div>

            </div>
        </div>
    );
};

export default PodcastItem;