import './../assets/login.scss';

const avatar = `https://www.medsci.ox.ac.uk/about-us/equality-diversity-and-inclusion/msd-harassment-advisor-network/msd-harassment-advisors/leslie-chapman/@@images/image/w1140`;

import { TiUser } from 'react-icons/ti';
import { TbEditCircle, TbArrowsExchange2, TbPhotoPlus, TbLogout } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogoutAction } from '../redux/auth/authAction';

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // get user data from auth by redux
  const { user } = useSelector((s) => s.auth);

  const handleLogout = () => {
    dispatch(userLogoutAction({ navigate }));
  };

  return (
    <main>
      <div className="leaves">
        <div className="set">
          <div>
            <img src="https://i.imgur.com/Oc3aYTb.png" />
          </div>
          <div>
            <img src="https://i.imgur.com/sjEjxPI.png" />
          </div>
          <div>
            <img src="https://i.imgur.com/Z0YR03s.png" />
          </div>
          <div>
            <img src="https://i.imgur.com/fVYvICL.png" />
          </div>
          <div>
            <img src="https://i.imgur.com/Oc3aYTb.png" />
          </div>
          <div>
            <img src="https://i.imgur.com/sjEjxPI.png" />
          </div>
          <div>
            <img src="https://i.imgur.com/Z0YR03s.png" />
          </div>
          <div>
            <img src="https://i.imgur.com/fVYvICL.png" />
          </div>
          <div>
            <img src="https://i.imgur.com/Oc3aYTb.png" />
          </div>
          <div>
            <img src="https://i.imgur.com/sjEjxPI.png" />
          </div>
          <div>
            <img src="https://i.imgur.com/Z0YR03s.png" />
          </div>
          <div>
            <img src="https://i.imgur.com/fVYvICL.png" />
          </div>
          <div>
            <img src="https://i.imgur.com/Oc3aYTb.png" />
          </div>
          <div>
            <img src="https://i.imgur.com/sjEjxPI.png" />
          </div>
          <div>
            <img src="https://i.imgur.com/Z0YR03s.png" />
          </div>
          <div>
            <img src="https://i.imgur.com/fVYvICL.png" />
          </div>
          <div>
            <img src="https://i.imgur.com/Oc3aYTb.png" />
          </div>
          <div>
            <img src="https://i.imgur.com/sjEjxPI.png" />
          </div>
          <div>
            <img src="https://i.imgur.com/Z0YR03s.png" />
          </div>
          <div>
            <img src="https://i.imgur.com/fVYvICL.png" />
          </div>
          <div>
            <img src="https://i.imgur.com/Oc3aYTb.png" />
          </div>
          <div>
            <img src="https://i.imgur.com/sjEjxPI.png" />
          </div>
          <div>
            <img src="https://i.imgur.com/Z0YR03s.png" />
          </div>
          <div>
            <img src="https://i.imgur.com/fVYvICL.png" />
          </div>
          <div>
            <img src="https://i.imgur.com/Oc3aYTb.png" />
          </div>
          <div>
            <img src="https://i.imgur.com/sjEjxPI.png" />
          </div>
          <div>
            <img src="https://i.imgur.com/Z0YR03s.png" />
          </div>
          <div>
            <img src="https://i.imgur.com/fVYvICL.png" />
          </div>
        </div>
      </div>
      <img src="https://i.imgur.com/MosCSIH.png" className="bg" />
      <img src="https://i.imgur.com/J3FAXDV.png" className="girl1" />
      <img src="https://i.imgur.com/tLXIflv.png" className="trees" />
      <div className="profile">
        <div className="profile-info">
          <div className="user info">
            <img src={avatar} alt="" />
            <h3>{user?.name}</h3>
          </div>
          <div className="user-menu">
            <ul>
              <li className="active">
                <a href="#">
                  <TiUser className="icon" /> Profile
                </a>
              </li>
              <li>
                <a href="#">
                  <TbEditCircle className="icon" /> Edit
                </a>
              </li>
              <li>
                <a href="#">
                  <TbArrowsExchange2 className="icon" /> Change Password
                </a>
              </li>
              <li>
                <a href="#">
                  <TbPhotoPlus className="icon" /> Profile Photo
                </a>
              </li>
              <li>
                <a href="#" onClick={handleLogout}>
                  <TbLogout className="icon" /> Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="profile-box">
          <div className="profile-details">
            <div className="profile-photo">
              <img src={avatar} alt="" />
              <h2>{user?.name}</h2>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
