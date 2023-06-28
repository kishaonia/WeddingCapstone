// import { updateGuestlistRequest } from "../../store/guestlists";
// import { useEffect } from "react";
// import { useHistory } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { useState } from "react";
// import { useModal } from "../../context/Modal";
// import { useSelector } from "react-redux";

// const UpdateGuestlist = ({ guestlist }) => {
//   const guestlistId = guestlist?.id;
//   const dispatch = useDispatch();
//   const { closeModal } = useModal();
//   const [description, setDescription] = useState(guestlist?.description);
//   const [guest, setGuest] = useState({});
//   const [error, setError] = useState({});

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     if (!description) {
//       setError({ description: "Description is required" });
//       return;
//     }
//     if (!guest) {
//       setError({ guest: "Guest # is required" });
//       return;
//     }
//     const newGuestlist = {
//       description,
//       guest,
//     };
//     dispatch(updateGuestlistRequest(newGuestlist, guestlistId)).then(closeModal);
//   };

//   const onCancel = (e) => {
//     e.preventDefault();
//     closeModal();
//   };

//   return (
//     <>
//       <div className="guestlist-form-pop-up">
//         <form className="guestlist-form" onSubmit={onSubmit}>
//           <label className="guestlist-item-item">Editing A Guestlist?</label>
//           <input
//             type="text"
//             placeholder="Any allergies?"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//           />
//           {error?.description && <span className="error">{error.description}</span>}
//           <br />
//           <label className="guestlist-item-#">Guestlist #</label>
//           <input
//             type="number"
//             placeholder="Guest #"
//             value={guest}
//             onChange={(e) => setGuest(e.target.value)}
//             required
//           />
//           {error?.guest && <span className="error">{guest?.url}</span>}
//           <br />
//           <button className="submit-guestlist" type="submit">Submit</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default UpdateGuestlist;
import { updateGuestlistRequest } from "../../store/guestlists";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useModal } from "../../context/Modal";
import { useSelector } from "react-redux";

const UpdateGuestlist = ({ guestlist }) => {
  const guestlistId = guestlist?.id;
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const [description, setDescription] = useState(guestlist?.description);
  const [guest, setGuest] = useState(1); // Default value of 1 guest
  const [error, setError] = useState({});

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!description) {
      setError({ description: "Description is required" });
      return;
    }
    if (!guest) {
      setError({ guest: "Guest # is required" });
      return;
    }
    const newGuestlist = {
      description,
      guest,
    };
    dispatch(updateGuestlistRequest(newGuestlist, guestlistId)).then(closeModal);
  };

  const onCancel = (e) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <>
      <div className="guestlist-form-pop-up">
        <form className="guestlist-form" onSubmit={onSubmit}>
          <label className="guestlist-item-item">Editing A Guestlist?</label>
          <input
            type="text"
            placeholder="Any allergies?"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          {error?.description && <span className="error">{error.description}</span>}
          <br />
          <label className="guestlist-item-#">Guest/s</label>
          <select
            value={guest}
            onChange={(e) => setGuest(Number(e.target.value))}
            required
          >
            <option value={1}>Just Me</option>
            <option value={2}>+1 </option>
          </select>
          {error?.guest && <span className="error">{guest?.url}</span>}
          <br />
          <button className="submit-guestlist" type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default UpdateGuestlist;
