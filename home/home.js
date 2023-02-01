// Get the calendar element
var calendar = document.getElementById("calendar");

// Create a new date object
var date = new Date();

// Get the current month and year
var month = date.getMonth();
var year = date.getFullYear();

// Create the calendar
createCalendar(month, year);

// Create the calendar
function createCalendar(month, year) {
  // Get the first day of the month
  var firstDay = new Date(year, month, 1);
  var startDay = firstDay.getDay();
  
  // Get the last day of the month
  var lastDay = new Date(year, month + 1, 0);
  
  // Get the number of days in the month
  var numDays = lastDay.getDate();
  
  // Create the table
  var calendar = "<table>";
  
  // Create the calendar header
  calendar += "<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>";
  
  // Create the calendar days
  calendar += "<tr>";
  for (var i = 0; i < startDay; i++) {
    calendar += "<td></td>";
  }
  for (var i = 1; i <= numDays; i++) {
    calendar += "<td>" + i + "</td>";
    if ((startDay + i) % 7 == 0) {
      calendar += "</tr><tr>";
    }
  }
  calendar += "</tr>";
  
  // End the table
  calendar += "</table>";
  
  // Add the calendar to the page
  document.getElementById("calendar").innerHTML = calendar;
}
