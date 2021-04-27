import React from 'react';
import { Navbar } from 'react-bootstrap';
import './common.css';

const Navy = () =>{
    return(<header>
        <Navbar bg="dark" expand="lg" className="nav">
          <Navbar.Brand href="#home" className="brand">My Store</Navbar.Brand>
        </Navbar>
    </header>);
}

export default Navy;