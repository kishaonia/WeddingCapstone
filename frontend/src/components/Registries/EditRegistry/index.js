import { updateOneRegistry } from "../../../store/registries";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useModal } from "../../../context/Modal";
import { useSelector } from "react-redux";


const UpdateRegistry = ({ registry }) => {
const registryId = registry?.id
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const [registryItem, setRegistryItem] = useState(registry?.registryItem);
  const [url, setUrl] = useState(registry?.url);
  
  const [error, setError] = useState({});

  
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!registryItem) {
      setError({ registryItem: "Registry item is required" });
      return;
    }
    if (!url) {
      setError({ url: "Photo URL is required" });
      return;
    }
    const newRegistry = {
      registryItem,
      url,
    };
    dispatch(updateOneRegistry(newRegistry, registryId)).then(closeModal);
  };

  const onCancel = (e) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <>
      <div className="registry-form-pop-up">
        <form className="registry-form" onSubmit={onSubmit}>
          <label className="registry-item-item">Editing A Registry?</label>
          <input
            type="text"
            placeholder="Registry Item"
            value={registryItem}
            onChange={(e) => setRegistryItem(e.target.value)}
            required
          />
          {error.registryItem && <span className="error">{error.registryItem}</span>}
          <br />
          <label className="registry-item-url">Photo URL</label>
          <input
            type="text"
            placeholder="Photo URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
          {error.url && <span className="error">{error.url}</span>}
          <br />
          <button className="submit-registries" type="submit">Submit</button>
        </form>
      </div>
 
    </>
  );
};

export default UpdateRegistry;
