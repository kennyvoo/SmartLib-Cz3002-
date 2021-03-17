import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Alert } from "evergreen-ui";
import Navbar from "./components/Navbar";
import AccountMgmtPage from "./components/AccountMgmtPage";
import LoginPage from "./components/LoginPage";
import MyBookingsPage from "./components/MyBookingsPage";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import CreateAccountPage from "./components/CreateAccountPage"
import ForgetPasswordPage from "./components/ForgetPasswordPage"
import SeatInformationPage from "./components/SeatInformationPage"
import ResetPasswordPage from "./components/ResetPasswordPage"

function cpyApp() {

  const adminUSer = {
    email: "admin@smartLib.com",
    password: "test123"
  }
  // Getting the user state based on the input
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  //function to be called when we want to login, passing in details
  const Login = details => {
    console.log(details);

    if (details.email == adminUSer.email && details.password == adminUSer.password) {
      console.log("Logged in");
      setUser({
        email: details.email
      });
      <Link to="/" style={{ textDecoration: "none" }}></Link>
    }
    else if(details.email != adminUSer.email){
      console.log("Details do not match");
      setError("Wrong email entered");
    }
    else {
      console.log("Details do not match");
      setError("Wrong Password entered");
    }

  }

  const Logout = () => {
    console.log("Logout");
    setUser({ name: "", email: "" });
  }

  return (
    <div>
      {/* <h1>Hello</h1> */}

      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/MyBookings">
            <MyBookingsPage />
          </Route>
          <Route path="/Account">
            <AccountMgmtPage />
          </Route>
          <Route path="/Login">

            {(user.email != "") ? (
              <div classname="welcome">
                <h2>Welcome, <span>{user.email}</span></h2>
                <button onClick={Logout}>Logout</button>
              </div>
            ) : (
              //Have to pass the login and error function as well
              <LoginPage Login={Login} error={error} />
            )}

          </Route>
          <Route path="/CreateAccount">
            <CreateAccountPage />
          </Route>
          <Route path="/ForgetPassword">
            <ForgetPasswordPage />
          </Route>
          <Route path="/SeatInformation">
            <SeatInformationPage />
          </Route>
          <Route path="/ResetPassword">
            <ResetPasswordPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default cpyApp;
