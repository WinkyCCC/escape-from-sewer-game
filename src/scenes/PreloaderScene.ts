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
    this.load.image('platform-1', '/assets/img/platform-1.png')
    this.load.image('platform-2', '/assets/img/platform-2.png')
    this.load.image('platform-3', '/assets/img/platform-3.png')
    this.load.image('platform-4', '/assets/img/platform-4.png')
    this.load.image('platform-5', '/assets/img/platform-5.png')

  }

  create() {
    this.scene.start('MainScene')
  }

  update() {}
}
