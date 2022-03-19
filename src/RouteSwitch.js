import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import LevelOne from "./LevelOne";
import LevelTwo from "./LevelTwo";
import LevelThree from "./LevelThree";
import LevelFour from "./LevelFour";
import LevelOneBoard from "./LevelOneBoard";
import LevelTwoBoard from "./LevelTwoBoard";
import LevelThreeBoard from "./LevelThreeBoard";
import LevelFourBoard from "./LevelFourBoard";
const RouteSwitch = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/firstLevel" element={<LevelOne />} />
            <Route path="/secondLevel" element={<LevelTwo />} />
            <Route path="/thirdLevel" element={<LevelThree />} />
            <Route path="/fourthLevel" element={<LevelFour />} />
            <Route path="/levelOneBoard" element={<LevelOneBoard />} />
            <Route path="/levelTwoBoard" element={<LevelTwoBoard />} />
            <Route path="/levelThreeBoard" element={<LevelThreeBoard />} />
            <Route path="/levelFourBoard" element={<LevelFourBoard />} />
        </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;