// import * as convTools from 'convert.js';


function ensureDistanceFormat(textInput, radioButton) {
    if (!radioButton.checked) {
      // select the radio button if it is not already selected
      radioButton.checked = true;
    }
    if (textInput.value.trim() === "") {
      // set the value of the text input to a default string if it is empty
      textInput.value = "Please enter a value";
    }
  }


function ensureTimeFormat(timeInput) {
    // regular expression to match time in 'hh:mm:ss' or 'mm:ss' format
    const timeFormat = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$|^[0-5]?[0-9]:[0-5][0-9]$/;
  
    if (!timeFormat.test(timeInput.value)) {
      // set the value of the time input to a default string if it is not in the correct format
      timeInput.value = "00:00:00";
    }
  }

function ensurePaceFormat(input, type) {
    if (type === "mins:sec/mile" || type === "mins:sec/km") {
      // regular expression to match pace in 'mm:ss' format
      const paceFormat = /^[0-5]?[0-9]:[0-5][0-9]$/;
      if (!paceFormat.test(input.value)) {
        // set the value of the input to a default string if it is not in the correct format
        input.value = "00:00";
      }
    } else if (type === "kph" || type === "mph") {
      if (isNaN(input.value)) {
        // set the value of the input to a default number if it is not a valid number
        input.value = 0;
      }
    }
  }

function convertSpeed(mps, units) {
    if (units === 'mm:ss/mi') {
        // Convert meters per second to minutes per mile
        const secondsPerMile = 1609.34 / mps;   // Convert meters per second to seconds per mile
        const minutes = Math.floor(secondsPerMile / 60);  // Convert seconds per mile to minutes and seconds
        const seconds = Math.round(secondsPerMile % 60);  // Convert seconds per mile to minutes and seconds
        const timePerMile = `${minutes}:${seconds.toString().padStart(2, '0')}`;  // Format the time as a string
        return timePerMile;
    } else if (units === 'mm:ss/km') {
        // Convert meters per second to minutes per km
        const secondsPerKilometer = 1000 / mps;   // Convert meters per second to seconds per kilometer
        const minutes = Math.floor(secondsPerKilometer / 60); // Convert seconds per kilometer to minutes and seconds
        const seconds = Math.round(secondsPerKilometer % 60); // Convert seconds per kilometer to minutes and seconds
        const timePerKilometer = `${minutes}:${seconds.toString().padStart(2, '0')}`; // Format the time as a string
        return timePerKilometer;
    } else if (units === 'mph') {
        // Convert meters per second to miles per hour
        const mph = mps * 2.23694;
        return `${mph.toFixed(2)}`;
    } else if (units === 'kph') {
        // Convert meters per second to km per hour
        const kph = mps * 3.6;
        return `${kph.toFixed(2)}`;
    }
  }

function calculatePace(distance, dist_units, time, pace_units) {
    // Convert distance to meters
    if (dist_units === 'km') {
      distance = distance * 1000;
    } else if (dist_units === 'mi') {
      distance = distance * 1609.34;
    }
  
    // Convert time to seconds
    const timeComponents = time.split(':');
    let timeInSeconds = 0;
    if (timeComponents.length === 3) {
      // Time is in 'hh:mm:ss' format
      timeInSeconds += parseInt(timeComponents[0]) * 3600;
      timeInSeconds += parseInt(timeComponents[1]) * 60;
      timeInSeconds += parseInt(timeComponents[2]);
    } else if (timeComponents.length === 2) {
      // Time is in 'mm:ss' format
      timeInSeconds += parseInt(timeComponents[0]) * 60;
      timeInSeconds += parseInt(timeComponents[1]);
    }
    
    const pace = distance / timeInSeconds;  // Calculate speed in meters per second
    return convertSpeed(pace, pace_units);
  }
  

function UpdatePace() {   
    // Get the values of the input fields
    var form_3a = document.getElementById('form_3a').value; //distance value
    var form_3b = document.querySelector('input[name="form_3b"]:checked').value; //distance unit
    var form_3c = document.getElementById('form_3c').value; //time value
    var form_3d = document.getElementById('form_3d').value; //pace unit

    // Update the output field based on the input values
    var output = document.getElementById('form3_output');
    output.value = calculatePace(form_3a, form_3b, form_3c, form_3d);
}



function calculateTime(distance, dist_units, speed, speed_units) {
    // Convert distance to meters
    if (dist_units === 'km') {
      distance = distance * 1000;
    } else if (dist_units === 'mi') {
      distance = distance * 1609.34;
    }
    
    // Convert speed to meters per second
    if (speed_units === 'mm:ss/mi') {
        // Split pace into minutes and seconds
        const paceComponents = speed.split(':');
        const minutes = parseInt(paceComponents[0]);
        const seconds = parseInt(paceComponents[1]);
        // Calculate speed in meters per second
        speed =  1609.44 / ((minutes * 60) + seconds);
    } else if (speed_units === 'mm:ss/km') {
        // Split pace into minutes and seconds
        const paceComponents = speed.split(':');
        const minutes = parseInt(paceComponents[0]);
        const seconds = parseInt(paceComponents[1]);
        // Calculate speed in meters per second
        speed =  1000 / ((minutes * 60) + seconds);
    } else if (speed_units === 'mph') {
      // Convert miles per hour to meters per second
      speed = speed / 2.23694;
    } else if (speed_units === 'kph') {
      // Convert km per hour to meters per second
      speed = speed / 3.6;
    }
    
    // Calculate time in seconds
    const timeInSeconds = distance / speed;
        
    // Convert time to 'hh:mm:ss' format
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = Math.round(timeInSeconds % 60);

    const hoursString = hours.toString().padStart(2, '0');
    const minutesString = minutes.toString().padStart(2, '0');
    const secondsString = seconds.toString().padStart(2, '0');
    
    const time = hoursString + ':' + minutesString + ':' + secondsString;
    return time
  }
  
function UpdateTime() {
    // Get the values of the input fields
    var form_4a = document.getElementById('form_4a').value; //distance value
    var form_4b = document.querySelector('input[name="form_4b"]:checked').value; //distance unit
    var form_4c = document.getElementById('form_4c').value; //pace value
    var form_4d = document.getElementById('form_4d').value; //pace unit

    
    // Update the output field based on the input values
    var output = document.getElementById('form4_output');
    output.value = calculateTime(form_4a, form_4b, form_4c, form_4d); 

}

function calculateDistance(time, speed) {
    // Split the time string into hours, minutes, and seconds
    const [hours, minutes, seconds] = time.split(':');

    // Convert hours, minutes, and seconds to total seconds
    const totalSeconds = (parseInt(hours, 10) * 3600) + (parseInt(minutes, 10) * 60) + parseInt(seconds, 10);

    // Calculate distance in meters
    const distance = totalSeconds * speed;

    // Return the distance in kilometers
    return (distance / 1000).toFixed(2);
    }


  

  
  
  
