// const express = require("express");
// const router = express.Router();
// const bcrypt = require("bcryptjs");
// const { check, validationResult } = require("express-validator");
// const { sequelize, Op } = require("sequelize");
// const { handleValidationErrors } = require("../../utils/validation");
// const { setTokenCookie, requireAuth } = require("../../utils/auth");
// const {
//   User,
//   Comment,
//   songRequest,
//   Registry,
//   Photo,
// } = require("../../db/models");
// // GET /songRequests
// // GET /songRequests/:id
// router.get("/:id", requireAuth, async (req, res, next) => {
//   try {
//     let songRequestId = req.params.id;

//     let songRequest = await songRequest.findOne({
//       where: {
//         id: songRequestId,
//       },
//     });

//     if (!songRequest) {
//       return res.json({
//         message: "Song request not found",
//         statusCode: 404,
//       });
//     }

//     if (songRequest.userId !== req.user.id) {
//       return res.json({
//         message: "Forbidden/not allowed",
//         statusCode: 403,
//       });
//     }

//     res.json(songRequest);
//   } catch (error) {
//     next(error);
//   }
// });

// // Edit /songRequests
// router.put("/:id", requireAuth, async (req, res, next) => {
//   const { songName, artist, like, file  } = req.body;
//     let updateSongRequest = await songRequest.findOne({
//       where: {
//         id: req.params.id,
//       },
//     });

//     if (!updateSongRequest) {
//       return res.json({
//         message: "Song couldn't be found",
//         statusCode: 404,
//       });
//     }
//     // if (!artist) {
//     //   return res.json({
//     //     message: "Artist couldn't be found",
//     //     statusCode: 404,
//     //   });
//     // }
//     // if (!like) {
//     //   return res.json({
//     //     message: "Invalid like",
//     //     statusCode: 404,
//     //   });
//     // }

//     if (updateSongRequest.userId !== req.user.id) {
//       return res.json({
//         message: "Forbidden/not allowed",
//         statusCode: 403,
//       });
//     }

//     let successUpdate = await updateSongRequest.update({
//       songName,
//       artist,
//     });
//     res.json(successUpdate);
//   //  catch (error) {
//   //   next(error);
//   // }
// });

// // DELETE /songRequests/:id
// router.delete("/:id", requireAuth, async (req, res, next) => {
//   try {
//     let deleteSongRequest = await songRequest.findOne({
//       where: {
//         id: req.params.id,
//       },
//     });
//     if (!deleteSongRequest) {
//       return res.json({
//         message: "Song couldn't be found",
//         statusCode: 404,
//       });
//     }

//     if (deleteSongRequest.userId !== req.user.id) {
//       return res.json({
//         message: "Forbidden/not allowed",
//         statusCode: 403,
//       });
//     }

//     await deleteSongRequest.destroy();
//     res.json({
//       message: "Successfully deleted",
//       statusCode: 200,
//     });
//   } catch (error) {
//     next(error);
//   }
// });

// module.exports = router;

// // const express = require("express");
// // const router = express.Router();
// // const bcrypt = require("bcryptjs");
// // const { check } = require("express-validator");
// // const { sequelize, Op } = require("sequelize");
// // const { handleValidationErrors } = require("../../utils/validation");
// // const { setTokenCookie, requireAuth } = require("../../utils/auth");
// // const { User, Comment, songRequest, Registry, Photo} = require("../../db/models");

// GET /songRequests

// // // DELETE /songRequests/:id
// // router.delete("/:id", requireAuth, async (req, res, next) => {

// //   let songRequest = await songRequest.findOne({
// //     where: {
// //       id: req.params.id,
// //     },
// //   });

// //   if (!songRequest) {
// //     return res.json({
// //       message: "Song couldn't be found",
// //       statusCode: 404,
// //     });
// //   }

// //   if (songRequest.userId !== req.user.id) {
// //     return res.json({
// //       message: "Forbidden/not allowed",
// //       statusCode: 403,
// //     });
// //   }

// //   await songRequest.destroy()
// //    res.json({
// //      message: "Successfully deleted",
// //      statusCode: 200,
// //    });
// // })

// // module.exports = router;
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { check } = require("express-validator");
const { sequelize, Op } = require("sequelize");
const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User, Comment, songRequest, Registry, Photo } = require("../../db/models");

// GET /api/songRequests - Retrieve all song requests
router.get('/', requireAuth, async (req, res, next) => {

  let songName = await songRequest.findAll({

    include: [
      {
        model: User,
        attributes: ['id', 'lastName', 'firstName']
      }
    ],

  });

 

  let SongRequests = []

  songName.forEach(songRequest => {
    SongRequests.push(songRequest.toJSON())
  })

  res.json({ SongRequests })
})


// router.post('/:id/songRequests', requireAuth, async(req, res, next) => {
//   const {song} = req.body
//   let songrequest = await Registry.findOne({
//     where: {
//       id: req.params.id
//     }
//   })
//   if (!songrequest){
//       return res.json({
//         message: "Song Request couldn't be found",
//         statusCode: 404,
//       });
//   }


//   const newSongRequest = await songrequest.createSongRequest({
//     userId: req.user.id,
//    songrequestId: req.params.id,
//     song: song,
//   })
//   res.json(newSongRequest)
// })

// GET /api/songRequests/:id - Retrieve a specific song request by ID
router.get('/:id', async (req, res, next) => {
  try {
    const songRequestId = req.params.id;
    const songRequest = await songRequest.findOne({ where: { id: songRequestId } });
    if (songRequest) {
      res.json(songRequest);
    } else {
      res.status(404).json({ error: 'Song request not found.' });
    }
  } catch (error) {
    next(error);
  }
});


// PUT /songRequests
router.put('/:id', requireAuth, async(req, res, next) => {
  const {songName, artist} = req.body
  let songRequest = await songRequest.findOne({
    where: {
      id: req.params.id
    }
  })

  if (!songRequest){
       return res.json({
         message: "Song couldn't be found",
         statusCode: 404,
       });
  }

  if (songRequest.userId !== req.user.id) {
   return res.json({
     message: "Forbidden/not allowed",
     statusCode: 403,
   });
  }

  let updateSongRequest = await songRequest.update({
    songName,
    artist
  })
  
 res.json(updateSongRequest)
})



// DELETE /songRequests/:id
router.delete("/:id", requireAuth, async (req, res, next) => {
  try {
    let deleteSongRequest = await songRequest.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!deleteSongRequest) {
      return res.json({
        message: "Song couldn't be found",
        statusCode: 404,
      });
    }

    if (deleteSongRequest.userId !== req.user.id) {
      return res.json({
        message: "Forbidden/not allowed",
        statusCode: 403,
      });
    }

    await deleteSongRequest.destroy();
    res.json({
      message: "Successfully deleted",
      statusCode: 200,
    });
  } catch (error) {
    next(error);
  }
});


module.exports = router;