// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { createFileRequest } from "../../store/files";

// const File = () => {
//   const dispatch = useDispatch();
//   const [selectedFiles, setSelectedFiles] = useState([]);

//   const handleFileChange = (event) => {
//     const files = Array.from(event.target.files);
//     setSelectedFiles(files);
//     dispatch(createFileRequest(files));
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
     
//         <div>
//           <p>Selected files:</p>
//           {/* <ul>
//             {selectedFiles.map((file, index) => (
//               <li key={index}>{file.name}</li>
//             ))}
//           </ul> */}
//         </div>

//     </div>
//   );
// };

// export default File;
