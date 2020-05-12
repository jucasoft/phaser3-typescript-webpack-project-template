import './css/style.css'
import 'phaser';
import {Demo} from './main/scene/demo';

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#2a216b',
    width: 800,
    height: 600,
    scene: Demo
};

const game = new Phaser.Game(config);
