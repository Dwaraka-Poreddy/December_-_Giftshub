import React, { useState, useEffect } from "react";
import { auth, googleAuthProvider } from "../../firebase";
import { toast } from "react-toastify";
import { Button } from "antd";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBar from "../../NavBars/NavBar";
import Footer from "../../Footers/Footer";
import "./Login.css";
const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [ReEmail, setReEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  let dispatch = useDispatch();

  const { user } = useSelector((state) => ({ ...state }));
  const { days_page } = useSelector((state) => ({ ...state }));
  useEffect(() => {
    if (user && user.token) {
      if (days_page.days_redirect === "n") {
        history.push("/home");
      } else if (days_page.days_redirect === "r") {
        history.push("/recommendedhome");
      }
    }
  }, [user]);

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    const config = {
      url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      handleCodeInApp: true,
    };
    console.log(
      process.env.REACT_APP_REGISTER_REDIRECT_URL,
      "handle register submit"
    );
    await auth.sendSignInLinkToEmail(ReEmail, config);

    toast.success(
      `Email is sent to ${ReEmail}.Click the link to complete your registration.`
    );
    //save email in local storage
    window.localStorage.setItem("emailForRegistration", ReEmail);
    console.log();
    // clear state
    setReEmail("");
  };

  const registerForm = () => (
    <form onSubmit={handleRegisterSubmit}>
      <input
        type="email"
        className="form-control"
        value={ReEmail}
        onChange={(e) => setReEmail(e.target.value)}
        placeholder="Your Email"
        autoFocus
      />
      <br />
      <Button
        size="large"
        className="mb-3"
        block
        shape="round"
        type="danger"
        onClick={handleRegisterSubmit}
        className="mb-3"
      >
        Register
      </Button>
    </form>
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      const { user } = result;
      const idTokenResult = await user.getIdTokenResult();
      dispatch({
        type: "LOGGED_IN_USER",
        payload: {
          email: user.email,
          token: idTokenResult.token,
          uid: user.uid,
        },
      });
      setLoading(true); // waste to write
      history.push("/");
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    await auth
      .signInWithPopup(googleAuthProvider)
      .then(async (result) => {
        const { user } = result;
        console.log(user);
        const idTokenResult = await user.getIdTokenResult();
        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            email: user.email,
            token: idTokenResult.token,
            uid: user.uid,
            profilepic: user.photoURL,
          },
        });
        history.push("/");
      })
      .catch((err) => toast.error(err.message));
  };

  const loginForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          autoFocus
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your Password "
        />
      </div>
      <Link
        to="/forgot/password"
        className="float-right text-danger logintxtdngr"
      >
        Forgot Password ?
      </Link>

      <Button
        onClick={handleSubmit}
        type="primary"
        block
        shape="round"
        icon={<MailOutlineOutlinedIcon />}
        size="large"
        disabled={!email || !password}
        className="mb-3"
      >
        Login with Email/ Password
      </Button>
    </form>
  );

  return (
    <div>
      <NavBar />
      <br />
      <br />
      <br />
      <br />
      <div className="container p-3">
        <div className="row">
          <div className="col-7 mx-auto loginrow">
            <div className="row">
              <div className="col-md-6 ">
                {loading ? (
                  <h4 className="text-danger "> Loading.. </h4>
                ) : (
                  <h4 className="loginh4">Login</h4>
                )}
                {loginForm()}

                <center>
                  <h3 style={{ fontSize: "17px" }}>OR</h3>
                </center>
                <Button
                  onClick={handleGoogleLogin}
                  type="danger"
                  block
                  shape="round"
                  icon={<MailOutlineOutlinedIcon style={{ color: "red" }} />}
                  size="large"
                  className="mb-3"
                >
                  Login with Google
                </Button>
              </div>
              <div className="col-md-6 ">
                <h4 className="loginh4">Register</h4>
                {registerForm()}
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
