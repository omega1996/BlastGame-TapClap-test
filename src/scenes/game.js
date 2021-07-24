import Phaser, { GameObjects } from 'phaser'

class Game extends Phaser.Scene {

    preload() {
        this.load.multiatlas('gamescene', './assets/spritesheet.json', 'assets')

    }

    create() {
        const fieldBackground = this.add.sprite(250, 370, 'gamescene', 'Field.png')
        fieldBackground.setScale(0.29, 0.29)

        const progress = this.add.sprite(0, 0, 'gamescene', 'ProgressHolder.png')
        progress.setScale(0.375, 0.375)

        const bonuses = this.add.sprite(330, 730, 'gamescene', 'bonuses.png')
        bonuses.setScale(0.27, 0.27)

        const bonusText = this.add.sprite(330, 660, 'gamescene', 'бонусы.png')
        bonusText.setScale(0.27, 0.27)

        const timer = this.add.sprite(80, 720, 'gamescene', 'panel score.png')
        timer.setScale(0.13, 0.13)

        const pause = this.add.sprite(450, 50, 'gamescene', 'pause.png')
        pause.setScale(0.2, 0.2)

        const progressText = this.add.sprite(250, 40, 'gamescene', 'прогресс.png')
        progressText.setScale(0.3, 0.3)

        const progressbar = this.add.sprite(250, 70, 'gamescene', 'Progressbarempty.png')
        progressbar.setScale(0.2, 0.2)


        // const field = this.add.rectangle(30, 130, 440, 480, 2)
        // field.setOrigin(0, 0)

        this.add.existing(new Field(this, 30, 130, 440, 480, 8, 9, 1))


    }
}


class Field extends Phaser.GameObjects.Grid {

    colors = ['red', 'blue', 'yellow', 'purple', 'green']



    constructor(scene, xPos, yPos, width, height, xTiles, yTiles, gap = 2, colorsNum = 5) {
        super(scene, xPos, yPos, width, height, width / xTiles, height / yTiles,)
        this.setOrigin(0, 0)
        this.gap = gap
        this.xPos = xPos;
        this.yPos = yPos;
        this.width = width;
        this.height = height;
        this.xTiles = xTiles;
        this.yTiles = yTiles;
        this.tileWidth = width / this.xTiles - gap
        this.tileHeight = height / (this.yTiles * 0.9) - gap

        if (this.colors.length < colorsNum) {
            throw new Error("not enough colors")
        }

        for (let i = 0; i < this.yTiles; i++) {
            for (let j = 0; j < this.xTiles; j++) {
                const tileXPosition = this.xPos + this.tileWidth * j + this.gap * j
                const tileYPosition = this.yPos + this.tileHeight * i * 0.9 - this.tileHeight * 0.1 + gap * i
                const color = this.colors[Math.floor(Math.random()*colorsNum)]
                let tile = this.scene.add.sprite(tileXPosition, tileYPosition, 'gamescene', color+'.png')
                tile.displayHeight = this.tileHeight
                tile.displayWidth = this.tileWidth
                tile.setOrigin(0, 0)
                tile.setDepth(100 - i - j)

            }
        }

        this.scene.add.existing(this)
    }

}


export default Game