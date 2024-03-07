import Phaser from "phaser";

export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: "PreloadScene" });
    }

    preload() {
        this.load.image("springBackground", "assets/springBG.png");
        this.load.image("summerBackground", "assets/summerBG.png");
        this.load.image("fallBackground", "assets/fallBG.png");
        this.load.image("winterBackground", "assets/winterBG.png");
    }

    create() {
        this.scene.start("SpringScene");
    }
}
