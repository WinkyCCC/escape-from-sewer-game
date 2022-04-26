export default class MainScene extends Phaser.Scene {
  player!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody
  cursors!: Phaser.Types.Input.Keyboard.CursorKeys
  table!: Phaser.GameObjects.Image
  wall!: Phaser.Types.Physics.Arcade.ImageWithStaticBody
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
    this.physics.world.setBounds(0, 0, 10000, 300)
    this.cursors = this.input.keyboard.createCursorKeys()

    this.add.image(0, 0, 'background').setOrigin(0, 0)
    this.add.image(80, 200, 'toilet').setOrigin(0, 0).setScale(0.7)
    this.add.image(0, 0, 'bed').setOrigin(0, 0).setScale(0.3)
    this.add.image(0, 0, 'sewer').setOrigin(0, 0).setScale(0.3)
    this.add.image(180, 200, 'basin').setOrigin(0, 0).setScale(0.3)
    this.sewer = this.physics.add
      .staticImage(250, 320, 'sewer')
      .setOrigin(0, 0)
      .setScale(0.7)
      .refreshBody()

    //wall-top
    this.walltop = this.physics.add
      .staticImage(400, 80, 'wall-top')
      .setOrigin(0, 0)
      .setScale(0.8)
      .refreshBody()

    //wall-bottom
    this.wallbottom = this.physics.add
      .staticImage(400, 200, 'wall-bottom')
      .setOrigin(0, 0)
      .setScale(0.8)
      .refreshBody()

    //table
    this.table = this.physics.add
      .staticImage(550, 250, 'table')
      .setOrigin(0, 0)
      .setScale(0.6)
      .refreshBody()

    //player
    this.player = this.physics.add
      .sprite(400, 800, 'popcorn')
      .setScale(0.5)
      .refreshBody()

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
    this.physics.add.collider(this.player, this.table)
    this.physics.add.collider(this.player, this.wallbottom)
    this.physics.add.collider(this.player, this.walltop)


    //tool1
    this.tool1 = this.physics.add.group({
      key: 'tool1',
      repeat: 1,
      setXY: { x: 300, y: 0, stepX: 70 },
    })

    this.tool1.children.iterate(function (child) {
      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8))
    })

    this.cameras.main.startFollow(this.player)
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
    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-330)
    }
  }
}
