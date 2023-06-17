import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";
import { createPhotoRequest } from "../../../store/photos";



const CreatePhoto = () => {
  const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const userId = user?.id 
    const [description, setDescription] = useState("")
    const [url, setUrl] = useState("")
    const [file, setFile] = useState(null)


    

    const onSubmit = async(e) => {
        e.preventDefault()

    const newPhoto = {
        description: description,
        url: url,
        file:file,

    }
     const success = await dispatch(createPhotoRequest(newPhoto, userId))
        if (success) {
            setUrl('')
            setDescription('')
            setFile()
          
        }
    }

    
  return (
    <div className="registry-form-pop-up">
      <form className="registry-form" onSubmit={onSubmit}>
        <label className="registry-item-item">Post A Photo!</label>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <br />
        <label className="registry-item-url">Photo URL</label>
        <input
  id="photo-url"
  type="url"
  placeholder="Photo URL"
  value={url}
  onChange={(e) => setUrl(e.target.value)}
  required
/>


          {/* <input
          type="file"
          value={file}
          onChange={handleFileChange}
          required
        /> */}
   
        <br />
        <button className="submit-registries">Submit</button>
      </form>
    </div>
  );
};

export default CreatePhoto;



// import { useEffect } from "react";
// import { useHistory } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { createPhotoRequest } from "../../../store/photos";
// import S3 from "react-aws-s3";




// const CreatePhoto = () => {
//   window.Buffer = window.Buffer || require("buffer").Buffer;

//   const dispatch = useDispatch()
//     const user = useSelector(state => state.session.user)
//     const userId = user?.id 
//     const [description, setDescription] = useState("")
//     const [url, setUrl] = useState("")
//     const [file, setFile] = useState(null)
//     const [uploadedImages, setUploadedImages] = useState([]) //uploaded


//     const config = {
//       bucketName: process.env.REACT_APP_BUCKET_NAME,
//       region: process.env.REACT_APP_REGION,
//       accessKeyId: process.env.REACT_APP_ACCESS,
//       secretAccessKey: process.env.REACT_APP_SECRET,
//     };
  
//     const ReactS3Client = new S3(config);
  
//     // const handleAddImages = (e) => {
//     //   const imageLists = e.target.files;
//     //   const newUrl = [];
  
//     //   for (let i = 0; i < imageLists.length; i++) {
//     //     const currentImageUrl = URL.createObjectURL(imageLists[i]);
//     //     newUrl.push(imageLists[i]);
//     //   }
  
//     //   setUrl(newUrl);
//     // };

//       const newPhoto = {
//       description: description,
//       url: url,
//       file:file,

//   }
    
//     const handleAddImages = (e) => {
//       const imageLists = e.target.files;
//       const newUrl = [];
  
//       for (let i = 0; i < imageLists.length; i++) {
//         const url = URL.createObjectURL(imageLists[i]);
//         newUrl.push(imageLists[i]);
//       }
  
//       setUrl(newUrl);
//     };

    
//     const handleSubmit = () => {
//       if (url.length === 0) {
//         return; // No files selected
//       }
  
//       const uploadPromises = [];
  
//       url.forEach((file) => {
//         const newFileName = `image_${Date.now()}`;
  
//         const uploadPromise = ReactS3Client.uploadFile(file, newFileName);
//         uploadPromises.push(uploadPromise);
//       });
  
//       Promise.all(uploadPromises)
//         .then((results) => {
//           const uploadedImageUrls = results.map((data) => data.location);
//           // setImages(uploadedImageUrls);
//         })
//         .catch((err) => console.error(err));
//     };

   
//     const fetchUploadedFiles = () => {
//       // Make a request to fetch the uploaded files from the S3 bucket
//       // Replace "YOUR_BUCKET_NAME" with your actual bucket name
//       fetch(`https://practice-for-uploads.s3.amazonaws.com/`)
//         .then((response) => response.text())
//         .then((data) => {
//           // Process the fetched data and extract the URLs of the uploaded files
//           const urls = [];
//           const regex = /<Key>(.*?)<\/Key>/g;
//           let match = regex.exec(data);
//           while (match !== null) {
//             urls.push(`https://practice-for-uploads.s3.amazonaws.com/`);
//             // urls.push(`https://practice-for-uploads.s3.amazonaws.com/${match[1]}`);
//             match = regex.exec(data);
//           }
//           setUrl(urls);
//         })
//         .catch((error) => console.error(error));
//     };
  
//     useEffect(() => {
//       // Fetch the uploaded files when the component mounts
//       fetchUploadedFiles();
//     }, []);


//     const onSubmit = async(e) => {
//       e.preventDefault();
//       if (url.length === 0) {
//         return; // No files selected
//       }
//       const uploadPromises = [];

//       url.forEach((file) => {
//         const newFileName = `image_${Date.now()}`;
//         const uploadPromise = ReactS3Client.uploadFile(file, newFileName);
//         uploadPromises.push(uploadPromise);
//       });

//   // const newPhoto = {
//   //     description: description,
//   //     url: url,
//   //     file:file,

//   // }
//    const success = await dispatch(createPhotoRequest(newPhoto, userId))
//       if (success) {
//           // setUrl('')
//           // setDescription('')
//           // setFile()
//           fetch(`https://practice-for-uploads.s3.amazonaws.com/`)
//           .then((response) => response.text())
//           .then((data) => {
//             // Process the fetched data and extract the URLs of the uploaded files
//             const urls = [];
//             const regex = /<Key>(.*?)<\/Key>/g;
//             let match = regex.exec(data);
//             while (match !== null) {
//               urls.push(`https://practice-for-uploads.s3.amazonaws.com/${match[1]}`);
//               match = regex.exec(data);
//             }
//             setUploadedImages(urls);
//           })
//           .catch((error) => console.error(error));
        
//       }
//   }
    
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
//           type="file"
//           placeholder="Photo URL"
//           // value={url}
//           // onChange={(e) => setUrl(e.target.value)}
//           // onClick={handleAddImages}
//         // onChange={(e) => {
//         //   setUrl(e.target.value);
//         // }}
        
//         onClick={handleAddImages}

//           required
//         />



//           {/* <input
//           type="file"
//           value={file}
//           onChange={handleFileChange}
//           required
//         /> */}
   




//         <br />
//         <button onClick={handleSubmit}>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default CreatePhoto;



// import { useEffect } from "react";
// import { useHistory } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { createPhotoRequest } from "../../../store/photos";
// import S3 from "react-aws-s3";




// const CreatePhoto = () => {
//   window.Buffer = window.Buffer || require("buffer").Buffer;

//   const dispatch = useDispatch()
//     const user = useSelector(state => state.session.user)
//     const userId = user?.id 
//     const [description, setDescription] = useState("")
//     const [url, setUrl] = useState("")
//     const [file, setFile] = useState(null)
//     const [uploadedImages, setUploadedImages] = useState([]) //uploaded


//     const config = {
//       bucketName: process.env.REACT_APP_BUCKET_NAME,
//       region: process.env.REACT_APP_REGION,
//       accessKeyId: process.env.REACT_APP_ACCESS,
//       secretAccessKey: process.env.REACT_APP_SECRET,
//     };
  
//     const ReactS3Client = new S3(config);
  
//     // const handleAddImages = (e) => {
//     //   const imageLists = e.target.files;
//     //   const newUrl = [];
  
//     //   for (let i = 0; i < imageLists.length; i++) {
//     //     const currentImageUrl = URL.createObjectURL(imageLists[i]);
//     //     newUrl.push(imageLists[i]);
//     //   }
  
//     //   setUrl(newUrl);
//     // };

//       const newPhoto = {
//       description: description,
//       url: url,
//       file:file,

//   }
    
//     const handleAddImages = (e) => {
//       const imageLists = e.target.files;
//       const newUrl = [];
  
//       for (let i = 0; i < imageLists.length; i++) {
//         const url = URL.createObjectURL(imageLists[i]);
//         newUrl.push(imageLists[i]);
//       }
  
//       setUrl(newUrl);
//     };

    
//     const handleSubmit = () => {
//       if (url.length === 0) {
//         return; // No files selected
//       }
  
//       const uploadPromises = [];
  
//       url.forEach((file) => {
//         const newFileName = `image_${Date.now()}`;
  
//         const uploadPromise = ReactS3Client.uploadFile(file, newFileName);
//         uploadPromises.push(uploadPromise);
//       });
  
//       Promise.all(uploadPromises)
//         .then((results) => {
//           const uploadedImageUrls = results.map((data) => data.location);
//           // setImages(uploadedImageUrls);
//         })
//         .catch((err) => console.error(err));
//     };

   
//     const fetchUploadedFiles = () => {
//       // Make a request to fetch the uploaded files from the S3 bucket
//       // Replace "YOUR_BUCKET_NAME" with your actual bucket name
//       fetch(`https://practice-for-uploads.s3.amazonaws.com/`)
//         .then((response) => response.text())
//         .then((data) => {
//           // Process the fetched data and extract the URLs of the uploaded files
//           const urls = [];
//           const regex = /<Key>(.*?)<\/Key>/g;
//           let match = regex.exec(data);
//           while (match !== null) {
//             urls.push(`https://practice-for-uploads.s3.amazonaws.com/`);
//             // urls.push(`https://practice-for-uploads.s3.amazonaws.com/${match[1]}`);
//             match = regex.exec(data);
//           }
//           setUrl(urls);
//         })
//         .catch((error) => console.error(error));
//     };
  
//     useEffect(() => {
//       // Fetch the uploaded files when the component mounts
//       fetchUploadedFiles();
//     }, []);


//     const onSubmit = async(e) => {
//       e.preventDefault();
//       if (url.length === 0) {
//         return; // No files selected
//       }
//       const uploadPromises = [];

//       url.forEach((file) => {
//         const newFileName = `image_${Date.now()}`;
//         const uploadPromise = ReactS3Client.uploadFile(file, newFileName);
//         uploadPromises.push(uploadPromise);
//       });

//   // const newPhoto = {
//   //     description: description,
//   //     url: url,
//   //     file:file,

//   // }
//    const success = await dispatch(createPhotoRequest(newPhoto, userId))
//       if (success) {
//           // setUrl('')
//           // setDescription('')
//           // setFile()
//           fetch(`https://practice-for-uploads.s3.amazonaws.com/`)
//           .then((response) => response.text())
//           .then((data) => {
//             // Process the fetched data and extract the URLs of the uploaded files
//             const urls = [];
//             const regex = /<Key>(.*?)<\/Key>/g;
//             let match = regex.exec(data);
//             while (match !== null) {
//               urls.push(`https://practice-for-uploads.s3.amazonaws.com/${match[1]}`);
//               match = regex.exec(data);
//             }
//             setUploadedImages(urls);
//           })
//           .catch((error) => console.error(error));
        
//       }
//   }
    
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
//           type="file"
//           placeholder="Photo URL"
//           // value={url}
//           // onChange={(e) => setUrl(e.target.value)}
//           // onClick={handleAddImages}
//         // onChange={(e) => {
//         //   setUrl(e.target.value);
//         // }}
        
//         onClick={handleAddImages}

//           required
//         />



//           {/* <input
//           type="file"
//           value={file}
//           onChange={handleFileChange}
//           required
//         /> */}
   




//         <br />
//         <button onClick={handleSubmit}>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default CreatePhoto;

// import { useEffect } from "react";
// import { useHistory } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { createPhotoRequest } from "../../../store/photos";
// import S3 from "react-aws-s3";

// const CreatePhoto = () => {
//   window.Buffer = window.Buffer || require("buffer").Buffer;
//   const dispatch = useDispatch();
//   const history = useHistory();
//   const user = useSelector((state) => state.session.user);
//   const userId = user?.id;
//   const [description, setDescription] = useState("");
//   const [fileUrl, setFileUrl] = useState(""); // Track the URL of the uploaded file
//   const [files, setFiles] = useState([]); // Store the URLs of uploaded files

//   const config = {
//     bucketName: process.env.REACT_APP_BUCKET_NAME,
//     region: process.env.REACT_APP_REGION,
//     accessKeyId: process.env.REACT_APP_ACCESS,
//     secretAccessKey: process.env.REACT_APP_SECRET,
//   };

//   const ReactS3Client = new S3(config);

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     setFileUrl(URL.createObjectURL(selectedFile)); // Set the URL of the selected file
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
//         setFileUrl(data.location); // Set the URL of the uploaded file
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
//       fileUrl: fileUrl, // Pass the file URL instead of the file blob
//     };

//     const success = await dispatch(createPhotoRequest(newPhoto, userId));
//     if (success) {
//       setFileUrl(""); // Clear the file URL
//       setDescription("");
//       // history.push("/"); // Redirect to the desired page after successful submission
//     }
//   };

//   const fetchUploadedFiles = () => {
//     // Make a request to fetch the uploaded files from the S3 bucket
//     // Replace "YOUR_BUCKET_NAME" with your actual bucket name
//     fetch(`https://practice-for-uploads.s3.amazonaws.com/`)
//       .then((response) => response.text())
//       .then((data) => {
//         // Process the fetched data and extract the URLs of the uploaded files
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
//     // Fetch the uploaded files when the component mounts
//     fetchUploadedFiles();

//     // Cleanup the URL object when the component unmounts
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
//         <h3>Uploaded Files:</h3>
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

