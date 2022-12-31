import * as convTools from 'convert.js';

const dictionary = {
    "Marathon": 42200,
    "Half-Marathon": 21100
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
  

  
  
  
