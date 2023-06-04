const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const { sequelize, Op } = require("sequelize");
const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const {
  User,
  Comment,
  songRequest,
  Registry,
  Photo,
} = require("../../db/models");

// GET /songRequests
router.get("/", requireAuth, async (req, res, next) => {
  try {
    const songs = await songRequest.findAll({
      include: [
        {
          model: User,
          attributes: ["id", "lastName", "firstName"],
        },
      ],
    });

    const SongRequests = []
    songs.forEach(song => {
      SongRequests.push(song.toJSON())
    })
    res.json({SongRequests})
    // const count = songRequests.length;
    // let sum = 0;
    // for (const songRequest of songRequests) {
    //   sum += songRequest.likes;
    // }

    // let avgNumLikes;
    // if (count > 0) {
    //   avgNumLikes = sum / count;
    // } else {
    //   avgNumLikes = "No current likes";
    // }

    res.json({
      songRequests: songRequests.map((songRequest) => ({
        ...songRequest.toJSON(),
        numLikes: songRequest.likes
      })),
    });
  } catch (error) {
    next(error);
  }
});

// Edit /songRequests
router.put("/:id", requireAuth, async (req, res, next) => {
  const { songName, artist, like  } = req.body;
    let updateSongRequest = await songRequest.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!updateSongRequest) {
      return res.json({
        message: "Song couldn't be found",
        statusCode: 404,
      });
    }
    // if (!artist) {
    //   return res.json({
    //     message: "Artist couldn't be found",
    //     statusCode: 404,
    //   });
    // }
    // if (!like) {
    //   return res.json({
    //     message: "Invalid like",
    //     statusCode: 404,
    //   });
    // }

    if (updateSongRequest.userId !== req.user.id) {
      return res.json({
        message: "Forbidden/not allowed",
        statusCode: 403,
      });
    }

    let successUpdate = await updateSongRequest.update({
      songName,
      artist,
      like
    });
    res.json(successUpdate);
  //  catch (error) {
  //   next(error);
  // }
});

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

// const express = require("express");
// const router = express.Router();
// const bcrypt = require("bcryptjs");
// const { check } = require("express-validator");
// const { sequelize, Op } = require("sequelize");
// const { handleValidationErrors } = require("../../utils/validation");
// const { setTokenCookie, requireAuth } = require("../../utils/auth");
// const { User, Comment, songRequest, Registry, Photo} = require("../../db/models");

// // GET /songRequests
// router.get('/', requireAuth, async(req, res, next) => {

//   let songName = await SongRequest.findAll({

//     include: [
//       {
//         model: User,
//         attributes: ['id', 'lastName', 'firstName']
//       }
//     ],

//   });

//   songName.numLikes = count;

//   let sum = await SongRequest.sum('likes', {
//       where: {
//           spotId: spotId
//       }
//   })

//   if (sum / count) {
//       songRequest.avgNumLikes = sum / count;
//   } else {
//     songRequest.avgNumLikes = "No current likes";
//   }

//   if (!songName){
//     return res.json({
//       message: "Song Name couldn't be found",
//       statusCode: 404,
//     });
//   }

//   let SongRequest = []

//   songName.forEach(songRequest => {
//     songRequest.push(songRequest.toJSON())
//   })

//   res.json({SongRequest})
// })

// // POST /songRequests
// router.put('/:id', requireAuth, async(req, res, next) => {
//   const {songName, artist, like} = req.body
//   let songRequest = await songRequest.findOne({
//     where: {
//       id: req.params.id
//     }
//   })

//   if (!songRequest){
//        return res.json({
//          message: "Song couldn't be found",
//          statusCode: 404,
//        });
//   }
//   if (!artist){
//     return res.json({
//       message: "Artist couldn't be found",
//       statusCode: 404,
//     });
// }
// if (!like){
//   return res.json({
//     message: "Invalid like",
//     statusCode: 404,
//   });
// }

//   if (songRequest.userId !== req.user.id) {
//    return res.json({
//      message: "Forbidden/not allowed",
//      statusCode: 403,
//    });
//   }

//   let updateOneSongRequest = await songRequest.update({
//     songName,
//     artist
//   })
//  res.json(updateOneSongRequest)
// })

// // DELETE /songRequests/:id
// router.delete("/:id", requireAuth, async (req, res, next) => {

//   let songRequest = await songRequest.findOne({
//     where: {
//       id: req.params.id,
//     },
//   });

//   if (!songRequest) {
//     return res.json({
//       message: "Song couldn't be found",
//       statusCode: 404,
//     });
//   }

//   if (songRequest.userId !== req.user.id) {
//     return res.json({
//       message: "Forbidden/not allowed",
//       statusCode: 403,
//     });
//   }

//   await songRequest.destroy()
//    res.json({
//      message: "Successfully deleted",
//      statusCode: 200,
//    });
// })

// module.exports = router;
