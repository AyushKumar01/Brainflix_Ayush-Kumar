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
    sidebarVideos: [],
    mainVideo: {}
  }

  componentDidMount(){
      this.getVideos();
  }

  getVideos = () => {
      let id = this.props.match.params.id || "1af0jruup5gu";
      axios
        .get(`${SEARCH_URL}/${API_KEY}`)
        .then((response) =>
          this.setState({
            sidebarVideos: response.data
          },
          () => {
              this.searchVideoByID(id);
          })
        );
  }

  searchVideoByID = (ID) => {
      axios.get(`${SEARCH_URL}/${ID}/${API_KEY}`).then((response) =>
        this.setState({
          mainVideo: response.data,
          sidebarVideos : this.state.sidebarVideos.filter(video => video.id !== ID)
        })
      );
    };

  componentDidUpdate(prevProps){
      if(prevProps.match !== this.props.match){
          this.getVideos();
      }
  }

  handleCommentSubmit = ((event) => {
    event.preventDefault();
    const videoId = this.state.mainVideo.id;
    const comment = { "name": "Ayush Kumar", "comment": event.target.reviewerComment.value };
    axios
        .post(`${SEARCH_URL}/${videoId}/comments${API_KEY}`, comment)
        .then((response) =>
        {
          let mainVideoNew = {...this.state.mainVideo}
          mainVideoNew.comments = [...this.state.mainVideo.comments, response.data];
          this.setState({mainVideo: mainVideoNew});      
        }
        );
        event.target.reviewerComment.value = "";   
    }
  );

  render (){
    return (
      <>
        <Header />
        <Hero mainVideo={this.state.mainVideo} />
        <div className="lowerDom">
          <Main mainVideo={this.state.mainVideo} handleCommentSubmit={this.handleCommentSubmit} />
          <VideoList sidebarVideos={this.state.sidebarVideos} />
        </div>
      </>
    );
  }
}

export default App;
