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

    const onSubmit = async(e) => {
        e.preventDefault()

    const newPhoto = {
        description: description,
        url: url
    }
     const success = await dispatch(createPhotoRequest(newPhoto, userId))
        if (success) {
            setUrl('')
            setDescription('')
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
          type="text"
          placeholder="Photo URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <br />
        <button className="submit-registries">Submit</button>
      </form>
    </div>
  );
};

export default CreatePhoto;
