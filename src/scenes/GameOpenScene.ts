export default class GameOpen extends Phaser.Scene {
  startMusic!: Phaser.Sound.BaseSound
  cursors!: Phaser.Types.Input.Keyboard.CursorKeys
  constructor() {
    super('gameopen')
  }
  preload() {}
  create() {
    //add image
    this.add.image(0, 0, 'gameopen').setOrigin(0)

    //add bg music
    // this.startMusic = this.sound.add('music', { loop: true })
    // this.startMusic.play()
  }

  update() {
    this.cursors = this.input.keyboard.createCursorKeys()
    if (this.cursors.space?.isDown) {
      this.scene.stop('gameopen')
      this.scene.start('game')
    }
  }
}
