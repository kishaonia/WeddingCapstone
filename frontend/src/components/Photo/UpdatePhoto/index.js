import { updatePhotoRequest } from "../../../store/photos";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useModal } from "../../../context/Modal";
import { useSelector } from "react-redux";


const UpdatePhoto = ({ photo }) => {
  const photoId = photo?.id;

  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const [description, setDescription] = useState(photo?.description);
  const [url, setUrl] = useState(photo?.url);
  const [error, setError] = useState({});


  const onSubmit = async (e) => {
    e.preventDefault();
    if (!description) {
      setError({ description: "Description is required" });
      return;
    }
    if (!url) {
      setError({ url: "Photo URL is required" });
      return;
    }
    const newPhoto = {
      description,
      url,
    };
    dispatch(updatePhotoRequest(newPhoto, photoId)).then(closeModal);
  };

  const onCancel = (e) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <>
      <div className="photo-form-pop-up">
        <form className="photo-form" onSubmit={onSubmit}>
          <label className="photo-item-item">Editing A Photo?</label>
          <input
            type="text"
            placeholder="Photo Item"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          {error.description && <span className="error">{error.description}</span>}
          <br />
          <label className="photo-item-url">Photo URL</label>
          <input
            type="text"
            placeholder="Photo URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
          {error.url && <span className="error">{error.url}</span>}
          <br />
          <button className="submit-photos" type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default UpdatePhoto;
