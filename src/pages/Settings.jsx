
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {updatedUser} from '../redux/apiCalls';

export default function Settings() {
  const user = useSelector((state) => state.user.currenUser)
  const {isFetching, error} = useSelector((state) => state.user);
  const dispatch = useDispatch()

  const [file, setFile] = useState(null)
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    updatedUser(dispatch, {
      username, 
      password,
      email
    })
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src=''
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user && user.others.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user && user.others.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingsSubmit" type="submit">
            Update
          </button>
          {error && (
            <span className='error'
              style={{ color: "red", textAlign: "center", marginTop: "20px" }}
            >
              Something went wrong...Try again.
            </span>
          )}
        </form>
      </div>
    </div>
  );
}