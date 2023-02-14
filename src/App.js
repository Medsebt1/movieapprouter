import "./App.css";
import EnTete from "./components/entete/EnTete";
import "bootstrap/dist/css/bootstrap.min.css";
import FilmList from "./components/filmlist/FilmList";
import AddMovie from "./Footer/AddMovie";
import BottomFoot from "./components/bottomfoot/BottomFoot";
import { useState } from "react";
import { Films } from "./components/filmlist/DataFile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Car from "./components/filmlist/Car";
import Trailer from "./components/filmlist/Trailer";

function App() {
  const [list, setList] = useState(Films);
  const handleDelete = (id) => {
    setList(list.filter((el) => el.id !== id));
  };
  const handleAdd = (newMovie) => {
    setList([...list, newMovie]);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <EnTete />

        <Routes>
          <Route
            path="/"
            element={<FilmList del={handleDelete} list={list} />}
          />
          <Route path="/DataFile/:id" element={<Trailer test={list} />} />
        </Routes>
        <AddMovie className="f" add={handleAdd} />
        <BottomFoot />
      </BrowserRouter>
    </div>
  );
}

export default App;
