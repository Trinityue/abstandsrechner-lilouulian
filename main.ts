input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    while (input.buttonIsPressed(Button.A)) {
        music.playMelody("C - C - C - C - ", 120)
        basic.setLedColor(0x00ff00)
        if (grove.measureInCentimeters(DigitalPin.C16) < 1) {
            music.stopMelody(MelodyStopOptions.All)
            music.playMelody("C - C - C - C - ", 200)
        } else if (grove.measureInCentimeters(DigitalPin.C16) < 2) {
            music.stopMelody(MelodyStopOptions.All)
            music.playMelody("C - C - C - C - ", 195)
        } else if (grove.measureInCentimeters(DigitalPin.C16) < 3) {
            music.stopMelody(MelodyStopOptions.All)
            music.playMelody("C - C - C - C - ", 190)
        } else if (grove.measureInCentimeters(DigitalPin.C16) < 4) {
            music.stopMelody(MelodyStopOptions.All)
            music.playMelody("C - C - C - C - ", 185)
        } else if (grove.measureInCentimeters(DigitalPin.C16) < 5) {
            music.stopMelody(MelodyStopOptions.All)
            music.playMelody("C - C - C - C - ", 180)
            basic.setLedColor(0xff0000)
        } else if (grove.measureInCentimeters(DigitalPin.C16) < 6) {
            music.stopMelody(MelodyStopOptions.All)
            music.playMelody("C - C - C - C - ", 170)
        } else if (grove.measureInCentimeters(DigitalPin.C16) < 7) {
            music.stopMelody(MelodyStopOptions.All)
            music.playMelody("C - C - C - C - ", 160)
        } else if (grove.measureInCentimeters(DigitalPin.C16) < 8) {
            music.stopMelody(MelodyStopOptions.All)
            music.playMelody("C - C - C - C - ", 150)
        } else if (grove.measureInCentimeters(DigitalPin.C16) < 9) {
            music.stopMelody(MelodyStopOptions.All)
            music.playMelody("C - C - C - C - ", 140)
        } else if (grove.measureInCentimeters(DigitalPin.C16) < 10) {
            music.stopMelody(MelodyStopOptions.All)
            music.playMelody("C - C - C - C - ", 130)
        } else if (grove.measureInCentimeters(DigitalPin.C16) < 11) {
            music.stopMelody(MelodyStopOptions.All)
            music.playMelody("C C C C C C C C ", 120)
        }
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    music.stopMelody(MelodyStopOptions.All)
})
basic.forever(function () {
    basic.showNumber(grove.measureInCentimeters(DigitalPin.C16))
})
