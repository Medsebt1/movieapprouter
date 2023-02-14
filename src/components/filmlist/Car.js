import React from "react";
import { Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const Car = ({ list, del }) => {
  return (
    <div>
      <Carousel>
        {list.map((el) => (
          <Carousel.Item>
            <img className="Logo" src={el.Logo} alt="First slide" />
            <Carousel.Caption className="ktiba">
              <h3>{el.name}</h3>
              <h3>{el.filmTime}</h3>
              <h3>{el.Type}</h3>
              <p>{el.Annee}</p>
              <div className="bou">
                <Link to={`/DataFile/${el.id}`}>
                  <Button variant="secondary">watch trailer</Button>
                </Link>
                <br />
                <Button onClick={() => del(el.id)} variant="secondary">
                  Delete
                </Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Car;
