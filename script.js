function flex () {
    var oldString = document.getElementById("oldString").value;
    var lowerString = oldString.slice(1);
    var upperLetter = oldString[0].toUpperCase();
    
    document.getElementById("newString").innerHTML = upperLetter + lowerString;
}

document.getElementById("upperCase").addEventListener('click', flex);