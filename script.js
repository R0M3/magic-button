var magicButtonClick = () => {
    var input = document.getElementById("input").value;
    input = isNaN(input) ? input : parseInt(input);
    myFunction(input);
}

var myFunction = (input) => {
    // your code here
    
    // create output
    document.getElementById("output").innerHTML = input;
}