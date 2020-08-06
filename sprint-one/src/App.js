import React from 'react';
import { v4 as uuidv4 } from 'uuid';
// import logo from './logo.svg';
import './styles/app.css';
import Header from './component/Header';
import Hero from './component/Hero';
import Highlights from './component/Highlights';
import CommentForm from './component/CommentForm';
import Comments from './component/Comments';
import VideoList from './component/VideoList/VideoList';

const sidebarVideos = [
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
    title: 'Cruising DestinationIdeas', 
    channel: 'Timothy Austin', 
    image: '/images/video-list-7.jpg', 
},

{
    id: uuidv4(), 
    title: 'Train Travel On Track For Safety', 
    channel: 'Scotty Cranmer', 
    image: '/images/video-list-8.jpg', 
}
];


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Highlights />
      <CommentForm />
      <Comments />
      <VideoList sidebarVideos={sidebarVideos} />
    </div>
  );
}

export default App;
