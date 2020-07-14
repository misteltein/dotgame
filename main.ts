input.onButtonPressed(Button.A, function () {
    while (idx_sprite <= 4) {
        for (let index = 0; index <= 4; index++) {
            S[idx_sprite].set(LedSpriteProperty.Y, index)
            basic.pause(200)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (idx_sprite == 4) {
        for (let i = 0; i <= 4; i++) {
            if (S[i].get(LedSpriteProperty.Y) != 2) {
                basic.showIcon(IconNames.No)
                control.reset()
            }
            basic.showIcon(IconNames.Diamond)
            control.reset()
        }
    }
    idx_sprite += 1
})
let idx_sprite = 0
let S: game.LedSprite[] = []
S.push(game.createSprite(0, 0))
S.push(game.createSprite(1, 0))
S.push(game.createSprite(2, 0))
S.push(game.createSprite(3, 0))
S.push(game.createSprite(4, 0))
idx_sprite = 0
basic.forever(function () {
	
})
