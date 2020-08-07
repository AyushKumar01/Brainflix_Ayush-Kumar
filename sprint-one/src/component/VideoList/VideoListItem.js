import React from 'react'

function VideoListItem(props) {
    return (
        <li className="videos__item">
            <div className="videos__item-boxOne">
                <img  className="videos__item-image" src={props.videoData.image} />
            </div>
            <div className="videos__item-boxTwo">
                <h4 className="videos__item-title">{props.videoData.title}</h4>
                <p className="videos__item-channel">{props.videoData.channel}</p>
            </div>
        </li>
    )
}

export default VideoListItem
