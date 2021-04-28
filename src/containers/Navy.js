import React from 'react';
import { Navbar } from 'react-bootstrap';
import './common.css';

const Navy = () =>{
    return(<header>
        <Navbar bg="dark" expand="lg" className="nav">
          <Navbar.Brand href="#home" className="brand"> <h1>My Store</h1></Navbar.Brand>
        </Navbar>
    </header>);
}

export default Navy;