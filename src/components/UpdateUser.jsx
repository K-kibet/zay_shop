import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userRequest } from "../requestMethods";

export default function UpdateUser() {

  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const user = useSelector((state) => state.user.currenUser)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await userRequest.post('', {
       username : username,
       email: email
      })
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    const getUser = async () => {
      try{
       const res = userRequest.get('/users')
       console.log(res.data)
      } catch (err) {
        //console.log(err)
      }
    }

    getUser()
  },[])
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Update User</h1>
      <form className="newUserForm" onSubmit={handleSubmit}>
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <button className="newUserButton btn-success">Update</button>
      </form>
    </div>
  );
}
