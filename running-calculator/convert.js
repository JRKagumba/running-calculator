


function kmToMiles(kilometers) {
    return kilometers * 0.621371;
  }

function milesToKm(miles) {
    return miles * 1.60934;
  }



function CalculateUnit(sourceForm, targetForm) {
    // A simple wrapper function to validate input before making the conversion
    var sourceValue = sourceForm.unit_input.value;
  
    // First check if the user has given numbers or anything that can be made to one...
    sourceValue = parseFloat(sourceValue);
    if (!isNaN(sourceValue) || sourceValue == 0) {
      // If we can make a valid floating-point number, put it in the text box and convert!
      sourceForm.unit_input.value = sourceValue;
      ConvertFromTo(sourceForm, targetForm);
    }
  }