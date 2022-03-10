function welcome()                      // alert welcome message
{
    alert("Welcome To Your Calculator!");
}

function clearScreen()                  // function to clear the screen
{
    document.getElementById("result").value = "";
}
   
function calculate()                    // function to calculate the output value
{
    p = document.getElementById("result").value;
    q = eval(p);
    if(q == Infinity)
    {
        alert("Divide by zero not possible!");
        clearScreen();
    }
    else if(q == undefined)
    {
        alert("Enter some input!");
        document.getElementById("result").value = "";
    }
    else
    {
        clearScreen();
        display(q);
    }
}

function display(value)                 // function to display the output value
{
    document.getElementById("result").value += value;
}
