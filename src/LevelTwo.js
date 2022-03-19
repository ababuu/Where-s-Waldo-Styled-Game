import * as React from 'react';
import Lev2 from './level 2.jpg'
import './style.css';
import Common from './Common';
import Rick from './RickSanchez.png';
import Waldo from './waldo.png';
import Jack from './jack.png';

const div1Style={
    position: 'absolute',
    background: 'transparent',
    width: '5%',
    height: '8%',
    bottom: '7%',
    right: '29%',
    cursor: 'pointer'
}

const div2Style={
    position: 'absolute',
    background: 'transparent',
    width: '3.5%',
    height: '6%',
    bottom: '27%',
    left: '28%',
    cursor: 'pointer'
}
const div3Style={
    position: 'absolute',
    background: 'transparent',
    width: '5%',
    height: '7%',
    top: '31%',
    right: '13%',
    cursor: 'pointer'
}
const characters=['spongeBob','bobMarley','stewie']
export default function LevelOne() {

return (
    <div>
    <Common imageSrc={Lev2} char1Src={Rick}  char2Src={Waldo} char3Src={Jack} div1Style={div1Style} div2Style={div2Style} div3Style={div3Style} id1={'rick'} id2={'waldo'} id3={'jack'} primary1={'Rick Sanchez'} primary2={'Waldo'} primary3={'Samurai Jack'} name1={'Rick Sanchez'} name2={'Waldo'} name3={'Samurai Jack'}  second={true}/>
    </div>
);
}
