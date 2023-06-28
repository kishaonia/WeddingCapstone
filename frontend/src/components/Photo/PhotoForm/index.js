// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
// import { createPhotoRequest } from "../../../store/photos";

// const CreatePhoto = () => {
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.session.user);
//   const userId = user?.id;
//   const [description, setDescription] = useState("");
//   const [url, setUrl] = useState("");
//   const [file, setFile] = useState(null);
//   const [urlError, setUrlError] = useState("");

//   const onSubmit = async (e) => {
//     e.preventDefault();

//     // Validate the photo URL
//     if (!isValidUrl(url)) {
//       setUrlError("Please enter a valid photo URL.");
//       return;
//     }

//     // Reset the URL error message
//     setUrlError("");

//     const newPhoto = {
//       description: description,
//       url: url,
//       file: file,
//     };

//     const success = await dispatch(createPhotoRequest(newPhoto, userId));
//     if (success) {
//       setUrl("");
//       setDescription("");
//       setFile();
//     }
//   };

//   const isValidUrl = (url) => {
//     const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
//     return urlPattern.test(url);
//   };

//   return (
//     <div className="registry-form-pop-up">
//       <form className="registry-form" onSubmit={onSubmit}>
//         <label className="registry-item-item">Post A Photo!</label>
//         <input
//           type="text"
//           placeholder="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           required
//         />
//         <br />
//         <label className="registry-item-url">Photo URL</label>
//         <input
//           id="photo-url"
//           type="url"
//           placeholder="Photo URL"
//           value={url}
//           onChange={(e) => setUrl(e.target.value)}
//           required
//         />
//         {urlError && <p className="error-message">{urlError}</p>}
//         <br />
//         <button className="submit-registries">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default CreatePhoto;

// import React, { useEffect } from "react";
// import { useHistory } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { createPhotoRequest } from "../../../store/photos";
// import S3 from "react-aws-s3";

// const CreatePhoto = (props) => {
//   window.Buffer = window.Buffer || require("buffer").Buffer;
//   const dispatch = useDispatch();
//   const history = useHistory();
//   const user = useSelector((state) => state.session.user);
//   const userId = user?.id;
//   const [description, setDescription] = useState("");
//   const [fileUrl, setFileUrl] = useState(props.photoFileUrl || "");
//   const [files, setFiles] = useState([]);

//   const config = {
//     bucketName: process.env.REACT_APP_BUCKET_NAME,
//     region: process.env.REACT_APP_REGION,
//     accessKeyId: process.env.REACT_APP_ACCESS,
//     secretAccessKey: process.env.REACT_APP_SECRET,
//   };

//   const ReactS3Client = new S3(config);

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     setFileUrl(URL.createObjectURL(selectedFile));
//   };

//   const uploadFile = async (file) => {
//     if (!file) {
//       console.error("No file selected.");
//       return;
//     }

//     const filename = file.name;

//     ReactS3Client.uploadFile(file, filename)
//       .then((data) => {
//         console.log(data.location);
//         setFileUrl(data.location);
//       })
//       .catch((err) => console.error(err));
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();

//     if (!fileUrl) {
//       console.error("No file selected.");
//       return;
//     }

//     const newPhoto = {
//       description: description,
//       fileUrl: fileUrl,
//     };

//     const success = await dispatch(createPhotoRequest(newPhoto, userId));
//     if (success) {
//       setFileUrl("");
//       setDescription("");
//       // history.push("/");
//     }
//   };

//   const fetchUploadedFiles = () => {
//     fetch(`https://practice-for-uploads.s3.amazonaws.com/`)
//       .then((response) => response.text())
//       .then((data) => {
//         const xmlParser = new DOMParser();
//         const xmlDoc = xmlParser.parseFromString(data, "application/xml");
//         const contents = xmlDoc.getElementsByTagName("Contents");
//         const urls = Array.from(contents).map((content) => {
//           const key = content.getElementsByTagName("Key")[0].textContent;
//           return `https://practice-for-uploads.s3.amazonaws.com/${key}`;
//         });
//         setFiles(urls);
//       })
//       .catch((error) => console.error(error));
//   };

//   useEffect(() => {
//     fetchUploadedFiles();

//     return () => {
//       if (fileUrl) {
//         URL.revokeObjectURL(fileUrl);
//       }
//     };
//   }, []);

//   return (
//     <div className="registry-form-pop-up">
//       <form className="registry-form" onSubmit={onSubmit}>
//         <label className="registry-item-item">Post A Photo!</label>
//         <input
//           type="text"
//           placeholder="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           required
//         />
//         <br />
//         <label className="registry-item-url">Choose a File</label>
//         <input
//           id="photo-file"
//           type="file"
//           accept="image/jpeg"
//           onChange={handleFileChange}
//           required
//         />
//         <br />
//         <button onClick={() => uploadFile(fileUrl)}>Upload to S3</button>
//         {/* <button className="submit-registries">Submit</button> */}
//       </form>

//       <div>
//         {/* <h3>Uploaded Files:</h3> */}
//         {files.map((url, index) => (
//           <a key={index} href={url} target="_blank" rel="noopener noreferrer">
//             {url}
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CreatePhoto;


// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
// import { createPhotoRequest } from "../../../store/photos";
// import S3 from "react-aws-s3";

// const CreatePhoto = () => {
//   window.Buffer = window.Buffer || require("buffer").Buffer;
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.session.user);
//   const userId = user?.id;
//   const [description, setDescription] = useState("");
//   const [file, setFile] = useState(null);
//   const [fileError, setFileError] = useState("");
//   const [uploadedUrl, setUploadedUrl] = useState("");

//   const onSubmit = async (e) => {
//     e.preventDefault();

//     if (!file) {
//       setFileError("Please choose a file.");
//       return;
//     }

//     setFileError("");

//     const newPhoto = {
//       description: description,
//       url: uploadedUrl, // Use the uploaded URL
//       file: file,
//     };

//     const success = await dispatch(createPhotoRequest(newPhoto, userId));
//     if (success) {
//       setDescription("");
//       setFile("");
//       setUploadedUrl("");
//     }
//   };

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//       uploadFile(selectedFile); // Upload the file when selected
//     }
//   };

//   const uploadFile = async (file) => {
//     const ReactS3Client = new S3(config);
//     try {
//       const res = await ReactS3Client.uploadFile(file);
//       setUploadedUrl(res.location); // Set the uploaded URL
//     } catch (error) {
//       console.log("File upload error:", error);
//     }
//   };

//   const config = {
//     bucketName: process.env.REACT_APP_BUCKET_NAME,
//     region: process.env.REACT_APP_REGION,
//     accessKeyId: process.env.REACT_APP_ACCESS,
//     secretAccessKey: process.env.REACT_APP_SECRET,
//   };

//   return (
//     <div className="registry-form-pop-up">
//       <form className="registry-form" onSubmit={onSubmit}>
//         <label className="registry-item-item">Post A Photo!</label>
//         <input
//           type="text"
//           placeholder="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           required
//         />
//         <br />
//         <label className="registry-item-url">Choose a File</label>
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleFileChange}
//           required
//         />
//         {fileError && <p className="error-message">{fileError}</p>}
//         <br />
//         <button className="submit-registries">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default CreatePhoto;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createPhotoRequest } from "../../../store/photos";
import S3 from "react-aws-s3";

const CreatePhoto = () => {
  window.Buffer = window.Buffer || require("buffer").Buffer;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const userId = user?.id;
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState("");
  const [uploadedUrl, setUploadedUrl] = useState("");
  const history = useHistory(); // Use useHistory hook

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setFileError("Please choose a file.");
      return;
    }

    setFileError("");

    const newPhoto = {
      description: description,
      url: uploadedUrl, // Use the uploaded URL
      file: file,
    };

    const success = await dispatch(createPhotoRequest(newPhoto, userId));
    if (success) {
      setDescription("");
      setFile(null);
      setUploadedUrl("");
      history.push("/"); // Navigate to the desired location
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      uploadFile(selectedFile); // Upload the file when selected
    }
  };

  const uploadFile = async (file) => {
    const ReactS3Client = new S3(config);
    try {
      const res = await ReactS3Client.uploadFile(file);
      setUploadedUrl(res.location); // Set the uploaded URL
    } catch (error) {
      console.log("File upload error:", error);
    }
  };

  const config = {
    bucketName: process.env.REACT_APP_BUCKET_NAME,
    region: process.env.REACT_APP_REGION,
    accessKeyId: process.env.REACT_APP_ACCESS,
    secretAccessKey: process.env.REACT_APP_SECRET,
  };

  return (
    <div className="photo-form-pop-up">
      <form className="photo-form" onSubmit={onSubmit}>
        <label className="registry-item-item">Post A Photo!</label>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <br />
        <label className="registry-item-url">Choose a File</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          required
        />
        {fileError && <p className="error-message">{fileError}</p>}
        <br />
        <button className="submit-registries">Submit</button>
      </form>
    </div>
  );
};

export default CreatePhoto;
