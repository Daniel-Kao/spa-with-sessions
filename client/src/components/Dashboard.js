import React, { Component } from "react";
import axios from "axios";

class Dashboard extends Component {
  componentDidMount() {
    axios.get("api/users/list").then(res => {
      console.log(res.data);
    });
  }
  render() {
    return <div>dashboard</div>;
  }
}

export default Dashboard;
