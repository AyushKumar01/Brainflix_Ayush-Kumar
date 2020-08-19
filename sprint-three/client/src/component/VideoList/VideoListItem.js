import React from "react";
import { Link } from 'react-router-dom';

function VideoListItem(props) {
    const { id, image, title, channel } = props.videoData;
    return (
        <li className="videos__item">
            <Link className="videos__link" to={"/video/" + id}>
                <div className="videos__item-left">
                    <img className="videos__item-image" src={image} alt="video" />
                </div>
                <div>
                    <h4 className="videos__item-title">{title}</h4>
                    <p className="videos__item-channel">{channel}</p>
                </div>
            </Link>
        </li>
    )
}

export default VideoListItem;
