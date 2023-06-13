// const express = require("express");
// const router = express.Router();
// const bcrypt = require("bcryptjs");
// const { check } = require("express-validator");
// const { sequelize, Op } = require("sequelize");
// const { handleValidationErrors } = require("../../utils/validation");
// const { setTokenCookie, requireAuth } = require("../../utils/auth");
// const { User, Comment, songRequest, Registry, Photo, Like, File } = require("../../db/models");

// // POST /files
// router.post('/:id', requireAuth, async (req, res, next) => {
//   // const { type, file } = req.body;
//   let files = await File.findOne({
//     where: {
//       id: req.params.id,
//     },
//   });
// }
// )


// // GET /files/:id
// router.get('/', requireAuth, async (req, res, next) => {
//   // const fileId = req.params.id;
//   let type = await File.findAll({
//     include: [
//       {
//         model: User,
//         attributes: ['id', 'lastName', 'firstName'],
//       }
//     ],
//   });

//   if (!type) {
//     return res.json({
//       message: "type couldn't be found",
//       statusCode: 404,
//     });
//   }

//   let Files = [];

//   type.forEach(file => {
//     Files.push(file.toJSON());
//   });

//   res.json({ File });
// });



// //   try {
// //     const file = await File.findByPk(fileId);

// //     if (file) {
// //       res.json({ file });
// //     } else {
// //       res.status(404).json({ error: 'File not found' });
// //     }
// //   } catch (error) {
// //     res.status(500).json({ error: 'Failed to fetch file' });
// //   }
// // });

// // // PUT /files/:id
// // router.put('/:id', async (req, res, next) => {
// //   const fileId = req.params.id;

// //   try {
// //     const file = await File.findByPk(fileId);

// //     if (file) {
// //       const { type, file } = req.body;

// //       file.type = type || file.type;
// //       file.file = file || file.file;

// //       await file.save();

// //       res.json({ file });
// //     } else {
// //       res.status(404).json({ error: 'File not found' });
// //     }
// //   } catch (error) {
// //     res.status(500).json({ error: 'Failed to update file' });
// //   }
// // });

// // DELETE /files/:id
// router.delete('/:id', requireAuth, async (req, res, next) => {
//   let file = await file.findOne({
//     where: {
//       id:req.params.id
//     }
//   });

//   if (!file) {
//     return res.json({
//       message: "File couldn't be found",
//       statusCode: 404,
//     });
//   }

//   if (file.userId !== req.user.id) {
//     return res.json({
//       message: "Forbidden/not allowed",
//       statusCode: 403,
//     });
//   }

//   await file.destroy();

//   res.json({
//     message: "Successfully deleted",
//     statusCode: 200,
//   });
// });


// module.exports = router;
