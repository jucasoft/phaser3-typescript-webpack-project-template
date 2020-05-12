import './css/style.css'
import {Game} from 'phaser';
import {Demo} from './main/scene/demo';

const config = {
    type: Phaser.AUTO, // AUTO Detect Renderer.
    backgroundColor: '#2a216b',
    width: 800,
    height: 600,
    scene: Demo
};

const game = new Game(config);
