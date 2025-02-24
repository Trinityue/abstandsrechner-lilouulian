def on_button_a():
    while True:
        music.play_melody("C - C - C - C - ", 120)
        basic.set_led_color(0x00ff00)
        if grove.measure_in_centimeters(DigitalPin.C16) < 1:
            music.stop_melody(MelodyStopOptions.ALL)
            music.play_melody("C - C - C - C - ", 200)
        elif grove.measure_in_centimeters(DigitalPin.C16) < 2:
            music.stop_melody(MelodyStopOptions.ALL)
            music.play_melody("C - C - C - C - ", 195)
        elif grove.measure_in_centimeters(DigitalPin.C16) < 3:
            music.stop_melody(MelodyStopOptions.ALL)
            music.play_melody("C - C - C - C - ", 190)
        elif grove.measure_in_centimeters(DigitalPin.C16) < 4:
            music.stop_melody(MelodyStopOptions.ALL)
            music.play_melody("C - C - C - C - ", 185)
        elif grove.measure_in_centimeters(DigitalPin.C16) < 5:
            music.stop_melody(MelodyStopOptions.ALL)
            music.play_melody("C - C - C - C - ", 180)
        elif grove.measure_in_centimeters(DigitalPin.C16) < 6:
            music.stop_melody(MelodyStopOptions.ALL)
            music.play_melody("C - C - C - C - ", 170)
        elif grove.measure_in_centimeters(DigitalPin.C16) < 7:
            music.stop_melody(MelodyStopOptions.ALL)
            music.play_melody("C - C - C - C - ", 160)
        elif grove.measure_in_centimeters(DigitalPin.C16) < 8:
            music.stop_melody(MelodyStopOptions.ALL)
            music.play_melody("C - C - C - C - ", 150)
        elif grove.measure_in_centimeters(DigitalPin.C16) < 9:
            music.stop_melody(MelodyStopOptions.ALL)
            music.play_melody("C - C - C - C - ", 140)
        elif grove.measure_in_centimeters(DigitalPin.C16) < 10:
            music.stop_melody(MelodyStopOptions.ALL)
            music.play_melody("C - C - C - C - ", 130)
        elif grove.measure_in_centimeters(DigitalPin.C16) < 11:
            music.stop_melody(MelodyStopOptions.ALL)
            music.play_melody("C C C C C C C C ", 120)
            basic.set_led_color(0xff0000)
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def on_button_b():
    music.stop_melody(MelodyStopOptions.ALL)
input.on_button_event(Button.B, input.button_event_click(), on_button_b)

def on_forever():
    basic.show_number(grove.measure_in_centimeters(DigitalPin.C16))
basic.forever(on_forever)
