import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';

import Login from "./components/login.component";
import Register from "./components/register.component";
import MyShop from "./components/myShop.component";
import AddItem from "./components/addItem.component";
import EditItem from "./components/editItem.component";


class App extends Component {
  constructor(props) {
    super(props);
    // this.logOut = this.logOut.bind(this);
    this.state = {
    };
  }



  render() {
    return (
      <Router>
        <div>

          <div className="container mt-3">
            <Switch>
              {/* <Route exact path={["/", "/home"]} component={Home} />
              */}
              <Route exact path="/" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/myshop" component={MyShop} />
              <Route path="/add" component={AddItem} />
              <Route path="/edit/:idSanPham" component={EditItem} />

              {/* <Route exact path="/profile" component={Profile} /> */}
              {/* <Route path="/user" component={BoardUser} />
              <Route path="/mod" component={BoardModerator} />
              <Route path="/admin" component={BoardAdmin} /> */}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
