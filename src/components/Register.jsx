import React, { useState } from "react";
import "../styles/Register.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Wrapper, Button, Title } from "../styles/Styled";

const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/login");
  };

  return (
    <Wrapper>
      <div className="center">
        <h2>Create an account</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            placeholder="Enter your full name"
          />
          <br />

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
          <Button type="submit">Register</Button>
        </form>
        <Title>
          Already have an account{" "}
          <NavLink to="/login">
            <b>Login Here</b>
          </NavLink>
        </Title>
      </div>
    </Wrapper>
  );
};

export default Register;
