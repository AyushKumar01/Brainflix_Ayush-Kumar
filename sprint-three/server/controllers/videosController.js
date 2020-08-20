// load model
const videos = require('../models/videosModel');

// =========================================
// get video array
// function listVideos(_req, res) {
//     videos.list((videos) => {
//         const sideBarVideos = videos.map((video) => {
//             return {
//                         id: video.id,
//                         title: video.title,
//                         channel: video.channel,
//                         image: video.image
//                    }
//         })
//         res.json(sideBarVideos);
//         });
// }

function listVideos(_req, res) {
    videos.list((sideBarVideos) => {
        res.json(sideBarVideos);
        }
    );
}
// ==============================================
// get video by id
function getVideoByID(req, res) {
    videos.getByID(req, (mainVideo) => {
        res.json(mainVideo);
        }
    );
    // res.json(videos.getByID(req.params.id));
}

// post new comment====================
// function addProduct(req, res) {
//     if (!req.body.name || !req.body.price) {
//       res.status(400).send({
//         error: 'POST body must contain all requiredProperties',
//         requiredProperties: ['name', 'price'],
//       });
//     }
//     res.json(products.add(req.body));
//   }

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
  






// export functions
module.exports = {
    listVideos,
    getVideoByID,
    addComment
    // addVideo,
    // deleteVideo,
    // updateVideo,
  };