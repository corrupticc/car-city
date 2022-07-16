input.onButtonPressed(Button.A, function () {
    sprite.move(-1)
})
input.onButtonPressed(Button.B, function () {
    sprite.move(1)
})
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 4)
basic.showLeds(`
    # . # . #
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    # . # . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    # . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
let car = game.createSprite(2, 0)
let car_2 = game.createSprite(2, 0)
let car_3 = game.createSprite(2, 0)
basic.forever(function () {
    if (randint(0, 4) == 0) {
        car.set(LedSpriteProperty.X, 0)
        car.set(LedSpriteProperty.Y, 0)
        basic.pause(2000)
    }
    if (randint(0, 4) == 1) {
        car.set(LedSpriteProperty.X, 1)
        car.set(LedSpriteProperty.Y, 0)
        basic.pause(2000)
    }
    if (randint(0, 4) == 2) {
        car.set(LedSpriteProperty.X, 2)
        car.set(LedSpriteProperty.Y, 0)
        basic.pause(2000)
    }
    if (randint(0, 4) == 3) {
        car.set(LedSpriteProperty.X, 3)
        car.set(LedSpriteProperty.Y, 0)
        basic.pause(2000)
    }
    if (randint(0, 4) == 4) {
        car.set(LedSpriteProperty.X, 4)
        car.set(LedSpriteProperty.Y, 0)
        basic.pause(2000)
    }
})
basic.forever(function () {
    if (randint(0, 4) == 0) {
        car_2.set(LedSpriteProperty.X, 0)
        car_2.set(LedSpriteProperty.Y, 0)
        basic.pause(2000)
    }
    if (randint(0, 4) == 1) {
        car_2.set(LedSpriteProperty.X, 1)
        car_2.set(LedSpriteProperty.Y, 0)
        basic.pause(2000)
    }
    if (randint(0, 4) == 2) {
        car_2.set(LedSpriteProperty.X, 2)
        car_2.set(LedSpriteProperty.Y, 0)
        basic.pause(2000)
    }
    if (randint(0, 4) == 3) {
        car_2.set(LedSpriteProperty.X, 3)
        car_2.set(LedSpriteProperty.Y, 0)
        basic.pause(2000)
    }
    if (randint(0, 4) == 4) {
        car_2.set(LedSpriteProperty.X, 4)
        car_2.set(LedSpriteProperty.Y, 0)
        basic.pause(2000)
    }
})
basic.forever(function () {
    if (sprite.isTouching(car)) {
        game.gameOver()
    }
    if (sprite.isTouching(car_2)) {
        game.gameOver()
    }
    if (sprite.isTouching(car_3)) {
        game.gameOver()
    }
})
basic.forever(function () {
    car.change(LedSpriteProperty.Y, 1)
    basic.pause(500)
})
basic.forever(function () {
    car_3.change(LedSpriteProperty.Y, 1)
    basic.pause(500)
})
basic.forever(function () {
    car_2.change(LedSpriteProperty.Y, 1)
    basic.pause(500)
})
basic.forever(function () {
    if (randint(0, 4) == 0) {
        car_3.set(LedSpriteProperty.X, 0)
        car_3.set(LedSpriteProperty.Y, 0)
        basic.pause(2000)
    }
    if (randint(0, 4) == 1) {
        car_3.set(LedSpriteProperty.X, 1)
        car_3.set(LedSpriteProperty.Y, 0)
        basic.pause(2000)
    }
    if (randint(0, 4) == 2) {
        car_3.set(LedSpriteProperty.X, 2)
        car_3.set(LedSpriteProperty.Y, 0)
        basic.pause(2000)
    }
    if (randint(0, 4) == 3) {
        car_3.set(LedSpriteProperty.X, 3)
        car_3.set(LedSpriteProperty.Y, 0)
        basic.pause(2000)
    }
    if (randint(0, 4) == 4) {
        car_3.set(LedSpriteProperty.X, 4)
        car_3.set(LedSpriteProperty.Y, 0)
        basic.pause(2000)
    }
})
