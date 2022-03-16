import { useState, useEffect } from "react";

const NUMERO_DE_FLOCS_INICIAL = 10;

/*****CREAR FLOCS*****/

function crearFlocs() {
  const flocs = [];
  for (let i = 0; i < NUMERO_DE_FLOCS_INICIAL; i++) {
    flocs.push(crearFloc());
  }
  return flocs;
}
function crearFloc() {
  return { x: -10 - 10 * Math.random(), y: 100 * Math.random() };
}

/*****MOURE FLOCS*****/

function moureFlocs(flocs) {
  return flocs.map(moureFloc);
}
function moureFloc(floc) {
  let x = floc.x + 5 * Math.random();
  if (x > 100) x = -10;
  return { ...floc, x: x };
}

/************/
// export function Nevada() {
//   const [flocs, setFlocs] = useState(crearFlocs);

//   useEffect(() => {
//     const intervalID = setInterval(() => {
//       setFlocs(moureFlocs);
//     }, 500);
//     return () => clearInterval(intervalID);
//   }, []);

//   return (
//     <>
//       {flocs.map((floc, index) => (
//         <Floc key={index} floc={floc} />
//       ))}
//     </>
//   );
// }
// function Floc({ floc }) {
//   const style = {
//     top: `${floc.x}%`,
//     left: `${floc.y}%`,
//     position: "absolute",
//   };
//   return <span style={style}>❄</span>;
// }

/**********understanding....*********/

export function Nevada() {
  const [flocs, setFlocs] = useState([
    { x: 10, y: 20 },
    { x: 20, y: 30 },
    { x: 30, y: 40 },
    { x: 15, y: 25 },
    { x: 25, y: 35 },
  ]);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setFlocs(moureFlocs);
    }, 500);
    return () => clearInterval(intervalID);
  }, []);

  return (
    <>
      {flocs.map((floc, index) => (
        <Floc key={index} floc={floc} />
      ))}
    </>
  );
}
function Floc({ floc }) {
  const style = {
    top: `${floc.x}%`,
    left: `${floc.y}%`,
    position: "absolute",
  };
  return <span style={style}>❄</span>;
}
