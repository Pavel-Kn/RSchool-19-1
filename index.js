import "./index.css";
import initApp from "./src/app";
import { getRandomColor } from './src/utils';

const bgColor = getRandomColor();
initApp(bgColor);