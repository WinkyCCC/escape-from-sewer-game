import 'phaser'
import MainScene from './scenes/MainScene'
import PreloaderScene from './scenes/PreloaderScene'

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  backgroundColor: '#483B3A',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 400,
    height: 250,
    zoom: 1,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: true,
    },
  },
  scene: [PreloaderScene, MainScene],
}

export default new Phaser.Game(config)
