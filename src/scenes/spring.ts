import Phaser from "phaser";

export default class SpringScene extends Phaser.Scene {
    private cursors?: Phaser.Types.Input.Keyboard.CursorKeys;
    private score: number = 0;
    private scoreText?: Phaser.GameObjects.Text;

    constructor() {
        super({ key: "SpringScene" });
    }

    create() {
        let image = this.add.image(
            this.cameras.main.width / 2,
            this.cameras.main.height / 2,
            "springBackground"
        );
        let scaleX = this.cameras.main.width / image.width;
        let scaleY = this.cameras.main.height / image.height;
        let scale = Math.max(scaleX, scaleY);
        image.setScale(scale).setScrollFactor(0);
        const message = `Phaser v${Phaser.VERSION}`;
        this.add
            .text(this.cameras.main.width - 15, 15, message, {
                color: "#000000",
                fontSize: "24px",
            })
            .setOrigin(1, 0);
        this.input.keyboard?.createCursorKeys();
        this.cursors = this.input.keyboard?.createCursorKeys();
        this.scoreText = this.add.text(16, 16, "Score: " + this.score, {
            fontSize: "32px",
            color: "#000",
        });
    }

    update() {
        if (this.cursors?.left.isDown) {
            null;
        } else if (this.cursors?.right.isDown) {
            this.scene.start("SummerScene", { score: this.score });
        } else if (this.cursors?.up.isDown) {
            this.score += 1;
            this.scoreText?.setText("Score: " + this.score);
        } else if (this.cursors?.down.isDown) {
            this.score -= 1;
            this.scoreText?.setText("Score: " + this.score);
        }
        this.events.emit("transferScore", this.score);
    }
}
