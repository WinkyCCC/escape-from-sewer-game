export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super({ key: 'preloader' })
  }

  preload() {
    //Background
    this.load.image('background', '/assets/img/background.jpg')

    //Player
    this.load.spritesheet('popcorn', '/assets/img/popcorn.png', {
      frameWidth: 128,
      frameHeight: 128,
    })

    //Tool
    this.load.spritesheet('tool', '/assets/img/tool.png', {
      frameWidth: 45,
      frameHeight: 21,
    })

//Sewer
    this.load.image('sewer', '/assets/img/sewer.png')

    //Platform
    this.load.image('platform-1', '/assets/img/platform-1.png')
    this.load.image('platform-2', '/assets/img/platform-2.png')
    this.load.image('platform-3', '/assets/img/platform-3.png')
    this.load.image('platform-3-1', '/assets/img/platform-3.png')
    this.load.image('platform-4', '/assets/img/platform-4.png')
    this.load.image('platform-5', '/assets/img/platform-5.png')

    //Wall
    this.load.image('wall', '/assets/img/wall.png')


    this.load.spritesheet('people', '/assets/img/people.png', {
      frameWidth: 149,
      frameHeight: 188,
    })
    this.load.spritesheet('tool', '/assets/img/tool.png', {
      frameWidth: 149,
      frameHeight: 188,
    })
    this.load.spritesheet('cheese', '/assets/img/cheese.png', {
      frameWidth: 35,
      frameHeight: 38,
    })
    this.load.image('gamestart', '/assets/img/gamestart.png')
    this.load.image('gameopen', '/assets/img/preparePlayScene.png')

    this.load.audio('music', ['assets/audio/missing.mp3'])
  }

  create() {
    this.scene.start('gamestart')
  }

  update() {}
}
