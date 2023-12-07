function mouseevents()
{
    alert("Successful")
}
function mouseeventss()
{
    alert("Input field is on focus")
}

function mouseevent()
{
    alert("input field is not in focus")
}

function convertToUppercase(inputElement) {
    var inputValue = inputElement.value;
    inputElement.value = inputValue.toUpperCase();
  }
  function convertToLowercase(inputElement) {
    var inputValue = inputElement.value;
    inputElement.value = inputValue.toLowerCase();
  }

  function changeButtonColor() {
    var button = document.getElementById('myButton');
    var currentColor = window.getComputedStyle(button).backgroundColor;

    // Change to a random color
    var randomColor = getRandomColor();
    button.style.backgroundColor = randomColor;
  }
  

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }