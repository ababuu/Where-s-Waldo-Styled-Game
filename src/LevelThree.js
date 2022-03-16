import * as React from 'react';
import Common from './Common';
import Lev3 from './level_3.jpg'
import ButtonAppBar from './components/AppBar';

export default function LevelThree() {
return (
    <div>
        <ButtonAppBar/>
    <Common imageSrc={Lev3}/>
    </div>
);
}
