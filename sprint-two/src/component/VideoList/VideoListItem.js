import React from "react";
import { Link } from 'react-router-dom';

function VideoListItem(props) {
    // console.log(props);
    return (
        <li className="videos__item">
            <Link className="videos__link" to={"/video/" + props.videoData.id}>
            <div className="videos__item-boxOne">
                <img className="videos__item-image" src={props.videoData.image} alt="video" />
            </div>
            <div className="videos__item-boxTwo">
                <h4 className="videos__item-title">{props.videoData.title}</h4>
                <p className="videos__item-channel">{props.videoData.channel}</p>
            </div>
            </Link>
        </li>
    )
}

export default VideoListItem
