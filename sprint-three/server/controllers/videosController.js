// load model
const videos = require('../models/videosModel');

function listVideos(_req, res) {
    videos.list((sideBarVideos) => {
        res.json(sideBarVideos);
        }
    );
}

// get video by id
function getVideoByID(req, res) {
    videos.getByID(req, (mainVideo) => {
        res.json(mainVideo);
        }
    );
}

function addComment(req, res){
    if (!req.body.name || !req.body.comment) {
            res.status(400).send({
            error: 'POST body must contain all requiredProperties',
            requiredProperties: ['name', 'comment'],
            });
    }
    videos.addComment(req.body, req.params.id, (comment) => {
        res.json(comment);
        }
    );
}
  
function uploadVideo(req, res){
    if (!req.body.title || !req.body.description) {
            res.status(400).send({
            error: 'POST body must contain all requiredProperties',
            requiredProperties: ['title', 'description'],
            });
    }
    videos.uploadVideo(req.body);
        res.json("video saved");
}

function likeVideo(req, res) {
    videos.likeVideo(req.params.id, (likes) => {
        res.json(likes);
        }
    );
}

// export functions
module.exports = {
    listVideos,
    getVideoByID,
    addComment,
    uploadVideo,
    likeVideo
  };