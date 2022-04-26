export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloaderScene' })
  }

  preload() {
    this.load.image('background', '/assets/img/background.png')
    // this.load.image('ground', '/assets/img/platform.png')

    this.load.image('window', '/assets/img/window.png')
    this.load.image('wall-top', '/assets/img/wall-top.png')
    this.load.image('wall-bottom', '/assets/img/wall-bottom.png')
    this.load.image('toilet', '/assets/img/toilet.png')
    this.load.image('bed', '/assets/img/bed.png')
    this.load.image('basin', '/assets/img/basin.png')
    this.load.image('floatingshelf', '/assets/img/floatingshelf.png')
    this.load.image('sewer', '/assets/img/sewer.png')
    this.load.image('table', '/assets/img/table.png')
    this.load.image('tool1', '/assets/img/tool1.png')
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
