import * as React from 'react';
import Common from './Common';
import Lev1 from './level_1.jpg';
import SpongeBob from './spongebob.png';
import BobMarley from './bobmarley.png';
import Stewie from './Stewie.png';

const div1Style={
    position: 'absolute',
    background: 'transparent',
    width: '6%',
    height: '5%',
    top: '29%',
    left: '7%',
    cursor: 'pointer'
}

const div2Style={
    position: 'absolute',
    background: 'transparent',
    width: '3.5%',
    height: '3.5%',
    bottom: '2%',
    right: '11%',
    cursor: 'pointer'
}
const div3Style={
    position: 'absolute',
    background: 'transparent',
    width: '5%',
    height: '7%',
    top: '39%',
    left: '29%',
    cursor: 'pointer'
}
export default function LevelOne() {

return (
    <div>
    <Common imageSrc={Lev1} char1Src={SpongeBob}  char2Src={BobMarley} char3Src={Stewie} div1Style={div1Style} div2Style={div2Style} div3Style={div3Style} id1={'spongeBob'} id2={'bobMarley'} id3={'stewie'} primary1={'Sponge Bob'} primary2={'Bob Marley'} primary3={'Stewie'} name1={'Sponge Bob'} name2={'Bob Marley'} name3={'Stewie'} first={true} level={'first'}/>
    </div>
);
}
