import React from "react";
import "../styles/Home.css";
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import { Head, PageName } from "../styles/StyledHome";

const Home = () => {
  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem("user"));
  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    navigate("/login");
  };
  return (
    <>
      <div className="flex">
        <Head>Homepage</Head>
        <PageName>
          {" "}
          <AiOutlineUser /> <b>Welcome {userName.name}</b>
        </PageName>

        <button onClick={handleLogout}>Logout</button>
      </div>
      <Title />
    </>
  );
};

export default Home;
