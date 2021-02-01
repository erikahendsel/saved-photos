import Footer from "./components/Footer";
import Nav from "./components/Nav";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import { AuthProvider } from "./contexts/AuthContext";
import "./styles/app.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";
import ImageContext from "./contexts/ImageContext";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Router>
          <AuthProvider>
            <Nav />
            <Switch>
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route exact path="/" component={Home} />
            </Switch>
            {/* <ImageContext>

            </ImageContext> */}
          </AuthProvider>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
