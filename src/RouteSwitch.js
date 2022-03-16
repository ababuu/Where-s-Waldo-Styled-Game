import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import LevelOne from "./LevelOne";
import LevelTwo from "./LevelTwo";
import LevelThree from "./LevelThree";
import LevelFour from "./LevelFour";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/firstLevel" element={<LevelOne />} />
            <Route path="/secondLevel" element={<LevelTwo />} />
            <Route path="/thirdLevel" element={<LevelThree />} />
            <Route path="/fourthLevel" element={<LevelFour />} />
        </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;