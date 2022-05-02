
export default class MainScene extends Phaser.Scene {
  player!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody
  cursors!: Phaser.Types.Input.Keyboard.CursorKeys
  sewer!: Phaser.Types.Physics.Arcade.ImageWithStaticBody
  speed = 1
  walltop!: Phaser.Types.Physics.Arcade.ImageWithStaticBody
  wallbottom!: Phaser.Types.Physics.Arcade.ImageWithStaticBody
  tool1!: Phaser.Physics.Arcade.Group

  constructor() {
    super({ key: 'MainScene' })
  }

  preload() {}

  create() {

    //  x, y = center of the path
    //  width, height = size of the elliptical path
    //  speed = speed the sprite moves along the path per frame

    this.physics.world.setBounds(0, 0, 10000, 460)
    this.cursors = this.input.keyboard.createCursorKeys()

    this.add.image(0, 0, 'background').setOrigin(0, 0)
    // this.add.image(80, 200, 'toilet').setOrigin(0, 0).setScale(0.7)
    // this.add.image(700, 100, 'window').setOrigin(0, 0).setScale(0.6)
    // this.add.image(1000, 100, 'window').setOrigin(0, 0).setScale(0.6)
    // this.add.image(800, 220, 'bed').setOrigin(0, 0).setScale(0.5)
    // this.add.image(180, 200, 'basin').setOrigin(0, 0).setScale(0.7)

    this.sewer = this.physics.add
      .staticImage(100, 380, 'sewer')
      .setOrigin(0, 0)
      .setScale(1)
      .refreshBody()

    // //wall-top
    // this.walltop = this.physics.add
    //   .staticImage(400, 80, 'wall-top')
    //   .setOrigin(0, 0)
    //   .setScale(0.8)
    //   .refreshBody()

    // //wall-bottom
    // this.wallbottom = this.physics.add
    //   .staticImage(400, 200, 'wall-bottom')
    //   .setOrigin(0, 0)
    //   .setScale(0.8)
    //   .refreshBody()

    // this.table.body.checkCollision.down = false

    // platform.body.checkCollision.down = false

    //player
    this.player = this.physics.add
      .sprite(400, 300, 'popcorn')
      .setScale(0.7)
      .refreshBody()

    this.player.body.checkCollision.right = true
    this.player.body.checkCollision.left = true

    this.player.setBounce(0.2)
    this.player.setCollideWorldBounds(true)

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('popcorn', { start: 3, end: 5 }),
      frameRate: 10,
      repeat: -1,
    })

    this.anims.create({
      key: 'turn',
      frames: this.anims.generateFrameNumbers('popcorn', { start: 6, end: 7 }),
      frameRate: 10,
      repeat: -1,
    })

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('popcorn', { start: 0, end: 2 }),
      frameRate: 10,
      repeat: -1,
    })

    this.player.anims.play('turn', true)

    // Collision
    this.physics.add.collider(this.player, this.wallbottom)
    this.physics.add.collider(this.player, this.walltop)

    // //tool1
    // this.tool1 = this.physics.add.group({
    //   key: 'tool',
    //   repeat: 1,
    //   setXY: { x: 300, y: 0, stepX: 70 },
    // })

    this.cameras.main.startFollow(this.player, false, 1, 0)
    this.cameras.main.setZoom(0.9)

    //how to collect tools?
    // collecttool(this.player, this.tool1); {
    //   this.tool1.destroy(true, true)
    // }
  }

  update() {
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160 * this.speed)
      this.player.anims.play('left', true)
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160 * this.speed)
      this.player.anims.play('right', true)
    } else {
      this.player.setVelocityX(0)
      this.player.anims.play('turn')
    }

    if (this.cursors.up.isDown) {
      console.log('here')
      this.player.setVelocityY(-160)
    }
  }
}
// function collecttool(player: any, tools: any) {
//   throw new Error('Function not implemented.')
// }
