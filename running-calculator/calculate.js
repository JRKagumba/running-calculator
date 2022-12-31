import * as convTools from 'convert.js';


function ensureDistanceFormat(radioButton, textInput) {
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
  

function calculatePace(distance, time) {
    // Split the time string into hours, minutes, and seconds
    const [hours, minutes, seconds] = time.split(':');
  
    // Convert hours, minutes, and seconds to total seconds
    const totalSeconds = (parseInt(hours, 10) * 3600) + (parseInt(minutes, 10) * 60) + parseInt(seconds, 10);
  
    // Calculate pace in meters per second
    const pace = distance / totalSeconds;
  
    // Return the pace in meters per second
    return pace.toFixed(2);
  }
  

function calculateTime(distance, speed) {
    // Calculate total seconds
    const totalSeconds = distance / speed;

    // Calculate hours, minutes, and seconds
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    // Format time as 'hh:mm:ss'
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
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


  

  
  
  
