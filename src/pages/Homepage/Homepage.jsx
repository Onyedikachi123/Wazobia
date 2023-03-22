import React from "react";
import logo from "../../img/download.jpeg";
import { Link } from "react-router-dom";
import { ButtonGroup, Button } from 'react-bootstrap';
import "./home.css";

const home = () => {
  return (
    <div className="container-fluid">
      <div className="content">
        <div className="header">
          <h1>
            <img src={logo} alt="Logo" /> hivedesk
          </h1>
        </div>
        <h2>DEVELOPER'S ASSESMENT</h2>
        <ButtonGroup className="d-flex gap-4">
          <Button variant="primary" className="bg-white">
            <Link to="/edit">Edit Page</Link>
          </Button>
          <Button variant="primary" className="bg-white">
            <Link to="/post">Post Page</Link>
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default home;
