import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import "./Registries.css";
import { getComments } from "../../store/comments";
import CreateRegistry from "./CreateRegistry";
import DeleteRegistry from "./DeleteRegistry";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import UpdateRegistry from "./EditRegistry";
import CreateComment from "../Comment/CreateComment";



const Registry = ({ registry }) => {
  const registryId = registry?.id
  const dispatch = useDispatch();
  const comments = useSelector(state => state?.comments)
  const commentsVal = Object?.values(comments)
  console.log('Comments', commentsVal)
 const currentUser = useSelector(state => state.session.user)
 
 
   
 
 useEffect(() => {
  dispatch(getComments(registryId))
 },[dispatch])

  return (
            

    <div className="registry-container">
      
      <div className="registry-slideshow">
 

  <h4 className="registry-name">
    {registry?.User?.firstName} {registry?.User?.lastName} 
  </h4>
  
  <p className="registry-item-title">{registry?.registryItem}</p>
  <div className="registry-photos"><img src={registry?.url} alt="User Registry" /></div>

  <OpenModalMenuItem
    itemText={<> <i class='fas fa-comment-dots'></i></>}
    id="notes-in-registries"
    modalComponent={<CreateComment registryId={registry?.id} />}
  />

  
   <div className="update-delete" >
   
   {currentUser?.id === registry?.User?.id && (
     <OpenModalMenuItem
     itemText={<><i className="fas fa-trash-alt"></i></>}
     modalComponent={<DeleteRegistry registryId={registry?.id} />}
   />

   )}
   {currentUser?.id === registry?.User?.id && (
     <OpenModalMenuItem
       itemText={<><i class='fas fa-undo'></i></>}
       modalComponent={<UpdateRegistry registry={registry} />}
     />
   )}

</div>
</div>

    </div>

    
    
  );
 
};

export default Registry;
