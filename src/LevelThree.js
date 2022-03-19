import * as React from 'react';
import Common from './Common';
import Lev3 from './level_3.jpg'
import './style.css';
import SaltBae from './saltBae.png';
import BabyGroot from './babyGroot.png';
import PickleRick from './pickleRick.png';

const div1Style={
    position: 'absolute',
    background: 'transparent',
    width: '3%',
    height: '5%',
    top: '39%',
    left: '23%',
    cursor: 'pointer'
}

const div2Style={
    position: 'absolute',
    background: 'transparent',
    width: '5%',
    height: '6%',
    bottom: '14%',
    right: '13%',
    cursor: 'pointer'
}
const div3Style={
    position: 'absolute',
    background: 'transparent',
    width: '3%',
    height: '4%',
    top: '55%',
    left: '10%',
    cursor: 'pointer'
}
const characters=['spongeBob','bobMarley','stewie']
export default function LevelOne() {

return (
    <div>
    <Common imageSrc={Lev3} char1Src={SaltBae}  char2Src={BabyGroot} char3Src={PickleRick} div1Style={div1Style} div2Style={div2Style} div3Style={div3Style} id1={'saltBae'} id2={'babyGroot'} id3={'pickleRick'} primary1={'Salt Bae'} primary2={'Baby Groot'} primary3={'Pickle Rick'} name1={'Salt Bae'} name2={'Baby Groot'} name3={'Pickle Rick'} third={true}/>
    </div>
);
}
