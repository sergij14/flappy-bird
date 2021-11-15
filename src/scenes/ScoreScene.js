import Phaser from "phaser";
import { BaseScene } from "./BaseScene";

export class ScoreScene extends BaseScene {
  constructor(config) {
    super("ScoreScene", { ...config, canGoBack: true });
  }

  create() {
    super.create();
    const bestScore = localStorage.getItem("bestScore") || 0;
    this.add
      .text(...this.screenCenter, `Best Score: ${bestScore}`, this.fontOptions)
      .setOrigin(0.5, 1);
  }
}
