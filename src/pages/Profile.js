import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/common/Header";
import Button from "../components/common/Button";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import Loader from "../components/common/Loader";
import "./Profile.css"; // Import the CSS file for styling

function Profile() {
  const user = useSelector((state) => state.user.user);

  if (!user) {
    return <Loader />;
  }

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("User Logged Out!");
      })
      .catch((error) => {
        // An error happened.
        toast.error(error.message);
      });
  };

  return (
    <div className="profile-container">
      <Header />
      <div className="text-info">
        <h2>Congratulations {user.name}!</h2>
        <p>You've successfully logged in.</p>
        </div>
      <div className="profile-info">
      </div>
      <div className="profile-header">
        <h1>Name:   {user.name}</h1>
        <h1>Email:  {user.email}</h1>
        <h1>User-id: {user.uid}</h1>
        <Button className="logout-button" text={"Logout"} onClick={handleLogout} />
      </div>
    </div>
  );
}

export default Profile;
