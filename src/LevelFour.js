import ButtonAppBar from './components/AppBar';
import * as React from 'react';
import Common from './Common';
import WallE from './wall-e.png';
import R2D2 from './r2d2.png';
import Lev4 from './level4.jpeg';
import Bender from './Bender.png';

const div1Style={
    position: 'absolute',
    background: 'transparent',
    width: '4%',
    height: '13%',
    top: '40%',
    left: '26%',
    cursor: 'pointer'
}

const div2Style={
    position: 'absolute',
    background: 'transparent',
    width: '4.5%',
    height: '6%',
    bottom: '21%',
    left: '40%',
    cursor: 'pointer'
}
const div3Style={
    position: 'absolute',
    background: 'transparent',
    width: '5%',
    height: '15%',
    bottom: '2%',
    left: '22%',
    cursor: 'pointer'
}


export default function LevelFour() {
return (
    <div>
    <Common imageSrc={Lev4} char1Src={Bender}  char2Src={WallE} char3Src={R2D2} div1Style={div1Style} div2Style={div2Style} div3Style={div3Style} id1={'bender'} id2={'wall-e'} id3={'r2d2'} primary1={'Bender'} primary2={'Wall-E'} primary3={'R2-D2'} name1={'Bender'} name2={'Wall-E'} name3={'R2-D2'} fourth={true} level={'fourth'}/>
    </div>
);
}
