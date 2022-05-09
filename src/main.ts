import 'phaser'
import MainScene from './scenes/MainScene'
import PreloaderScene from './scenes/PreloaderScene'
import GameOpenScene from './scenes/GameOpenScene'
import GameStartScene from './scenes/GameStartScene'

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  backgroundColor: '#483B3A',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 800,
    height: 530,
    zoom: 1,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: true,
    },
  },
  scene: [PreloaderScene, MainScene, GameOpenScene, GameStartScene],
}

export default new Phaser.Game(config)
