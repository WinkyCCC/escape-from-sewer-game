export default class gamestart extends Phaser.Scene {
  cursors: any
  constructor() {
    super('gamestart')
  }

  preload() {}

  create() {
    //add background
    this.add.image(0, 0, 'gamestart').setOrigin(0)
  }

  update(){
    this.cursors = this.input.keyboard.createCursorKeys()
    if (this.cursors.space?.isDown) {
      this.scene.stop('gamestart')
      this.scene.start('gameopen')
    }
  }
}
