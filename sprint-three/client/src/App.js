import React from 'react';
import './styles/app.css';
import Hero from './component/Hero';
import Main from './component/Main';
import VideoList from './component/VideoList/VideoList';
import axios from "axios";

const SEARCH_URL  = "http://localhost:5000/videos";
class App extends React.Component {
  state = {
    sidebarVideos: [],
    mainVideo: {}
  }

  componentDidMount(){
      this.getVideos();
  }

   // get request function
  getVideos = () => {
      let id = this.props.match.params.id || "1af0jruup5gu";
      axios
        .get(`${SEARCH_URL}`)
        .then((response) =>
          this.setState({
            sidebarVideos: response.data
          },
          () => {
              this.searchVideoByID(id);
          })
        );
  }
  // for main video in banner
  searchVideoByID = (ID) => {
      axios.get(`${SEARCH_URL}/${ID}`).then((response) =>
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

   //  this function for post new comment.
  handleCommentSubmit = ((event) => {
    event.preventDefault();
    const videoId = this.state.mainVideo.id;
    const comment = event.target.reviewerComment.value;
    if(comment){
      const commentObj = { "name": "Ayush Kumar", "comment": comment };
      axios
          .post(`${SEARCH_URL}/${videoId}/comments`, commentObj)
          .then((response) =>
          {
            let mainVideoNew = {...this.state.mainVideo}
            mainVideoNew.comments = [...this.state.mainVideo.comments, response.data];
            this.setState({mainVideo: mainVideoNew});      
          }
          );
          event.target.reviewerComment.value = "";
      }
    else {
            alert('Comment must be filled out');
        }  
    }
  );

  handleLikesClick = ((event) => {
    console.log(`click`)
    event.preventDefault();
    const videoId = this.state.mainVideo.id;
    axios
        .put(`${SEARCH_URL}/${videoId}/likes`)
        .then((response) => response.data)
        .then((data) => {
          let mainVideoNew = {...this.state.mainVideo};
          mainVideoNew.likes = data.likes;
          this.setState({mainVideo: mainVideoNew});    
        });  
    }
  );

  render (){
    return (
      <>
        <Hero mainVideo={this.state.mainVideo} />
        <div className="lowerDom">
          <Main mainVideo={this.state.mainVideo} handleCommentSubmit={this.handleCommentSubmit} handleLikesClick={this.handleLikesClick} />
          <VideoList sidebarVideos={this.state.sidebarVideos} />
        </div>
      </>
    );
  }
}

export default App;
