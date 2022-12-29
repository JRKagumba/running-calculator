

function kmToMiles(kilometers) {
    return kilometers * 0.621371;
  }

function milesToKm(miles) {
    return miles * 1.60934;
  }

// Convert paces/speeds down to meters/sec then re-calculate back to desired pace/speed

// Min per Mile
function mpmTomps(timePerMile){
  // time per mile to mins per sec
  const [minutes, seconds] = timePerMile.split(':').map(Number); // Split the time string into minutes and seconds
  const timeInSeconds = minutes * 60 + seconds; // Convert the time to seconds
  const metersPerSecond = 1609.34 / timeInSeconds; // Convert seconds per mile to meters per second
  return metersPerSecond;
}
function mpsTompm(){
  // mins per sec to time per mile

}

// MPH
function mphTomps(){
// miles per hour to mins per sec
  
  }
function mpsTomph(){
// mins per sec to miles per hour

}

// Min per Km
function mpkTomps(timePerKm){
  // time per km to mins per sec
  const [minutes, seconds] = timePerKm.split(':').map(Number); // Split the time string into minutes and seconds
  const timeInSeconds = minutes * 60 + seconds;   // Convert the time to seconds
  const metersPerSecond = 1000 / timeInSeconds;   // Convert seconds per kilometer to meters per second
  return metersPerSecond;
    }
function mpsTomph(){
  // mins per sec to time per km
  
  }


// KPH
function kphTomps(){
  // km per hour to mins per sec
    
    }
function mpsTokph(){
  // mins per sec to km per hour
  
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
