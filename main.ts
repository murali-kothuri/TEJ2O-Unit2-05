/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Murali Kothuri
 * Created on: Feb 2026
 * This program shows the temperature into kelvin
*/

let currentTemperature: number
let currentTemperatureIntoKelvin: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
  // get light value
  currentTemperature = input.temperature()
  currentTemperatureIntoKelvin = (currentTemperature + 273.15)
  currentTemperatureIntoKelvin = Math.round(currentTemperatureIntoKelvin)

  // output answer
  basic.clearScreen()
  basic.showString('The temperature is: ' + currentTemperatureIntoKelvin.toString() + ' K.')
})
