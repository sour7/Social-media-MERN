import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Topbar from "../topbar/Topbar";
import "./edit.css";
import axios from "axios";

const Edit = () => {
  const { user } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [desc, setDesc] = useState("");
  const [city, setCity] = useState("");
  const [from, setFrom] = useState("");
  const [email, setEmail] = useState("");

  //   console.log(username, desc, city, from, email);

  const handleUpdate = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Topbar />
      <div>
        <h3 className="editText">Edit Profile</h3>
        <form className="editForm" onSubmit={handleUpdate}>
          <input
            type="text"
            defaultValue={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {/* <input
            type="file"
            defaultValue={user.profilePicture}
            onChange={(e) => setProfilePicture(e.target.value)}
          /> */}
          <input
            type="text"
            defaultValue={user.desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <input
            type="text"
            defaultValue={user.from}
            onChange={(e) => setFrom(e.target.value)}
          />
          <input
            type="text"
            defaultValue={user.city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="email"
            defaultValue={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="updateProfile" type="submit">
            Update Profile
          </button>
        </form>
      </div>
    </>
  );
};

export default Edit;
