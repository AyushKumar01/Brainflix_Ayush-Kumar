import React from 'react'
import VideoListItem from './VideoListItem';
  
function VideoList(props) {
    return (
        <section className="videos">
            <h4 className="videos__heading">NEXT VIDEO</h4>
            <ul className="videos__list">
                {props.sidebarVideos && props.sidebarVideos.map((video) => (
                    <VideoListItem key={video.id} videoData={video} />
                ))}
            </ul>
        </section>
    );
}

export default VideoList;
