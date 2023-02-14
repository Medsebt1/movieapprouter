import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import React from "react";
import StarRating from "./StarRating";

const EnTete = () => {
  return (
    <div>
      <Navbar className="All" bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">MedMovies</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">New</Nav.Link>
              <NavDropdown title="watchList" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Drama</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Comedy</NavDropdown.Item>
                <NavDropdown.Item href="#action7">horror</NavDropdown.Item>
                <NavDropdown.Item href="#action6">trailer</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action8">
                  Mixture Of Classic Movies
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <StarRating />
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="looking for..."
                className="me-2"
                aria-label="Search"
              />
              <Button variant="secondary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default EnTete;
