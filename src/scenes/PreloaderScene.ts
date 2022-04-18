export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloaderScene' })
  }

  preload() {
    this.load.image('background', '/assets/img/background.jpg')
    // this.load.image('ground', '/assets/img/platform.png')

    this.load.image('window', '/assets/img/window.png')
    this.load.image('wall', '/assets/img/wall.png')
    this.load.image('toilet', '/assets/img/toilet.png')
    this.load.image('bed', '/assets/img/bed.png')
    this.load.image('basin', '/assets/img/basin.png')
    this.load.image('floatingshelf', '/assets/img/floatingshelf.png')
    this.load.image('sewer', '/assets/img/sewer.png')
    this.load.image('table', '/assets/img/table.png')
    this.load.spritesheet('popcorn', '/assets/img/popcorn.png', {
      frameWidth: 128,
      frameHeight: 128,
    })
  }

  create() {
    this.scene.start('MainScene')
  }

  update() {}
}
