import Phaser from "phaser";

export default class SummerScene extends Phaser.Scene {
    private scoreText?: Phaser.GameObjects.Text;
    private cursors?: Phaser.Types.Input.Keyboard.CursorKeys;
    private score: number;
    constructor() {
        super({ key: "SummerScene" });
    }
    init(data: { score: number }) {
        this.score = data.score;
    }

    create() {
        let image = this.add.image(
            this.cameras.main.width / 2,
            this.cameras.main.height / 2,
            "summerBackground"
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
            this.scene.start("FallScene", { score: this.score });
        } else if (this.cursors?.up.isDown) {
            this.score += 1;
            this.scoreText?.setText("Score: " + this.score);
        } else if (this.cursors?.down.isDown) {
            this.score -= 1;
            this.scoreText?.setText("Score: " + this.score);
        }
    }
}
