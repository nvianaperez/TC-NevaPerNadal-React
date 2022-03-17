import { FRAME_RATE } from "./constants";

/*****MOURE FLOCS*****/
export function moureFlocs(flocs) {
  return flocs.map(moureFloc);
}
function moureFloc(floc) {
  let x = floc.x + (10 / FRAME_RATE) * Math.random();
  if (x > 100) x = -10;
  let y = floc.y + (10 / FRAME_RATE) * Math.random();
  if (y > 100) x = -10;
  return { ...floc, x: x, y: y };
}
