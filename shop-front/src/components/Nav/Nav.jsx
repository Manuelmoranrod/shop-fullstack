import React from "react";
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'


const Nav = () => {
  return (
    <Navbar>
      <Container>

        <Navbar.Brand href="#home">AWS warehouse</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>

    </Navbar>
  );
};

export default Nav;
