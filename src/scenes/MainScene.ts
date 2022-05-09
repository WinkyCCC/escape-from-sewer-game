export default class MainScene extends Phaser.Scene {
  DEBUG_SPEED = 5

  player!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody
  cursors!: Phaser.Types.Input.Keyboard.CursorKeys
  sewer!: Phaser.Types.Physics.Arcade.ImageWithStaticBody
  walltop!: Phaser.Types.Physics.Arcade.ImageWithStaticBody
  wallbottom!: Phaser.Types.Physics.Arcade.ImageWithStaticBody
  tool1!: Phaser.Physics.Arcade.Group
  platform1!: Phaser.Types.Physics.Arcade.ImageWithStaticBody
  platform2!: Phaser.Types.Physics.Arcade.ImageWithStaticBody
  platform3!: Phaser.Types.Physics.Arcade.ImageWithStaticBody
  platform4!: Phaser.Types.Physics.Arcade.ImageWithStaticBody
  platform5!: Phaser.Types.Physics.Arcade.ImageWithStaticBody
  platform31!: Phaser.Types.Physics.Arcade.ImageWithStaticBody
  people!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody
  tool!: Phaser.Physics.Arcade.Group
  platformGroup: Phaser.GameObjects.Group
  wall: Phaser.Types.Physics.Arcade.ImageWithStaticBody

  constructor() {
    super('game')
  }

  preload() {}

  create() {
    //WorldBound Cursor and background
    this.physics.world.setBounds(0, 0, 10000, 530)
    this.cursors = this.input.keyboard.createCursorKeys()
    this.add.image(-200, 20, 'background').setOrigin(0, 0).setScale(1.1)

    //Sewer
    this.sewer = this.physics.add
      .staticImage(-85, 445, 'sewer')
      .setOrigin(0, 0)
      .setScale(1.1)
      .refreshBody()

    //add background music
    // this.Music = this.sound.add('background', { loop: true })
    // this.bgMusic.play()

    //Wall
    this.wall = this.physics.add
      .staticImage(660, 380, 'wall')
      .setScale(1)
      .refreshBody()
    this.wall = this.physics.add
      .staticImage(660, 50, 'wall')
      .setScale(0.7)
      .refreshBody()
    this.wall = this.physics.add
      .staticImage(2550, 50, 'wall')
      .setScale(0.7)
      .refreshBody()
    this.wall = this.physics.add
      .staticImage(2550, 390, 'wall')
      .setScale(1)
      .refreshBody()
    this.wall = this.physics.add
      .staticImage(4180, 550, 'wall')
      .setScale(1)
      .refreshBody()
    this.wall = this.physics.add
      .staticImage(4180, 110, 'wall')
      .setScale(1.5)
      .refreshBody()
    // this.physics.add.collider(this.player, this.wall)

    //Platform
    this.platform4 = this.physics.add
      .staticImage(380, 320, 'platform-4')
      .setScale(0.7)
      .refreshBody()
    this.platform4 = this.physics.add
      .staticImage(150, 400, 'platform-4')
      .setScale(0.7)
      .refreshBody()

    // this.platform4
    //   .staticImage(1100, 250, 'platform-4')
    //   .setOrigin(0, 0)
    //   .setScale(1)
    //   .refreshBody()

    // this.platform4 = this.physics.add
    //   .staticImage(1400, 100, 'platform-4')
    //   .setOrigin(0, 0)
    //   .setScale(1)

    // this.platform5 = this.physics.add
    //   .staticImage(1530, 370, 'platform-5')
    //   .setOrigin(0, 0)
    //   .setScale(1)
    //   .refreshBody()

    // this.platform4 = this.physics.add
    //   .staticImage(2200, 330, 'platform-4')
    //   .setOrigin(0, 0)
    //   .setScale(1)

    // //wall-top
    this.walltop = this.physics.add
      .staticImage(400, 80, 'wall-top')
      .setOrigin(0, 0)
      .setScale(0.8)
      .refreshBody()

    this.sewer.body.checkCollision.down = false
    this.sewer.body.checkCollision.down = false

    // platform.body.checkCollision.down = false

    //player
    this.player = this.physics.add
      .sprite(150, 300, 'popcorn')
      .setScale(0.7)
      .refreshBody()

    this.player.body.checkCollision.right = true
    this.player.body.checkCollision.left = true

    this.player.setBounce(0)
    this.player.setCollideWorldBounds(true)

    this.anims.create({
      key: 'popcorn-left',
      frames: this.anims.generateFrameNumbers('popcorn', { start: 3, end: 5 }),
      frameRate: 10,
      repeat: -1,
    })

    this.anims.create({
      key: 'popcorn-turn',
      frames: this.anims.generateFrameNumbers('popcorn', { start: 6, end: 7 }),
      frameRate: 10,
      repeat: -1,
    })

    this.anims.create({
      key: 'popcorn-right',
      frames: this.anims.generateFrameNumbers('popcorn', { start: 0, end: 2 }),
      frameRate: 10,
      repeat: -1,
    })

    this.player.anims.play('popcorn-turn', true)

    //People
    this.people = this.physics.add
      .sprite(1646, 195, 'people')
      // .sprite(100, 195, 'people')
      .setScale(1)
      .refreshBody()

    this.people.setCollideWorldBounds(true)
    this.physics.add.collider(this.people, this.platform5)
    // this.physics.add.collider(this.people)

    this.anims.create({
      key: 'people-turn',
      frames: this.anims.generateFrameNumbers('people', {
        start: 0,
        end: 1,
      }),
      frameRate: 10,
      repeat: -1,
    })

    this.people.anims.play('people-turn')

    // Collision

    //tool
    this.tool = this.physics.add.group({
      key: 'tool',
      repeat: 1,
      setXY: { x: 300, y: 0, stepX: 70 },
    })
    // this.tool = this.setCollideWorldBounds(true)

    this.cameras.main.startFollow(this.player, false, 1, 0)
    this.cameras.main.setZoom(1)

    //how to collect tools?
    // collecttool(this.player, this.tool1); {
    //   this.tool1.destroy(true, true)
    // }
  }

  update() {
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160 * this.DEBUG_SPEED)
      this.player.anims.play('popcorn-left', true)
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160 * this.DEBUG_SPEED)
      this.player.anims.play('popcorn-right', true)
    } else {
      this.player.setVelocityX(0)
      this.player.anims.play('popcorn-turn')
    }

    // FIXME: this.player.body.touching.down
    if (
      this.cursors.up.isDown &&
      (this.player.body.onFloor() || this.player.body.touching.down)
    ) {
      console.log('here')
      this.player.setVelocityY(-160)
    }
  }
}
// function collecttool(player: any, tools: any) {
//   throw new Error('Function not implemented.')
// }
