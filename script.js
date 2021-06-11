let dInput = 0
let radius = 0
let area = 0

document.getElementById('right').onclick = movePageRight

function movePageRight () {
  document.body.style.backgroundColor = 'steelblue'
  document.getElementById('left').style.display = 'block'
  document.getElementById('right').style.display = 'none'
  document.getElementById('page').innerHTML = 'Circumferance'
}

document.getElementById('left').onclick = movePageLeft

function movePageLeft () {
  document.body.style.backgroundColor = 'ghostwhite'
  document.getElementById('left').style.display = 'none'
  document.getElementById('right').style.display = 'block'
  document.getElementById('page').innerHTML = 'Area'
}

document.getElementById('area-calculate-button').addEventListener('click', areaCalculate)

function areaCalculate () {
  dInput = document.getElementById('d-input').value
  dInput = parseInt(dInput)
  radius = dInput / 2
  area = Math.PI * radius ** 2
  alert(area)
}

document.getElementById('d-input').addEventListener('focusout', test)

function test () {
  dInput = document.getElementById('d-input').value
  dInput = parseInt(dInput)
  radius = dInput / 2
  document.getElementById('radius').style.display = 'block'
  document.getElementById('radius-result').innerHTML = radius
  if (document.getElementById('d-input').value === '') {
    document.getElementById('radius').style.display = 'none'
  }
}
