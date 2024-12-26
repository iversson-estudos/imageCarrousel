import "./styles.css";
import { mainView } from "./views/mainView";
import { changeImg } from "./controllers/changeImg";

mainView();

setInterval(() => changeImg("next"), 500);
