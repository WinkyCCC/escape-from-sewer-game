export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloaderScene' })
  }

  preload() {
    this.load.image('background', '/assets/img/background.jpg')
    this.load.spritesheet('popcorn', '/assets/img/popcorn.png', {
      frameWidth: 128,
      frameHeight: 128,
    })
    this.load.image('sewer', '/assets/img/sewer.png')
    this.load.image('tool', '/assets/img/tool.png')
  }

  create() {
    this.scene.start('MainScene')
  }

  update() {}
}
