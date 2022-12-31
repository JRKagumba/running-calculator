import * as convTools from 'convert.js';

const dictionary = {
    "Marathon": 42200,
    "Half-Marathon": 21100
}


function calculateSpeed(distance, time) {
    // Split the time string into minutes and seconds
    const [minutes, seconds] = time.split(':');
  
    // Convert minutes and seconds to total seconds
    const totalSeconds = (parseInt(minutes, 10) * 60) + parseInt(seconds, 10);
  
    // Calculate speed in meters per second
    const speed = distance / totalSeconds;
  
    // Return the speed in kilometers per hour
    return (speed * 3.6).toFixed(2);
  }
  
  
