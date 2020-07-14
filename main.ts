input.onButtonPressed(Button.A, function () {
    while (true) {
        for (let index = 0; index <= 4; index++) {
            S[idx].set(LedSpriteProperty.Y, index)
            basic.pause(200)
        }
    }
})
let idx = 0
let S: game.LedSprite[] = []
S.push(game.createSprite(0, 0))
S.push(game.createSprite(1, 0))
S.push(game.createSprite(2, 0))
S.push(game.createSprite(3, 0))
S.push(game.createSprite(4, 0))
idx = 0
basic.forever(function () {
	
})
