import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { Button, Title, Wrapper } from "../styles/Styled";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));

    if (
      input.email === loggeduser.email &&
      input.password === loggeduser.password
    ) {
      localStorage.setItem("loggedin", true);
      navigate("/");
    } else {
      alert("The provided email or password is incorrect");

      setInput({
        password: "",
      });
    }
  };

  return (
    <Wrapper>
      <div className="center">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            required
            placeholder="Enter Your email"
          />
          <br />

          <input
            type="password"
            name="password"
            value={input.password}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            required
            placeholder="Enter Password"
          />
          <br />
          <Button type="submit">Login</Button>
        </form>
        <Title>
          Not Register Yet!{" "}
          <NavLink to="/register">
            <b>Register Now</b>
          </NavLink>
        </Title>
      </div>
    </Wrapper>
  );
};

export default Login;
