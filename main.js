import "normalize.css";
import { Application, Assets } from "pixi.js";
import { assetsMap } from "./js/assetsMap.js";

// Create the application
const app = new Application({
  width: 600,
  height: 600,
  backgroundColor: 0x2c2c2c,
  view: document.getElementById("canvas"),
});

// TODO: import it
// Assets.load(assetsMap.sprites.);
