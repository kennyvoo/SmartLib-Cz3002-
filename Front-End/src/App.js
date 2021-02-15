import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import AccountMgmtPage from "./components/AccountMgmtPage";
import LoginPage from "./components/LoginPage";
import MyBookingsPage from "./components/MyBookingsPage";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";

function App() {
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
            <LoginPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
