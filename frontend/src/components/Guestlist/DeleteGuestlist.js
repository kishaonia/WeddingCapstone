import { deleteGuestlistRequest } from "../../store/guestlists";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useModal } from "../../context/Modal";
import { useSelector } from "react-redux";

const DeleteGuestlist = ({guestlistId }) => {
    const dispatch = useDispatch();
    const { closeModal } = useModal();

    const onDelete = async (e) => {
        e.preventDefault();
        dispatch(deleteGuestlistRequest(guestlistId)).then(closeModal);
    };

    const onCancel = (e) => {
        e.preventDefault();
        closeModal();
    };

    return (
        <>
            <form className="delete-modal" onSubmit={onDelete}>
                Are you sure you want to delete this guestlist?
                <button className="delete-form-button" type="submit">Delete</button>
                <button className="cancel-form-button" onClick={onCancel}>Cancel</button>
            </form>
        </>
    );
};

export default DeleteGuestlist;
