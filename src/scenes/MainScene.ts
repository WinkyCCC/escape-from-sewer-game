export default class MainScene extends Phaser.Scene {
  DEBUG_SPEED = 8

  cursors!: Phaser.Types.Input.Keyboard.CursorKeys
  sewer!: Phaser.Types.Physics.Arcade.ImageWithStaticBody
  platform1!: Phaser.Types.Physics.Arcade.ImageWithStaticBody
  platform4!: Phaser.Types.Physics.Arcade.ImageWithStaticBody
  people!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody
  tool!: Phaser.Physics.Arcade.Group
  wall!: Phaser.Types.Physics.Arcade.ImageWithStaticBody
  floor!: Phaser.Types.Physics.Arcade.ImageWithStaticBody
  platform4_1!: Phaser.Types.Physics.Arcade.ImageWithStaticBody
  platform4_2!: Phaser.Types.Physics.Arcade.ImageWithStaticBody
  platform4_3!: Phaser.Types.Physics.Arcade.ImageWithStaticBody
  platform4_4!: Phaser.Types.Physics.Arcade.ImageWithStaticBody
  platform4_5!: Phaser.Types.Physics.Arcade.ImageWithStaticBody
  platform4_6!: Phaser.Types.Physics.Arcade.ImageWithStaticBody
  platform4_9!: Phaser.Types.Physics.Arcade.ImageWithStaticBody
  platform4_8!: Phaser.Types.Physics.Arcade.ImageWithStaticBody
  platform4_7!: Phaser.Types.Physics.Arcade.ImageWithStaticBody
  player: GameObject | Group | GameObject[] | Group[]

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
    // this.physics.add.collider(this.player, this.wall)
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

    //Platform
    this.floor = this.physics.add
      .staticImage(300, 550, 'floor')
      .setScale(1)
      .refreshBody()

    this.platform4_1 = this.physics.add
      .staticImage(380, 320, 'platform-4')
      .setScale(0.7)
    this.platform4_2 = this.physics.add
      .staticImage(150, 400, 'platform-4')
      .setScale(0.7)
      .refreshBody()
    this.platform4_3 = this.physics.add
      .staticImage(890, 280, 'platform-4')
      .setScale(0.7)
      .refreshBody()
    this.platform4_4 = this.physics.add
      .staticImage(1120, 280, 'platform-4')
      .setScale(1.1)
      .refreshBody()
    this.platform4_5 = this.physics.add
      .staticImage(1120, 160, 'platform-4')
      .setScale(1.1)
      .refreshBody()
    this.platform4_6 = this.physics.add
      .staticImage(1120, 440, 'platform-4')
      .setScale(1.1)
      .refreshBody()
    this.platform4_7 = this.physics.add
      .staticImage(1580, 440, 'platform-4')
      .setScale(1.4)
      .refreshBody()
    this.platform4_8 = this.physics.add
      .staticImage(1800, 440, 'platform-4')
      .setScale(1.4)
      .refreshBody()
    this.platform4_9 = this.physics.add
      .staticImage(1530, 300, 'platform-4')
      .setScale(0.7)
      .refreshBody()

    // this.physics.add.collider(this.people, this.platform4_5)
    // this.physics.add.collider(this.player, this.platform4_1)

    //Player
    this.player = this.physics.add
      .sprite(150, 300, 'popcorn')
      .setScale(0.8)
      .refreshBody()

    this.player.body.setGravityY(200)

    this.player.setCollideWorldBounds(true)

    //Player Animation
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

    //Collect Tool
    this.physics.add.overlap(
      this.player,
      this.tool,
      this.collectTool,
      undefined,
      this,
    )

    //People
    this.people = this.physics.add
      .sprite(1646, 250, 'people')
      // .sprite(100, 195, 'people')
      .setScale(1)
      .refreshBody()

    this.people.setCollideWorldBounds(true)

    this.physics.add.collider(this.people, this.platform4)

    // this.physics.add.overlap(
    //   this.player,
    //   this.people,
    //   this.PeopleInterrupt,
    //   undefined,
    //   this,
    // )

    //People Animation
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
      repeat: 13,
      setXY: { x: 300, y: 0, stepX: 500 },
    })
    this.physics.add.collider(this.tool, this.floor)

    this.cameras.main.startFollow(this.player, false, 1, 0)
    this.cameras.main.setZoom(1)
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

    //this.player.body.touching.down
    if (
      this.cursors.up.isDown &&
      (this.player.body.onFloor() || this.player.body.touching.down)
    ) {
      console.log('here')
      this.player.setVelocityY(-330)
    }

    // if checkOverlap(this.people, this.player)
    // {

    // }
  }

  private collectTool(
    _player: Phaser.GameObjects.GameObject,
    tool: Phaser.GameObjects.GameObject,
  ) {
    tool.destroy()
  }

  private checkOverlap(
    _player: Phaser.GameObjects.GameObject,
    _people: Phaser.GameObjects.GameObject,
  ) {
    play
  }
}
// function collecttool(player: any, tools: any) {
//   throw new Error('Function not implemented.')
// }
