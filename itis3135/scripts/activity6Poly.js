window.onload = function() 
{
    var clickMeButton = document.getElementById("clickMe");
    clickMeButton.onclick = start;
}


function start()
{
    var number = window.prompt("Enter a number 0-10 to find your shape"); 
    validateEntry(number);
}

//Validates the Entry an also kinda drives the code 
function validateEntry(number)
 {
    if(number <= 10 && number >= 0)
    {
        getShape(number);
    } else {
        while(number > 10 || number < 0)
        {
            number = window.prompt("Number is not valid, make sure the number is between 0 - 10.")
        }        
        getShape(number);
    }
}
//Gets the shape based of of number and rteturns the value to the screen
function getShape(number) 
{
    if(number == 0)
    {
        alert("you have no sides so there for you are no polygon");
    } else if(number == 1)
    {
        alert("henagon");
    } else if(number == 2)
    {
        alert("digon	");
    } else if(number == 3)
    {
        alert("trigon");
    } else if(number == 4)
    {
        alert("tetragon");
    } else if(number == 5)
    {
        alert("pentagon");
    } else if(number == 6)
    {
        alert("Hexagon");
    } else if(number == 7)
    {
        alert("Heptagon");
    } else if(number == 8)
    {
        alert("Octagon");
    } else if(number == 9)
    {
        alert("Enneagon");
    } else if(number == 10)
    {
        alert("Dekagon");
    }
}


