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


  

  
  
  
