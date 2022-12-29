

function kmToMiles(kilometers) {
    return kilometers * 0.621371;
  }

function milesToKm(miles) {
    return miles * 1.60934;
  }

// Convert paces/speeds down to meters/sec then re-calculate back to desired pace/speed

// ************
// MIN PER MILE
function tpmTomps(timePerMile){
  // time per mile to mins per sec
  const [minutes, seconds] = timePerMile.split(':').map(Number); // Split the time string into minutes and seconds
  const timeInSeconds = minutes * 60 + seconds; // Convert the time to seconds
  const metersPerSecond = 1609.34 / timeInSeconds; // Convert seconds per mile to meters per second
  return metersPerSecond;
}
function mpsTotpm(metersPerSecond){
  // mins per sec to time per mile
  const secondsPerMile = 1609.34 / metersPerSecond;   // Convert meters per second to seconds per mile
  const minutes = Math.floor(secondsPerMile / 60);  // Convert seconds per mile to minutes and seconds
  const seconds = Math.round(secondsPerMile % 60);  // Convert seconds per mile to minutes and seconds
  const timePerMile = `${minutes}:${seconds.toString().padStart(2, '0')}`;  // Format the time as a string
  return timePerMile;
}

// **************
// MILES PER HOUR
function mphTomps(mph){
// miles per hour to mins per sec
  const kph = milesToKm(mph);
  const mps = kph / 3.6;
  return mps; 
  }
function mpsTomph(mps){
// mins per sec to miles per hour
  const kph = mps * 3.6;
  const mph = kph / 1.60934;
  return mph;
}

// ***********
// MIN PER KM
function tpkTomps(timePerKm){
  // time per km to mins per sec
  const [minutes, seconds] = timePerKm.split(':').map(Number); // Split the time string into minutes and seconds
  const timeInSeconds = minutes * 60 + seconds;   // Convert the time to seconds
  const metersPerSecond = 1000 / timeInSeconds;   // Convert seconds per kilometer to meters per second
  return metersPerSecond;
    }
function mpsTotpk(metersPerSecond){
  // mins per sec to time per km
  const secondsPerKilometer = 1000 / metersPerSecond;   // Convert meters per second to seconds per kilometer
  const minutes = Math.floor(secondsPerKilometer / 60); // Convert seconds per kilometer to minutes and seconds
  const seconds = Math.round(secondsPerKilometer % 60); // Convert seconds per kilometer to minutes and seconds
  const timePerKilometer = `${minutes}:${seconds.toString().padStart(2, '0')}`; // Format the time as a string
  return timePerKilometer;
  }


// KPH
function kphTomps(kph){
  // km per hour to mins per sec
  const mps = kph / 3.6;
  return mps;
  }
function mpsTokph(mps){
  // mins per sec to km per hour
  const kph = mps * 3.6;
  return kph;
  }


function ConvertDist(sourceForm, targetForm) {

  // A simple wrapper function to validate input before making the conversion
  var sourceValue = sourceForm.unit_input.value;

  // First check if the user has given numbers or anything that can be made to one...
  sourceValue = parseFloat(sourceValue);
  if (!isNaN(sourceValue) || sourceValue == 0) {
    // If we can make a valid floating-point number, put it in the text box and convert!
    sourceForm.unit_input.value = sourceValue;
  }

  var form = sourceForm;
  var result = sourceForm.unit_input.value;

  switch (form.name) {
    case "form_1a":
      targetForm.unit_input.value = kmToMiles(result);
      break;
    case "form_1b":
      targetForm.unit_input.value = milesToKm(result);
      break;
  }}





function ConvertFromTo(sourceForm, targetForm) {

  var form = document.sourceForm;

  switch (form.name) {
    case "form_1a":
      result = kmToMiles(result);
      break;
    case "form_1b":
      result = milesToKm(result);
      break;
    default:
      console.log("x is not 1 or 2");
  }


    // var formname 
    
    // formname = sourceForm.unit_input.name;
    // // formname = document.forms[0].name;
    // // formid = 
    // result = sourceForm.unit_input.value;

    

    // if (formname == "form_1a") {
    //     result = kmToMiles(result)
    // } else if (formname == "form_1b") {
    //     result = milesToKm(result)
    // }
    
    targetForm.unit_input.value = result;

}
