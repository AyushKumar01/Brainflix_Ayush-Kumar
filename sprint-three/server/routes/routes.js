const express = require('express');
const router = express.Router();
const videosController = require('../controllers/videosController'); // import controller

// video routes
router.get('/', videosController.listVideos);
router.get('/:id', videosController.getVideoByID);
router.post('/:id/comments', videosController.addComment);
router.post('/', videosController.uploadVideo);
router.put('/:id/likes', videosController.likeVideo);
// router.delete('/:id', videosController.deleteVideo);

// export routes
module.exports = router;
