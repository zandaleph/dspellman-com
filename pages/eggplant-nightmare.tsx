import Typography from "@mui/material/Typography";
import { NextPage } from "next/types";
import { type Scene } from "phaser";
import PhaserComponent from "../components/phaser/PhaserComponent";

function preload(this: Scene) {
  this.load.setBaseURL("http://labs.phaser.io");

  this.load.image("sky", "assets/skies/space3.png");
  this.load.image("logo", "assets/sprites/phaser3-logo.png");
  this.load.image("red", "assets/particles/red.png");
}

function create(this: Scene) {
  this.add.image(400, 300, "sky");

  var particles = this.add.particles("red");

  var emitter = particles.createEmitter({
    speed: 100,
    scale: { start: 1, end: 0 },
    blendMode: "ADD",
  });

  var logo = this.physics.add.image(400, 100, "logo");

  logo.setVelocity(100, 200);
  logo.setBounce(1, 1);
  logo.setCollideWorldBounds(true);

  emitter.startFollow(logo);
}

// Hello world example
const config: Phaser.Types.Core.GameConfig = {
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: {
    preload: preload,
    create: create,
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
