input.onButtonPressed(Button.A, function () {
    while (true) {
        for (let index = 0; index <= 4; index++) {
            if (idx_sprite >= 5) {
                break;
            }
            S[idx_sprite].set(LedSpriteProperty.Y, index)
            basic.pause(200)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (idx_sprite == 4) {
        idx_sprite = 5
        for (let i = 0; i <= 4; i++) {
            if (S[i].get(LedSpriteProperty.Y) != 2) {
                success = 0
                basic.showIcon(IconNames.No)
            }
        }
        success = 1
        basic.showIcon(IconNames.Diamond)
    }
    idx_sprite += 1
    music.playTone(262, music.beat(BeatFraction.Whole))
})
let idx_sprite = 0
let S: game.LedSprite[] = []
let success = 0
success = 2
S.push(game.createSprite(0, 0))
S.push(game.createSprite(1, 0))
S.push(game.createSprite(2, 0))
S.push(game.createSprite(3, 0))
S.push(game.createSprite(4, 0))
idx_sprite = 0
basic.forever(function () {
    if (success == 1) {
        music.playTone(523, music.beat(BeatFraction.Whole))
    } else if (success == 0) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
