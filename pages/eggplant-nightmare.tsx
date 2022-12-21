import Typography from "@mui/material/Typography";
import { NextPage } from "next/types";
import { type Scene } from "phaser";
import PhaserComponent from "../components/phaser/PhaserComponent";

function preloadScene(this: Scene) {
  this.load.image("player", "https://i.imgur.com/i2fxxTK.png");
  this.load.image("background", "https://i.imgur.com/v3VD6rs.png");
  this.load.image("enemy", "https://i.imgur.com/DOPB0i9.png");
}

function gameScene(this: Scene) {
  let background = this.add.tileSprite(500, 500, 1000, 1000, "background");

  let player = this.add.sprite(100, 100, "player");

  let enemy = this.add.sprite(1000, Phaser.Math.Between(20, 890), "enemy");

  this.update = function () {
    background.tilePositionX += 2;

    if (this.input.mousePointer.leftButtonDown()) {
      player.y -= 5;
    } else {
      player.y += 5;
    }
    if (player.y < 0) {
      player.y = 0;
    }
    if (player.y > 800) {
      player.y = 800;
    }

    enemy.x -= 5;
    if (enemy.x < 0) {
      enemy.x = 1000;
      enemy.y = Phaser.Math.Between(20, 980);
    }
    //collision detection
    let distance = Phaser.Math.Distance.Between(
      player.x,
      player.y,
      enemy.x,
      enemy.y
    );
    if (distance < 200) {
      enemy.destroy();

      let text = this.add.text(
        500,
        500,
        "Noooo! You have been\nturned into\nEGGPLANT PARMESAN.\nClick to Restart",
        {
          fontSize: "64px",
          align: "center",
        }
      );

      text.setOrigin(0.5, 0.5);

      //Restart
      this.input.once(
        "pointerdown",
        function (this: Scene) {
          this.scene.restart();
        },
        this
      );
    }
  };
}

// Hello world example
const config: Phaser.Types.Core.GameConfig = {
  //Game dimensions
  width: 1000,
  height: 1000,
  //Game scenes
  scene: {
    preload: preloadScene,
    create: gameScene,
  },
};

const EggplantNightmare: NextPage = () => {
  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom>
        {"Eggplant's Nightmare"}
      </Typography>
      <PhaserComponent config={config} />
    </>
  );
};

export default EggplantNightmare;
