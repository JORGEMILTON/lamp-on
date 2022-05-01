var turnOn = document.getElementById('turnOn')
var turnOff = document.getElementById('turnOff')
var light = document.getElementById('light')

function lampOn(){
light.src='lam-acesa-sf.jpg'
}

function lampOff(){
    light.src= 'lamp-desligada.jpg'
}

function lampfrag(){
    light.src = 'lamp-quebrada.jpg'
}
turnOn.addEventListener('click', lampOn)
turnOff.addEventListener('click',lampOff)

light.addEventListener('mouseover', lampOn)
light.addEventListener('mouseleave', lampOff)
light.addEventListener('dblclick', lampfrag)