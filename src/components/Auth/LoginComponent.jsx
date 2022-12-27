import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/Context";

const LoginComponent = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { login, setUser } = useUserContext();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passw = /^[A-Za-z0-9 -]*$/;

    if (!email.trim().match(regex)) {
      alert("Enter valid email");
      return;
    }
    if (!password.trim().match(passw)) {
      alert("Enter valid password");
      return;
    }
    login(email, password)
      .then((res) => {
        setUser(res);
        navigate("/home");
      })
      .catch((err) => alert(err));
  };
  return (
    <div className="auth__container">
      <div>
        <h1 className="auth__heading">Welcome back</h1>
        <div className="auth__google">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
            alt=""
          />
          Login with Google
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="auth__label">
              Email Address{" "}
            </label>
            <br />
            <input
              type="email"
              placeholder="Email Address"
              id="email"
              className="auth__email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="auth__label">
              Password{" "}
            </label>
            <br />
            <input
              type="password"
              placeholder="Password"
              id="password"
              className="auth__password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="auth__btn">
            {" "}
            Login
          </button>
        </form>
        <p>
          Dont have an account? <Link to="/signup">signup</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginComponent;
