const fs = require('fs'); // file system module
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// json data to read and write
const videosFile = path.join(__dirname, '../db/videos.json');

function list(callback){
    loadVideos((videos) => {
    const sideBarVideos = videos.map((video) => {
        return {
                    id: video.id,
                    title: video.title,
                    channel: video.channel,
                    image: video.image
               }
        })
        callback(sideBarVideos);
    });
}

function loadVideos(callback) {
    fs.readFile(videosFile, (error, data) => { 
        if (error) throw error;
        const videos = JSON.parse(data);
        callback(videos);         
    });
}

function getByID(req, callback){
    const videoId = req.params.id;
    loadVideos((videos) => {
    const videoIndex = videos.findIndex((video) => video.id === videoId);
    if (videoIndex !== -1) {
        callback(videos[videoIndex]);
        } else {
        callback({ message: `video with the id ${videoId} not found` });
        }
    });
}

function Video(data) {
    this.id = uuidv4();
    this.channel = "Brain Station";
    this.image = '../images/upload.jpg';
    this.views = "786";
    this.likes = "101";
    this.duration = "5:00";
    this.video = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
    this.timestamp = new Date().getTime();
    this.title = data.title;
    this.description = data.description;
    this.comments = [
                        {
                        name: "Micheal Lyons",
                        comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
                        id: "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
                        likes: 0,
                        timestamp: 1545162149000
                        },
                        {
                        name: "Gary Wong",
                        comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
                        id: "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
                        likes: 0,
                        timestamp: 1544595784046
                        },
                        {
                        name: "Theodore Duncan",
                        comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
                        id: "993f950f-df99-48e7-bd1e-d95003cc98f1",
                        likes: 0,
                        timestamp: 1542262984046
                        }
                    ]
}


// common function
function writeNewDataInFile(videos) {
    fs.writeFile(videosFile, JSON.stringify(videos), (error) => {
          if (error) console.log(error);
          console.log("file has been saved");
        }
      );
}

function Comment(name, comment) {
    this.id = uuidv4();
    this.name = name;
    this.comment = comment;
    this.timestamp = new Date().getTime();
    this.likes = 0;
}

function addComment(data, id, callback){
    loadVideos((videos) => {
        const comment = new Comment(data.name, data.comment);
        const videoIndex = videos.findIndex((video) => video.id === id);
        if (videoIndex !== -1) {
            const selectedVideo = videos[videoIndex];
            selectedVideo.comments.push(comment);
            writeNewDataInFile(videos);
            callback(comment);
        } else {
            callback({ message: `video with the id ${id} not found` });
        }
    });    
}


function uploadVideo(data){
    loadVideos((videos) => {
        const newVideo = new Video(data);
        videos.push(newVideo);
        writeNewDataInFile(videos);
    });
}

function likeVideo(id, callback){
    loadVideos((videos) => {
        const videoIndex = videos.findIndex((video) => video.id === id);
        if (videoIndex !== -1) {
            const selectedVideo = videos[videoIndex];
            console.log(selectedVideo.likes);
            selectedVideo.likes++;
            writeNewDataInFile(videos);
            callback({ likes: selectedVideo.likes });
        } else {
            callback({ message: `video with the id ${id} not found` });
        }
    });    
}

// export multiple functions
module.exports = { list, getByID, addComment, uploadVideo, likeVideo };