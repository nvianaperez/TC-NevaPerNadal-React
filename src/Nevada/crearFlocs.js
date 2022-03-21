import { NUMERO_DE_FLOCS_INICIAL } from "./constants";

/*****CREAR FLOCS*****/
export function crearFlocs() {
  const flocs = [];
  for (let i = 0; i < NUMERO_DE_FLOCS_INICIAL; i++) {
    flocs.push(crearFloc());
  }
  return flocs;
}
function crearFloc() {
  return {
    x: -10 - 100 * Math.random(),
    y: -10 + 120 * Math.random(),
    //aixo és el que fa que els copos es disgreguin quan es creen i no vagin tots junts (-100 i +120)
  };
}
