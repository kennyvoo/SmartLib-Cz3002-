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
import ModifySeatsPage from "./components/ModifySeatsPage";
import AdminHomePage from "./components/AdminHomePage";
import AddSeatsPage from "./components/AddSeatsPage";
import AdminPage from "./components/AdminPage"
import { AuthProvider } from "./context/AuthContext"
import PrivateRoute from "./PrivateRoute"
import PrivateRoute2 from "./PrivateRoute2"
import SuccessBookingPage from "./components/SuccessBookingPage";

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
        <AuthProvider>
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage} /> {/* Only when the address is exactly / */}
            <Route path="/Login" component={LoginPage} />
            <Route path="/CreateAccount"component={CreateAccountPage} />
            <Route path="/ForgetPassword" component={ForgetPasswordPage} />
            <PrivateRoute path="/MyBookings" component={MyBookingsPage} />
            <PrivateRoute path="/Account" component={AccountMgmtPage} />
            <PrivateRoute path="/SeatInformation" component={SeatInformationPage} />
            <PrivateRoute path="/BookingSuccessful" component={SuccessBookingPage} />
            <PrivateRoute2 path="/Admin" component={AdminHomePage} />
            <PrivateRoute2 path="/ModifySeats" component={ModifySeatsPage} />
            <PrivateRoute2 path="/AddSeats" component={AddSeatsPage} />
          </Switch>
          <Footer />
        </AuthProvider>
      </Router>

    </div>
  );
}

export default App;
