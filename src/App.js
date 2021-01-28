import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import { AuthProvider } from "./contexts/AuthContext";
import "./styles/app.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Nav />
        <Router>
          <AuthProvider>
            <Switch>
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={Login} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
