import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faUser);

const NavBar = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search query:", query);
  };
    return(
        <React.Fragment>
           <div className="container-fluid pl-0 pr-0">
            <Navbar collapseOnSelect expand="lg" variant="dark">
              <Navbar.Brand href="#home" className='text-dark'>
                <img src={require("../container/images/at-inks-logo.png")} alt="" title='' width="25%" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Form className='search-forn' inline onSubmit={handleSubmit}>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  <Button type="submit" className='p-0 text-dark border-0 btn-dark'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                  </Button>
                </Form>
                <Nav className="ml-auto">
                  <Nav.Link href="#home" className='text-dark'>
                    <Button className='btn-dark checkout' style={{fontSize:"16px"}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>&nbsp;&nbsp;
                    Checkout(200)</Button>
                  </Nav.Link>
                  <div className='faUser'><FontAwesomeIcon icon={faUser} /></div>
                  <Nav.Link href="#home" className='text-dark'>
                    <select class="form-select user-admin" aria-label="Default select example">
                      
                      <option selected  style={{fontSize:"16px"}}>
                        <img src={require("../container/images/at-inks-logo.png")} alt="" title='' width="25%" />
                        User Admin
                      </option>
                      <option value="1" style={{fontSize:"16px"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>
                        User Admin 2
                      </option>
                    </select>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
           </div>
        </React.Fragment>
    );
}

export default NavBar;