import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/Context";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { signup, setUser } = useUserContext();
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
    if (password != confirmPassword) {
      alert("Enter same the passwords");
      return;
    }

    signup(email, password)
      .then((res) => {
        setUser(res);
        navigate("/");
      })
      .catch((err) => alert(err));
  };
  return (
    <div className="auth__container">
      <div>
        <h1 className="auth__heading">Signup account</h1>
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
              value={email}
            />
          </div>

          <div>
            <label htmlFor="password" className="auth__label">
              Password{" "}
            </label>
            <br />
            <input
              type="password"
              placeholder="password"
              id="password"
              className="auth__password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <div>
            <label htmlFor="confirmpassword" className="auth__label">
              Confirm password{" "}
            </label>
            <br />
            <input
              type="password"
              placeholder="confirm password"
              id="confirmpassword"
              className="auth__password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
          </div>
          <button type="submit" className="auth__btn">
            {" "}
            Login
          </button>
        </form>
        <p>
          Already have an account? <Link to="/">login</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginComponent;
