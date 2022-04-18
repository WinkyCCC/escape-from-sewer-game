export default class MainScene extends Phaser.Scene {
  player!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody
  constructor() {
    super({ key: 'MainScene' })
  }

  preload() {}

  create() {
    this.add.image(0, 0, 'background').setOrigin(0, 0).setScale(0.97)

    this.add.image(80, 200, 'toilet').setOrigin(0, 0).setScale(0.7)
    // this.add.image(0, 0, 'bed').setOrigin(0, 0)
    // this.add.image(0, 0, 'basin').setOrigin(0, 0)
    // this.add.image(0, 0, 'sewer').setOrigin(0, 0)
    this.add.image(180, 200, 'basin').setOrigin(0, 0).setScale(0.7)
    this.add.image(250, 320, 'sewer').setOrigin(0, 0).setScale(0.7)
    this.add.image(400, 15, 'wall').setOrigin(0, 0).setScale(0.7)
    this.add.image(550, 230, 'table').setOrigin(0, 0).setScale(0.7)

    //player
    this.player = this.physics.add.sprite(288, 200, 'popcorn').setScale(0.7)
    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('popcorn', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    })
  }

  update() {}
}
