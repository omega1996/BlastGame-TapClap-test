import Phaser from 'phaser'
import Game from './scenes/game'


const config ={
    width: 500,
    height: 800,
    type: Phaser.AUTO,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 100,
                debug: true
            }
        }
    },
    backgroundColor: "#a1a1a1"
}

const game = new Phaser.Game(config)

game.scene.add('game', Game)

game.scene.start('game')

