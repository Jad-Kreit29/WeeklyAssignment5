let dInput = 0
let radius = 0
let area = 0
let circumferance = 0
let page = 1

document.getElementById('right').onclick = movePageRight

function movePageRight () {
  document.body.style.backgroundColor = '#ffbc42'
  document.getElementById('left').style.display = 'block'
  document.getElementById('area-page-title').style.display = 'block'
  document.getElementById('right').style.display = 'none'
  document.getElementById('circumference-page-title').style.display = 'none'
  document.getElementById('page').innerHTML = 'Circumferance'
  document.getElementById('formula-image1').style.display = 'none'
  document.getElementById('formula-image2').style.display = 'block'
  document.getElementById('circle-diagram').style.display = 'none'
  document.getElementById('circle-diagram2').style.display = 'block'
  document.getElementById('area-result-section').style.display = 'none'
  document.getElementById('radius').style.display = 'none'
  document.getElementById('d-input').value = ''
  document.getElementById('area-calculate-button')
  page = page + 1
}

document.getElementById('left').onclick = movePageLeft

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
  document.getElementById('area-result-section').style.display = 'none'
  document.getElementById('radius').style.display = 'none'
  document.getElementById('d-input').value = ''
  page = page - 1
}

document.getElementById('area-calculate-button').addEventListener('click', areaCalculate)

function areaCalculate () {
  if (page === 1) {
    dInput = document.getElementById('d-input').value
    dInput = parseInt(dInput)
    radius = dInput / 2
    area = Math.PI * radius ** 2
    document.getElementById('area-result').innerHTML = area
    document.getElementById('radius-result').innerHTML = radius
    document.getElementById('area-result-section').style.display = 'block'
    document.getElementById('formula1').style.display = 'block'
    document.getElementById('formula2').style.display = 'none'
  } else if (page === 2) {
    dInput = document.getElementById('d-input').value
    dInput = parseInt(dInput)
    radius = dInput / 2
    circumferance = 2 * Math.PI * radius
    document.getElementById('area-result2').innerHTML = circumferance
    document.getElementById('radius-result2').innerHTML = radius
    document.getElementById('area-result-section').style.display = 'block'
    document.getElementById('formula1').style.display = 'none'
    document.getElementById('formula2').style.display = 'block'
  }
}

document.getElementById('d-input').addEventListener('focusout', test)

function test () {
  dInput = document.getElementById('d-input').value
  dInput = parseInt(dInput)
  radius = dInput / 2
  document.getElementById('radius').style.display = 'block'
  document.getElementById('radius-input').innerHTML = radius
  if (document.getElementById('d-input').value === '') {
    document.getElementById('radius').style.display = 'none'
  }
}
