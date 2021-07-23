import Phaser from 'phaser'
import Game from './scenes/game'


const config ={
    width: 800,
    height: 500,
    type: Phaser.AUTO
}

const game = new Phaser.Game(config)

game.scene.add('game', Game)

game.scene.start('game')

