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
    x: -100 * Math.random(),
    y: -40 + 300 * Math.random(),
  };
}
