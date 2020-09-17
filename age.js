//Declare Age, Days, Months, Weeks, and Fortnights variables
var floatAge, floatDays, floatMonths, intWeeks, intFortnights;
//Ask user to input age
     floatAge = parseFloat(prompt("Enter Your Age"));
     //Calculate Days by multiplying age by 365.25
     floatDays = parseFloat(floatAge*365.25).toFixed(2);
     //Calculate Months by multiplying age by 12
     floatMonths = parseFloat(floatAge*12).toFixed(2);
     //Calculate weeks by dividing days by 7
     intWeeks = parseInt(floatDays/7);
     //Calculate fortnights by dividing days by 14
     intFortnights = parseInt(floatDays/14);
     //Present calculated Age, Days, Months, Weeks, and Fortnights to user
     alert("Age = " + floatAge + " years, " + floatDays + " days, " + floatMonths + " months, " + intWeeks + " weeks, " + intFortnights + " fortnights");