import Phaser from 'phaser'

class Game extends Phaser.Scene {

    preload() {
        this.load.multiatlas('gamescene', './assets/spritesheet.json', 'assets')

    }

    create() {
        const fieldBackground = this.add.sprite(250, 370, 'gamescene', 'Field.png')
        fieldBackground.setScale(0.29, 0.29)

        const progress =  this.add.sprite(0, 0, 'gamescene', 'ProgressHolder.png')
        progress.setScale(0.375,0.375)

        const bonuses = this.add.sprite(330, 730, 'gamescene', 'bonuses.png')
        bonuses.setScale(0.27,0.27)

        const bonusText = this.add.sprite(330, 660, 'gamescene', 'бонусы.png')
        bonusText.setScale(0.27, 0.27)

        const timer = this.add.sprite(80, 720, 'gamescene', 'panel score.png')
        timer.setScale(0.13,0.13)

        const pause = this.add.sprite(450, 50, 'gamescene', 'pause.png')
        pause.setScale(0.2, 0.2)

        const progressText = this.add.sprite(250, 40, 'gamescene', 'прогресс.png')
        progressText.setScale(0.3,0.3)

        const progressbar = this.add.sprite(250, 70, 'gamescene', 'Progressbarempty.png')
        progressbar.setScale(0.2,0.2)
    }
}


class Field {

}


export default Game