/* Sets up variables 'dInput', 'radius', 'area', 'circumference', and 'page'. Assigns the number 0 to the first four variables and the number 1 to the last variable */
let dInput = 0
let radius = 0
let area = 0
let circumference = 0
let page = 1
/* On the click on the right arrow element with an id of 'right', the program will activate the function 'movePageRight' */
document.getElementById('right').onclick = movePageRight
/* When the function is activated, the background color will change, the left arrow the id of 'left' will appear with the page description of 'area', and the right arrow that was clicked on will disappear along with the page description 'circumference' as well. The main title of the website will change it's innerHTML from 'Area of a Circle Calculator' to 'Circumference of a Circle Calculator'. The image of the area of a circle formula will change to the image of the formula for a circumference, and both images will be replaced with the same image with the number 2 next to their name that has the matching colour to the background. The result section will be hidden, as well as the calculated value of the radius and whatever was inputted into the diameter input box. Finally, the value of the 'page' variable will be increased by one and assigned to that variable. */
function movePageRight () {
  document.body.style.backgroundColor = '#ffbc42'
  document.getElementById('left').style.display = 'block'
  document.getElementById('area-page-title').style.display = 'block'
  document.getElementById('right').style.display = 'none'
  document.getElementById('circumference-page-title').style.display = 'none'
  document.getElementById('page').innerHTML = 'Circumference'
  document.getElementById('formula-image1').style.display = 'none'
  document.getElementById('formula-image2').style.display = 'block'
  document.getElementById('circle-diagram').style.display = 'none'
  document.getElementById('circle-diagram2').style.display = 'block'
  document.getElementById('result-section').style.display = 'none'
  document.getElementById('radius').style.display = 'none'
  document.getElementById('d-input').value = ''
  page = page + 1
}
/* On the click of the left arrow button element with the id 'left', the function 'movePageLeft' will be activated. */
document.getElementById('left').onclick = movePageLeft
/* Once this function is activated it will behave opposite to the 'movePageRight' function. The background colour will change back to its original colour. The left arrow with its page title will be hidden and the right arrow with its page title will appear again. The innerHTML of the title of the webpage will change back to say 'Area' instead of 'Circumference', and the formula for the area of a circle will appear again, as well as the original images with the matching background colour. The result section and the calculated radius value will be hidden, and whatever numbers were typed into the diameter input box will be cleared. Lastly, the value of the 'page' variable will be reduced by 1 and be assigned back to that variable. */
function movePageLeft () {
  document.body.style.backgroundColor = 'ghostwhite'
  document.getElementById('left').style.display = 'none'
  document.getElementById('area-page-title').style.display = 'none'
  document.getElementById('right').style.display = 'block'
  document.getElementById('circumference-page-title').style.display = 'block'
  document.getElementById('page').innerHTML = 'Area'
  document.getElementById('formula-image1').style.display = 'block'
  document.getElementById('formula-image2').style.display = 'none'
  document.getElementById('circle-diagram').style.display = 'block'
  document.getElementById('circle-diagram2').style.display = 'none'
  document.getElementById('result-section').style.display = 'none'
  document.getElementById('radius').style.display = 'none'
  document.getElementById('d-input').value = ''
  page = page - 1
}
/* Listens for a click on the button 'calculate-button' and activates the function 'calculate' */
document.getElementById('calculate-button').addEventListener('click', calculate)
/* If the variable 'page' has a value equal to 1, then the program will perform the area of a circle calculation. Whatever is typed into the 'd-input' input box as the diameter will be turned into an integer and assigned to the variable dInput. The value of dInput will be divided by 2 and assigned to the variable 'radius'. Then, the program will calculate PI times the radius value squared and assign the final result to the variable 'area'. That value will be rounded to two decimal places. The result section will be displayed and the formula, with the variable of the radius placed into the innerHTML, as well as the final result of the area will be displayed. The area of a circle 'formula1' will be displayed into the result box, and the circumference 'formula2' will be hidden. If the variable 'page' has a value equal to 2, then the program will perform the circumference of a circle calculation. The lines of code are mostly the same, except the program will calculate 2 by PI by the radius and assign the final result to the 'circumference' variable, rounding the result to two decimal places, and display that result into the result-section under the circumference 'formula2'. */
function calculate () {
  if (page === 1) {
    dInput = document.getElementById('d-input').value
    dInput = parseInt(dInput)
    radius = dInput / 2
    area = Math.PI * radius ** 2
    area = area.toFixed (2)
    document.getElementById('area-result').innerHTML = area
    document.getElementById('radius-result').innerHTML = radius
    document.getElementById('result-section').style.display = 'block'
    document.getElementById('formula1').style.display = 'block'
    document.getElementById('formula2').style.display = 'none'
  } else if (page === 2) {
    dInput = document.getElementById('d-input').value
    dInput = parseInt(dInput)
    radius = dInput / 2
    circumference = 2 * Math.PI * radius
    circumference = circumference.toFixed (2)
    document.getElementById('area-result2').innerHTML = circumference
    document.getElementById('radius-result2').innerHTML = radius
    document.getElementById('result-section').style.display = 'block'
    document.getElementById('formula1').style.display = 'none'
    document.getElementById('formula2').style.display = 'block'
  }
}
/* When the user clicks outside of the 'd-input' diameter input box after typing in a value, the program will activate the function 'radiusOutput' */
document.getElementById('d-input').addEventListener('focusout', radiusOutput)
/* When the function activates, the program will take whatever value was typed into the input box and assign it to the variable 'dInput' and turn it into an integer. The program will divide that value in half and assign the result to the variable 'radius'. If there are no values inside the input box when the user clicks out of it, then the result of the radius calculation won't appear. If there is a value, then a line of text will appear and display in the innerHTML the radius of the circle based on the diameter that the user has inputted */
function radiusOutput () {
  dInput = document.getElementById('d-input').value
  dInput = parseInt(dInput)
  radius = dInput / 2
  document.getElementById('radius').style.display = 'block'
  document.getElementById('radius-input').innerHTML = radius
  if (document.getElementById('d-input').value === '') {
    document.getElementById('radius').style.display = 'none'
  }
}
