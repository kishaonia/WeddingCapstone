import { deletePhotoRequest } from "../../../store/photos";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useModal } from "../../../context/Modal";
import { useSelector } from "react-redux";

const DeletePhoto = ({ photoId }) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const onDelete = async (e) => {
    e.preventDefault();
    dispatch(deletePhotoRequest(photoId)).then(closeModal);
  };

  const onCancel = (e) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <>
      <form onSubmit={onDelete}>
        <button type="submit">Delete</button>
      </form>
      <button onClick={onCancel}>Cancel</button>
    </>
  );
};

export default DeletePhoto;
