import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const App = () => (

    <Router>
        <div>
            <Nav />

            <Route exact path="/" component={Home} />

            <Footer />
        </div>
    </Router>

);

export default App;
