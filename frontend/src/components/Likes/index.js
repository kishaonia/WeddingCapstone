// import React, { useState } from "react";
// import { createLikeRequest, deleteLikeRequest } from "../../store/likes";

// function LikeDislike() {
//   const [liked, setLiked] = useState(false);
//   const [count, setCount] = useState(0);

//   const handleLike = async () => {
//     // Simulating the creation of a like
//     await createLikeRequest();
//     setLiked(true);
//     setCount(count + 1);
//   };

//   const handleUnlike = async () => {
//     // Simulating the deletion of a like
//     await deleteLikeRequest();
//     setLiked(false);
//     setCount(count - 1);
//   };

//   const handleLikeClick = async () => {
//     // Prevent liking your own post
//     if (liked) {
//       handleUnlike();
//     } else {
//       handleLike();
//     }
//   };

//   return (
//     <div>
//       <button
//         className={liked ? "unlike-button" : "like-button"}
//         onClick={handleLikeClick}
//         disabled={liked} // Disable the button if already liked
//       >
//         <i className={liked ? "fas fa-thumbs-down" : "fas fa-thumbs-up"} />{" "}
//         {liked ? "Unlike" : "Like"}
//       </button>
//       <p>Likes: {count}</p>
//     </div>
//   );
// }

// export default LikeDislike;
