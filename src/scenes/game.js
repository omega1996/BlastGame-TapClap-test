import Phaser from 'phaser'

class Game extends Phaser.Scene {

    preload() {
        this.load.multiatlas('gamescene', './assets/spritesheet.json', 'assets')

    }

    create() {

        const text = this.add.text(400, 250, 'Gamess ');
        text.setOrigin(0.5, 0.5)
        this.physics.add.existing(text)

        text.body.setCollideWorldBounds(true)

        const tile = this.add.sprite( 100,200, 'gamescene', 'red.png')
    }
}

export default Game