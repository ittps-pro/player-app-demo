import "./public-path";
import { render } from "react-dom";
import axios from "axios"

import App from "./App";

// To use any npm package on Pipedream, just import it


const rootElement = document.getElementById("root");
render(<App classname="container" />, rootElement);
