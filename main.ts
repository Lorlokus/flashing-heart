input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString("Samuel")
    basic.showIcon(IconNames.Heart)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
    basic.clearScreen()
    basic.showString("Lorenzo Da Mota")
})
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        # # . . .
        # # # # #
        # # . . .
        . . . . .
        `)
    basic.showLeds(`
        # # . . #
        # # . # .
        . . # . .
        # # . # .
        # # . . #
        `)
    basic.showLeds(`
        . . . . .
        # # . . .
        # # # # #
        # # . . .
        . . . . .
        `)
    basic.showLeds(`
        # # . . #
        # # . # .
        . . # . #
        # # . # .
        # # . . #
        `)
    basic.showLeds(`
        . . . . .
        # # . . .
        # # # # #
        # # . . .
        . . . . .
        `)
    basic.showLeds(`
        # # . . #
        # # . # .
        . . # # #
        # # . # .
        # # . . #
        `)
    basic.showLeds(`
        . . . . .
        # # . . .
        # # # # #
        # # . . .
        . . . . .
        `)
    basic.showLeds(`
        # # . . #
        # # . # .
        . # # # #
        # # . # .
        # # . . #
        `)
    basic.showLeds(`
        . . . . .
        # # . . .
        # # # # #
        # # . . .
        . . . . .
        `)
    basic.showLeds(`
        # # . . #
        # # . # .
        # # # # #
        # # . # .
        # # . . #
        `)
    basic.showLeds(`
        . . . . .
        # # . . .
        # # # # #
        # # . . .
        . . . . .
        `)
    basic.showLeds(`
        # # . . #
        # # . # .
        # # # # .
        # # . # .
        # # . . #
        `)
    basic.showLeds(`
        . . . . .
        # # . . .
        # # # # #
        # # . . .
        . . . . .
        `)
    basic.showLeds(`
        # # . . #
        # # . # .
        # # # . .
        # # . # .
        # # . . #
        `)
    basic.showLeds(`
        . . . . .
        # # . . .
        # # # # #
        # # . . .
        . . . . .
        `)
    basic.showLeds(`
        # # . . #
        # # . # .
        # . # . .
        # # . # .
        # # . . #
        `)
    basic.showLeds(`
        . . . . .
        # # . . .
        # # # # #
        # # . . .
        . . . . .
        `)
    basic.showLeds(`
        # # . . #
        # # . # .
        . . # . .
        # # . # .
        # # . . #
        `)
})
