


function kmToMiles(kilometers) {
    const conversionFactor = 0.621371;
    return kilometers * conversionFactor;
  }

function milesToKm(miles) {
const conversionFactor = 1.60934;
return miles * conversionFactor;
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