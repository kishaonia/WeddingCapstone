import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";
import { createOneRegistry } from "../../../store/registries";

const CreateRegistry = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const userId = user?.id 
    const [registryItem, setRegistryItem] = useState("")
    const [url, setUrl] = useState("")

    const onSubmit = async(e) => {
        e.preventDefault()

    const newRegistry = {
        registryItem: registryItem,
        url: url
    }
     const success = await dispatch(createOneRegistry(newRegistry, userId))
        if (success) {
            setUrl('')
            setRegistryItem('')
        }
    }

    return (
        <div className="registry-form-1">
            <form className="registry-form-1" onSubmit={onSubmit}>
                <label className="registry-item-item"></label>
                Want to post a registry?
                <input
                type="text"
                placeholder="Registry Item"
                value={registryItem}
                onChange={e => setRegistryItem(e.target.value)}
                required
                />   
                <br></br>
                <label className="registry-item-url"></label>
                Photo URL
                <input
                type="text"
                placeholder="Photo URL"
                value={url}
                onChange={e => setUrl(e.target.value)}
                required
                />   
                <br></br>
            <button className='submit-registries'>Submit</button>
            </form>
            </div>

    )
}


export default CreateRegistry;