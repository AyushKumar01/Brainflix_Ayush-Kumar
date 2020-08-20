const express = require('express');
const router = express.Router();
const videosController = require('../controllers/videosController'); // import controller

// video routes
router.get('/', videosController.listVideos);
router.get('/:id', videosController.getVideoByID);
router.post('/:id/comments', videosController.addComment);
// router.put('/:id', videosController.updateVideo);
// router.delete('/:id', videosController.deleteVideo);

// export routes
module.exports = router;
