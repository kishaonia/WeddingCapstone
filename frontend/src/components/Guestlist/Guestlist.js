import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../store/users';
import LikeButton from '../Photo/PhotoForm/Like';
import './Guestlist.css';
import './Terminal.css';



function Guestlist() {
const dispatch = useDispatch();
const users = useSelector((state) => Object.values(state.users) || []);

useEffect(() => {
dispatch(getUsers());
}, [dispatch]);

return (



<div className='guestlist'>
<h1 className='users'>{users}</h1>
<div className='users'></div>
{users.map((user) => (
<div key={user.id}>
<h3>{user.username}</h3>
<p>First Name: {user.firstName}</p>
<p>Last Name: {user.lastName}</p>
<p>Email: {user.email}</p>
<LikeButton user={user} />
</div>
))}
</div>



)
}
export default Guestlist;