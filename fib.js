//Simple function used to access elements on the html DOM
var $ = function (id) 
{
    return document.getElementById(id);
}

// Main program function that accepts user input for the total number of the
//Fibonacci series to show and the then runs a loop to create the output

var generate = function () 
{
	var intCount = parseInt($("total_fib").value);  //gets user input from the DOM
	
	//validate user input that intCount is a number and intCount is not less than 2 or intCount not greater than 100
	if (isNaN(intCount) || intCount < 2 || intCount > 100) {
        //tell user that their input is wrong
        alert("Number is invalid. Try again.");
        //blank out the input box before entering new number
        $("total_fib").value = "";
        $("output").value = "";
    }
    //continue with program if input is valid, begin loop to display fibonacci numbers
    else {
    
	var i=0;  // sets the first number in the Fibonacci series to 0
	var j=1;  //sets the second number in the Fibonacci series to 1
	var k;    //k is calculated by adding i+j and represents the next Fibonacci number
	var stringOutput = "0 1 ";//initialize the Fibonacci series output to include the first two numbers

	// write whatever kind of loop you want, given the above info, to generate the appropriate
	// number of fibonacci numbers and then post it to the html DOM
    
//while loop to calculate fibonacci numbers
//condition intCount greater than 2 because stringOuput is already defined to have "0 1 "
    while (intCount > 2) {
        k = i + j;
        i = j;
        j = k;
        //add k to the end of the stringOutput before continuing the loop
        stringOutput += k + " ";
        //decrease intCount by one to continue/change ouput of loop
        intCount--;
        }
    //output the number of fibonacci numbers requested by the user input number
    $("output").value = stringOutput;
    
    }
}; 

// Push solution back to Output  through DOM

window.onload = function () 
{
    $("total_fib").value = "";
    $("output").value = "";
    $("generate").onclick = generate; //runs the generate function when clicked
};  