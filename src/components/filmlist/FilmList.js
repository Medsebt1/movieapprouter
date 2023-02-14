import "bootstrap/dist/css/bootstrap.min.css";
import Car from "./Car";

function FilmList({ del, list }) {
  return (
    <div>
      <Car del={del} list={list} />
    </div>
  );
}

export default FilmList;
