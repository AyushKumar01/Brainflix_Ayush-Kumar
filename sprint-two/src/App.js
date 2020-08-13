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
    mainVideo: {}
}

componentDidMount(){
    //axios call
    this.getVideos();
}

getVideos = () => {
    axios
      .get(`${SEARCH_URL}/${API_KEY}`)
      .then((response) =>
        this.setState({
            sidebarVideos: response.data,
            allVideos: response.data
        },
        () => {
            this.searchVideoByID(this.state.sidebarVideos[0].id);
            console.log(this.state.sidebarVideos[0].id)
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
        this.searchVideoByID(this.props.match.params.id);
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
      {/* <Switch>  
        <Route path="/" exact component={Home}/>
        <Route path="/video/:id" render={props => { return <Home {...props} /> }}/>
        <Route path="/Upload" component={Upload} />
        <Route path="/*" component={NotFound} />
      </Switch> */}
    </>
  );
 }
}

export default App;
