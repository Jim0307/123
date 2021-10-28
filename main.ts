basic.forever(function () {
    if (input.acceleration(Dimension.X) > 512) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . # . # .
            # # . # #
            # # # # #
            `)
        music.ringTone(262)
    } else {
        basic.clearScreen()
        music.stopAllSounds()
    }
})
