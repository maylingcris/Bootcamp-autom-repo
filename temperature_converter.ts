import * as promptSync from 'prompt-sync'
const prompt = promptSync();

let optionSelected : number;
let temperatureToConvert : number;
let convertedTemperature : number;

do {
    console.log(`Menu:`);
    console.log(`1. Option to convert Celsius to Kelvin`);
    console.log(`2. Option to convert Kelvin to Celsius`);
    console.log(`3. Exit`);

    
    optionSelected = parseInt(prompt("Select the desired option to convert temperature (1-3): "));

    switch (optionSelected){
        case 1:
            console.log(`Your choice was to convert Celsius to Kelvin`);
            
            temperatureToConvert = parseInt(prompt(`Provide the desired temperature to convert: `));
            if (temperatureToConvert < -273.15)
                console.log(`The minimum valid value on Celsius grades is -273.15 please try it again`);
            else{
                convertedTemperature = temperatureToConvert + 273.15;
                console.log(`The temperature has been converted`);
                console.log(`${temperatureToConvert} Celsius grades is equivalent to ${convertedTemperature} Kelvin grades`);
            }
            break;
        case 2:
            console.log(`Your choice was to convert Kelvin to Celsius`);
            
            temperatureToConvert = parseInt(prompt(`Provide the desired temperature to convert: `));
            if (temperatureToConvert < 0)
                console.log(`There are no negative temperature in Kelvin, please try it again`);
            else {
                convertedTemperature = temperatureToConvert - 273.15;
                console.log(`The temperature has been converted`);
                console.log(`${temperatureToConvert} Kelvin grades is equivalent to ${convertedTemperature} Celsius grades`);
            }
            break;
        case 3:
            console.log(`Exiting.`);
            break;
        default:
        console.log(`The option provided is invalid, please try it again later by selecting a valid option (1 or 2)`);
    }

} while (optionSelected !== 3);