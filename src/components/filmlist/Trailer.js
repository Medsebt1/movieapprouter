import React from "react";
import { useParams } from "react-router-dom";

const Trailer = ({ test }) => {
  const params = useParams();
  console.log(params.id);
  const movinf = test.find((el) => el.id === Number(params.id));
  console.log(movinf);
  return (
    <div className="aaa">
      Have a nice time with {movinf.name} 's{" "}
      <iframe className="fff" src={movinf.Trailer} title="Film"></iframe>
    </div>
  );
};

export default Trailer;
