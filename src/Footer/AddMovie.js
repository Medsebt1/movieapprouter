import React, { useState } from "react";
import { Button, Form, FormControl, Modal } from "react-bootstrap";

const AddMovie = ({ add, list }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [length, setLength] = useState("");
  const [type, setType] = useState("");
  const [img, setImg] = useState("");
  const [rating, setRating] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: Math.random(),
      name: name,
      Logo: img,
      Annee: year,
      Type: type,
      filmTime: length,
      rating: rating,
    };
    if (name && year && length && type && img && rating) {
      add(newMovie);
      handleClose();
    } else {
      alert("need more informations");
    }
  };
  return (
    <div>
      <Button variant="secondary" onClick={handleShow}>
        Add a New Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Please fullfill those steps to add a new film
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="text"
              placeholder="Add the film 's name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <Form.Control
              type="text"
              placeholder="Production year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
            <br />
            <Form.Control
              type="text"
              placeholder="Film's length in minutes"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <br />
            <Form.Control
              type="text"
              placeholder="Drama,action,Horror..."
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
            <br />
            <Form.Control
              type="text"
              placeholder="film 's picture"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
            <br />
            <Form.Control
              type="text"
              placeholder="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="secondary" type="submit">
              Add
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddMovie;
