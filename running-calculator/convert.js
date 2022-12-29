

function kmToMiles(kilometers) {
    return kilometers * 0.621371;
  }

function milesToKm(miles) {
    return miles * 1.60934;
  }

function isTimeFormat(time) {
  // Use a regular expression to test the time string
  const pattern = /^\d?\d:\d\d$/;
  return pattern.test(time);
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
  return mph.toFixed(2);
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
  return kph.toFixed(2);
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




function ConvertPace(sourceForm, targetForm_A, targetForm_B, targetForm_C){

  var form = sourceForm;
  var result = sourceForm.unit_input.value;

  switch (form.name) {
    case "form_2a":   //TPM
      if (isTimeFormat(result)){
        // const mps = 
        targetForm_A.unit_input.value = mpsTomph(tpmTomps(result));
        targetForm_B.unit_input.value = mpsTotpk(tpmTomps(result));
        targetForm_C.unit_input.value = mpsTokph(tpmTomps(result));
      }
      
      break;
    case "form_2b":   //MPH
      // let mps = 
      targetForm_A.unit_input.value = mpsTotpm(mphTomps(result));
      targetForm_B.unit_input.value = mpsTotpk(mphTomps(result));
      targetForm_C.unit_input.value = mpsTokph(mphTomps(result));     
      break;
    case "form_2c":   //TPK
      if (isTimeFormat(result)){
        // const mps = tpkTomps(result)
        targetForm_A.unit_input.value = mpsTotpm(tpkTomps(result));
        targetForm_B.unit_input.value = mpsTomph(tpkTomps(result));
        targetForm_C.unit_input.value = mpsTokph(tpkTomps(result));
      }
      break;
    case "form_2d":   //KPH
      // const mps = kphTomps(result)
      targetForm_A.unit_input.value = mpsTotpm(kphTomps(result));
      targetForm_B.unit_input.value = mpsTomph(kphTomps(result));
      targetForm_C.unit_input.value = mpsTotpk(kphTomps(result));     
      break;
  }

}



