// import { useEffect } from "react";
// import { useHistory } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { createGuestlistRequest } from "../../store/guestlists";



// const CreateGuestlist = () => {
//   const dispatch = useDispatch();
//     const user = useSelector((state) => state.session.user);
//     const userId = user?.id;
//     const [guest, setGuest] = useState("");
//     const [description, setDescription] = useState("");

//     const onSubmit = async(e) => {
//         e.preventDefault()

//     const newGuestlist = {
//       guest: guest,
//      description: description,
        

//     }
//      const success = await dispatch(createGuestlistRequest(newGuestlist, userId))
//         if (success) {
//             setGuest('');
//             setDescription('');
//         }
//     };

    
//   return (
//     <div className="guestlist-form-pop-up">
//       <form className="guestlist-form" onSubmit={onSubmit}>
//         <label className="guestlist-description">Any allergies?</label>
        
//         <br />
//         <label className="guestnumber">Guests attending</label>
//         <input
//         type="number"
//         placeholder="How many are attending?"
//         value={guest}
//         onChange={(e) => setGuest(e.target.value)}
//         required
//         />   
//         <input
//           type="text"
//           placeholder="Any Allergies?"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           required
//         />
//         <br />
//         <button className="submit-guestlist">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default CreateGuestlist;
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";
import { createGuestlistRequest } from "../../store/guestlists";

const CreateGuestlist = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const userId = user?.id;
  const [guest, setGuest] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false); // New state for tracking submission

  const onSubmit = async (e) => {
    e.preventDefault();

    const newGuestlist = {
      guest: guest,
      description: description,
    };
    const success = await dispatch(createGuestlistRequest(newGuestlist, userId));
    if (success) {
      setGuest("");
      setDescription("");
      setSubmitted(true); // Update state when the form is submitted successfully
    }
  };

  return (
    <div className="guestlist-form">
      {submitted ? (
        <p>Thank you!</p> // Display "Thank you!" if the form is submitted
      ) : (
        <form className="guestlist-form" onSubmit={onSubmit}>

          <label className="guestnumber">Guests:</label>
          <select
            value={guest}
            onChange={(e) => setGuest(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="1">Just Me</option>
            <option value="2">+1 guest</option>
          </select>
          <label className="guestlist-description">Any allergies?</label>

          <input
            type="text"
            placeholder="Any Allergies?"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <br />
          <button className="submit-guestlist">Submit</button>
        </form>
      )}
    </div>
  );
};

export default CreateGuestlist;
