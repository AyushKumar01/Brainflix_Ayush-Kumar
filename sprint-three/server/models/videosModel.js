const fs = require('fs'); // file system module
const path = require('path');
const { v4: uuidv4 } = require('uuid');
// const { load } = require('dotenv/types');

// json data to read and write
const videosFile = path.join(__dirname, '../db/videos.json');

// ===================================================
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

// function list(callback) {
//     fs.readFile(videosFile, (error, data) => { 
//         if (error) throw error;
//         const videos = JSON.parse(data);
//         callback(videos);         
//     });
// }

// =================================================

// get video by id param /videos/:id
// function getByID(callback) {
//     const videosArr = list();
//     return videosArr.filter((video) => video.id === id);
// }

// ===================================================
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

// app.get('./vhfghiu', (req, res) => {
// const videoId = req.params.id;
//     loadVideoData ((videos) => {
//         const mainVideo = videos.findIndex((video) => video.id === videoId);
//             if (mainVideo !== -1) {
//             res.json(videos[mainVideo]);
//             } else {
//             res.status(404).json({ message: `video with the id ${videoId} not found` });
//             }
//     });
// });


// add comment to json file=============
// function add(data) {
//     const productsArr = list();
//     const product = new Product(data.name, data.price);
//     productsArr.push(product);
//     fs.writeFileSync(productsFile, JSON.stringify(productsArr));
//     return productsArr;
//   }

function Comment(name, comment) {
    this.id = uuidv4();
    this.name = name;
    this.comment = comment;
    this.timestamp = new Date().getTime();
    this.likes = 0;
}

function addComment(data, id, callback){
    const videoId = id;
    loadVideos((videos) => {
        const comment = new Comment(data.name, data.comment);
        const videoIndex = videos.findIndex((video) => video.id === videoId);
        if (videoIndex !== -1) {
            const selectedVideo = videos[videoIndex];
            selectedVideo.comments.push(comment);
            writeComment(videos);
            callback(comment);
        } else {
            callback({ message: `video with the id ${videoId} not found` });
        }
    });    
}

function writeComment(videos) {
    fs.writeFile(videosFile, JSON.stringify(videos), (error) => {
          if (error) console.log(error);
          console.log("file has been saved");
        }
      );
}


// export multiple functions
module.exports = { list, getByID, addComment };
//add, getByID, deleteVideo, updateVideos