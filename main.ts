input.onGesture(Gesture.TiltLeft, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(game.score())
})
input.onGesture(Gesture.TiltRight, function () {
    player.change(LedSpriteProperty.X, 1)
})
let player: game.LedSprite = null
player = game.createSprite(2, 4)
let car = game.createSprite(randint(0, 4), 0)
let speed = 200
for (let index = 0; index < 4; index++) {
    car.change(LedSpriteProperty.Y, 1)
    basic.pause(speed)
    if (car.isTouching(player)) {
        game.gameOver()
    } else {
        game.addScore(1)
        car.set(LedSpriteProperty.X, randint(0, 4))
        car.set(LedSpriteProperty.Y, 0)
        speed += -2
    }
}
