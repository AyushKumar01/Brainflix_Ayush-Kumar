import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './styles/app.css';
import Header from './component/Header';
import Hero from './component/Hero';
import Main from './component/Main';
import VideoList from './component/VideoList/VideoList';
import { format } from 'timeago.js';

class App extends React.Component {
    state = { 
                sidebarVideos: [
                                    {
                                        id: uuidv4(), 
                                        title: 'Become A Travel Pro In One Easy Lesson…', 
                                        channel: 'Scotty Cranmer', 
                                        image: '/images/video-list-1.jpg',
                                    },
                                    {
                                        id: uuidv4(), 
                                        title: 'Les Houches The Hidden Gem Of The Chamonix…', 
                                        channel: 'Scotty Cranmer', 
                                        image: '/images/video-list-2.jpg',
                                    },
                                    {
                                        id: uuidv4(),
                                        title: 'Travel Health Useful Medical Information For', 
                                        channel: 'Scotty Cranmer', 
                                        image: '/images/video-list-3.jpg', 
                                    },
                                    {
                                        id: uuidv4(),
                                        title: 'Cheap Airline Tickets Great Ways To Save', 
                                        channel: 'Emily Harper', 
                                        image: '/images/video-list-4.jpg', 
                                    },
                                    {
                                        id: uuidv4(),
                                        title: 'Take A Romantic Break In A Boutique Hotel', 
                                        channel: 'Ethan Owen', 
                                        image: '/images/video-list-5.jpg', 
                                    },
                                    {
                                        id: uuidv4(), 
                                        title: 'Choose The Perfect Accommodations', 
                                        channel: 'Lydia Perez', 
                                        image: '/images/video-list-6.jpg',
                                    },
                                    {
                                        id: uuidv4(), 
                                        title: 'Cruising Destination Ideas', 
                                        channel: 'Timothy Austin', 
                                        image: '/images/video-list-7.jpg', 
                                    },
                                    {
                                        id: uuidv4(), 
                                        title: 'Train Travel On Track For Safety', 
                                        channel: 'Scotty Cranmer', 
                                        image: '/images/video-list-8.jpg', 
                                    }
                                ],
                mainVideo : {
                    id:  uuidv4(),
                    title: 'BMX Rampage: 2018 Highlights',
                    description:    'On a gusty day in Southern Utah, a group of 25 \
                                    daring mountain bikers blew the doors off what is \
                                    possible on two wheels, unleashing some of the \
                                    biggest moments the sport has ever seen. While \
                                    mother nature only allowed for one full run before \
                                    the conditions made it impossible to ride, that was \
                                    all that was needed for event veteran Kyle Strait, \
                                    who won the event for the second time -- eight years \
                                    after his first Red Cow Rampage title',
                    channel: 'By Red Cow',
                    image: '/images/video-list-0.jpg',
                    views: '1,001,023',
                    likes: '110,985',
                    duration: '0:00 / 0:42',
                    video: 'type of <string>',
                    timestamp: format('08/07/2018', 'en_US'),
                    comments: [
                        {
                            'id': uuidv4(),
                            'name':'Micheal Lyons',
                            'timestamp': format('08/08/2020', 'en_US'),
                            'comment': 'They BLEW the ROOF off at their last show, \
                                            once everyone started figuring out they were going. \
                                            This is still simply the greatest opening of a concert \
                                            I have EVER witnessed.',
                        },
                        {
                            'id': uuidv4(),
                            'name':'Gary Wong',
                            'timestamp': format('08/05/2020', 'en_US'),
                            'comment': 'Every time I see him shred I feel so \
                                            motivated to get off my couch and \
                                            hop on my board. He’s so talented! I \
                                            wish I can ride like him one day so I \
                                            can really enjoy myself!',
                        },
                        {
                            'id': uuidv4(),
                            'name':'Theodore Duncan',
                            'timestamp': format('07/08/2020', 'en_US'),
                            'comment': 'How can someone be so good!!! \
                                            You can tell he lives for this and \
                                            loves to do it every day. Everytime I \
                                            see him I feel instantly happy! He’s \
                                            definitely my favorite ever!',
                        },
                    ] 
                }               
            }

render (){
  return (
    <>
      <Header />
      <Hero mainVideo={this.state.mainVideo} />
      <div className="lowerDom">
      <Main mainVideo={this.state.mainVideo} />
      <VideoList sidebarVideos={this.state.sidebarVideos} />
      </div>
    </>
  );
 }
}

export default App;
