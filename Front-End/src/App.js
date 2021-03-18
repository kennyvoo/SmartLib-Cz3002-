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
import ModifySeatsPage from "./components/ModifySeatsPage";
import AdminHomePage from "./components/AdminHomePage";
import AddSeatsPage from "./components/AddSeatsPage";

function App() {

  // Getting the user state based on the input
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  //function to be called when we want to login, passing in details
  const Login = details => {
    console.log(details);
    if (details.email != "") {
      setUser({
        name: "test",
        email: details.email
      });
    } else {
      setUser({ name: "", email: "" });
    }
  }

  return (
    <div>
      {/* <h1>Hello</h1> */}

      <Router>
        <Navbar Login={Login}/>
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
            {/* //Have to pass the login and error function as well */}
            <LoginPage Login={Login} />
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
          <Route path="/Admin">
            <AdminHomePage />
          </Route>
          <Route path="/ModifySeats">
            <ModifySeatsPage />
          </Route>
          <Route path="/AddSeats">
            <AddSeatsPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
