const referenceTable = [
    {mph: 5,    '0%': '12:31','1%': '11:44','2%': '11:05','3%': '10:32','4%': '10:03','5%': '9:38', '6%': '9:16', '7%': '8:56', '8%': '8:38', '9%': '8:22', '10%': '8:07'},
    {mph: 6,    '0%': '10:26','1%': '9:52', '2%': '9:24', '3%': '9:00', '4%': '8:38', '5%': '8:19', '6%': '8:02', '7%': '7:46', '8%': '7:32', '9%': '7:19', '10%': '7:07'},
    {mph: 6.5,  '0%': '9:37', '1%': '9:09', '2%': '8:45', '3%': '8:23', '4%': '8:04', '5%': '7:47', '6%': '7:32', '7%': '7:18', '8%': '7:05', '9%': '6:53', '10%': '6:43'},
    {mph: 7,    '0%': '8:56', '1%': '8:32', '2%': '8:10', '3%': '7:51', '4%': '7:34', '5%': '7:19', '6%': '7:05', '7%': '6:53', '8%': '6:41', '9%': '6:31', '10%': '6:21'},
    {mph: 7.5,  '0%': '8:20', '1%': '7:59', '2%': '7:40', '3%': '7:23', '4%': '7:08', '5%': '6:54', '6%': '6:42', '7%': '6:31', '8%': '6:20', '9%': '6:11', '10%': '6:02'},
    {mph: 8,    '0%': '7:49', '1%': '7:30', '2%': '7:13', '3%': '6:58', '4%': '6:45', '5%': '6:32', '6%': '6:21', '7%': '6:11', '8%': '6:01', '9%': '5:52', '10%': '5:44'},
    {mph: 8.5,  '0%': '7:22', '1%': '7:05', '2%': '6:50', '3%': '6:36', '4%': '6:24', '5%': '6:13', '6%': '6:02', '7%': '5:53', '8%': '5:44', '9%': '5:36', '10%': '5:29'},
    {mph: 9,    '0%': '6:57', '1%': '6:42', '2%': '6:28', '3%': '6:16', '4%': '6:05', '5%': '5:55', '6%': '5:45', '7%': '5:37', '8%': '5:29', '9%': '5:21', '10%': '5:14'},
    {mph: 9.5,  '0%': '6:35', '1%': '6:22', '2%': '6:09', '3%': '5:58', '4%': '5:48', '5%': '5:39', '6%': '5:30', '7%': '5:22', '8%': '5:14', '9%': '5:08', '10%': '5:01'},
    {mph: 10,   '0%': '6:15', '1%': '6:03', '2%': '5:52', '3%': '5:42', '4%': '5:32', '5%': '5:24', '6%': '5:16', '7%': '5:08', '8%': '5:02', '9%': '4:55', '10%': '4:49'},
    {mph: 10.5, '0%': '5:57', '1%': '5:46', '2%': '5:36', '3%': '5:27', '4%': '5:18', '5%': '5:10', '6%': '5:03', '7%': '4:56', '8%': '4:50', '9%': '4:44', '10%': '4:38'},
    {mph: 11,   '0%': '5:41', '1%': '5:31', '2%': '5:22', '3%': '5:13', '4%': '5:05', '5%': '4:58', '6%': '4:51', '7%': '4:45', '8%': '4:39', '9%': '4:33', '10%': '4:28'},
    {mph: 12,   '0%': '5:13', '1%': '5:04', '2%': '4:56', '3%': '4:49', '4%': '4:42', '5%': '4:36', '6%': '4:30', '7%': '4:24', '8%': '4:19', '9%': '4:14', '10%': '4:10'}
]


function UpdateTreadmill() {
    // Get the values of the input fields
    var form_6a = document.getElementById('form_6a').value; //speed value
    var form_6b = document.getElementById('form_6b').value; //speed unit
    var form_6c = document.getElementById('form_6c').value; //incline 
    var form_6d = document.getElementById('form_6d').value; //pace unit
    
    // Update the output field based on the input values
    var output = document.getElementById('form6_output');
    output.value = form_6a + ' ' + form_6b + ' ' + form_6c + ' ' + form_6d //getPace(form_6a, form_6b, form_6c, form_6d); 
  }


function getPace(speed, incline) {
    incline = incline.slice(0, -1); // remove the '%' sign from the incline string
  
    // Find the row in the table that corresponds to the given speed
    const row = table.find(r => r[0] === speed);
    if (!row) throw new Error(`Invalid speed: ${speed} MPH`);
  
    // Return the pace at the given incline
    return row[incline];
  }

  function interpolate(table, row1, row2, value) {
    // Calculate the difference between the two rows
    const rowDiff = table[row2] - table[row1];
    // Calculate the difference between the value you want to calculate and the value of the starting row
    const valDiff = value - table[row1];
    // Calculate the estimated value by adding the product of the row difference and value difference to the value of the starting row
    const estimatedVal = table[row1] + (rowDiff * valDiff);
    return estimatedVal;
  }

  function interpolate(val1, val2, table) {
    // Find the indices of the two values in the table
    const index1 = table.findIndex(entry => entry.value === val1);
    const index2 = table.findIndex(entry => entry.value === val2);
  
    // Check if either value is not present in the table
    if (index1 === -1 || index2 === -1) {
      return null;
    }
  
    // Calculate the interpolation factor
    const factor = (val2 - val1) / (index2 - index1);
  
    // Interpolate the values in the table and return the result
    return table[index1].estimate + factor * (table[index2].estimate - table[index1].estimate);
  }