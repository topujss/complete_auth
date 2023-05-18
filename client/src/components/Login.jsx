import { Link } from 'react-router-dom';
import './../assets/login.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLoginAction } from '../redux/auth/authAction';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  // change input date by value
  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // submit user by using redux
  const handleUserSubmit = (e) => {
    e.preventDefault();
    dispatch(userLoginAction({ input, setInput, navigate }));
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
      <img src="https://i.imgur.com/DjVcJFA.png" className="bikerboy" />
      <img src="https://i.imgur.com/MosCSIH.png" className="bg" />
      <img src="https://i.imgur.com/Q50tX3l.png" className="girl" />
      <img src="https://i.imgur.com/J3FAXDV.png" className="girl1" />
      <img src="https://i.imgur.com/tLXIflv.png" className="trees" />
      <div className="login">
        <h2>Sign In</h2>
        <p>To access your account you have to log in</p>
        <form onSubmit={handleUserSubmit}>
          <div className="inputBox">
            <input
              type="text"
              placeholder="username"
              name="email"
              value={input.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="inputBox">
            <input
              type="password"
              placeholder="password"
              name="password"
              value={input.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="inputBox">
            <button>Login</button>
          </div>
        </form>
        <div className="group">
          <Link to="#"> forget Password</Link>
          <Link to="/register">Sign Up</Link>
        </div>
      </div>
    </main>
  );
};

export default Login;
