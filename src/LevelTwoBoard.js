import * as React from 'react';
import ButtonAppBar from './components/AppBar';
import { getDatabase, ref, query, orderByChild } from "firebase/database";

export default function LevelTwoBoard() {
return (
    <div>
        <ButtonAppBar runtimer={false} showHomeButton={true} showLeaderBoard={true}/>
        Board 2
    </div>
);
}
