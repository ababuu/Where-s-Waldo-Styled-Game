import * as React from 'react';
import Lev2 from './level 2.jpg'
import './style.css';
import ButtonAppBar from './components/AppBar';
import Common from './Common';
export default function LevelTwo() {
return (
    <div>
        <ButtonAppBar/>
        <Common imageSrc={Lev2}/>
    </div>
);
}