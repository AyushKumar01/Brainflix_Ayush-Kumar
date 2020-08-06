import React from 'react'
import VideoListItem from './VideoListItem';

function VideoList(props) {
    console.log('videos', props.sidebarVideos);
    return (
        <section className="videos">
            <ul className="videos__list">
                {props.sidebarVideos.map((video, id) => (
                <VideoListItem key={video.id} videoData={video} />))}
             
            </ul>
            
        </section>
    );
}

export default VideoList;
