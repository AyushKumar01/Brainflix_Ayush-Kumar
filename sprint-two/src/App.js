import React from 'react';
import './styles/app.css';
import Header from './component/Header';
import Hero from './component/Hero';
import Main from './component/Main';
import VideoList from './component/VideoList/VideoList';
import { API_KEY } from './component/env/env_variable';
import axios from "axios";

const SEARCH_URL  = "https://project-2-api.herokuapp.com/videos";

class App extends React.Component {
  state = {
    sideBarVideos: [],
    mainVideo: {},
    allVideos: []
}

componentDidMount(){
  // console.log(this.props.match.params.id)
  // this.searchVideoByID(this.props.match.params.id);
    //axios call
    // let id = this.props.match.params.id || "1af0jruup5gu"
    this.getVideos();
}

handleCommentSubmit(event){
  event.preventDefault();
  console.log(event.target.reviewerComment.value);

  const videoId = this.state.mainVideo.id;

  // axios.post  take the api what type of post (doc)
  // .then searchVideoByID() iys going to update my state
  // 
  const comment = { "name": "Ayush Kumar", "comment": event.target.reviewerComment.value };
  axios
      .post(`${SEARCH_URL}/${videoId}/comments${API_KEY}`, comment)
      .then((response) =>
          this.searchVideoByID(videoId)
      ); 
}

getVideos = () => {
    let id = this.props.match.params.id || "1af0jruup5gu"
    axios
      .get(`${SEARCH_URL}/${API_KEY}`)
      .then((response) =>
        this.setState({
            sidebarVideos: response.data,
            allVideos: response.data
        },
        () => {
            // this.searchVideoByID(this.state.sidebarVideos[0].id);
            this.searchVideoByID(id);
            // console.log(this.state.sidebarVideos[0].id)
            // console.log(id)
        })
      );
}

searchVideoByID = (ID) => {
    axios.get(`${SEARCH_URL}/${ID}/${API_KEY}`).then((response) =>
      this.setState({
        mainVideo: response.data,
        sidebarVideos : this.state.allVideos.filter(video => video.id !== ID)
      })
    );
  };

componentDidUpdate(prevProps){
    if(prevProps.match !== this.props.match){
      // console.log("componentDidUpdate")
        // this.searchVideoByID(this.props.match.params.id);


        // let id = this.props.match.params.id || "1af0jruup5gu"
        this.getVideos();
    }
}

render (){
  return (
    <>
      <Header />
      <Hero mainVideo={this.state.mainVideo} />
      <div className="lowerDom">
        <Main mainVideo={this.state.mainVideo} handleCommentSubmit={this.handleCommentSubmit.bind(this)} />
        <VideoList sidebarVideos={this.state.sidebarVideos} />
      </div>
    </>
  );
 }
}

export default App;
