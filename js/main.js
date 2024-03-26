function clicked () {
    animation();
}
function animation () {
    var calcBtn = document.querySelector('#calc')
    calcBtn.style.transform = 'translate(-50%,-50%) scale(50)'
    calcBtn.style.opacity = '0%'
    calcBtn.style.position = 'fixed'
    setTimeout(() => {calcBtn.hidden = true},500)

    var inpBtn = document.querySelector('#inputs .L')
    inpBtn.style.marginRight = `-${getComputedStyle(inpBtn).width}`;

    var r = document.getElementById('result');
    var inpL = document.querySelector('#inputs .L');
    var inpR = document.querySelector('#inputs .R');
    if (inpL.value && inpR.value) {
        r.getElementsByClassName('result')[0].innerText = `${Math.round(compareWords(inpL.value,inpR.value)*100)}%`
    } else {
        r.getElementsByClassName('result')[0].innerText = '-100%'
    }
    r.hidden = false;
    setTimeout(() => {
        r.style.transform = 'translate(-50%,-50%) scale(1)';
        r.style.opacity = 1;
    },500)
}

function reset() {
    document.querySelector('#calc').hidden = false;
    document.querySelector('#calc').style.transform = 'translate(-50%,-50%) scale(1)'
    document.querySelector('#calc').style.opacity = '100%'
    document.querySelector('#calc').style.position = 'absolute'

    document.querySelector('#inputs .L').style.marginRight = '50%';

    var r = document.getElementById('result');
    r.hidden = true;
    r.style.transform = 'translate(-50%,-50%) scale(0)';
    r.style.opacity = 0;

    var inpL = document.querySelector('#inputs .L');
    var inpR = document.querySelector('#inputs .R');
    inpL.value = '';
    inpR.value = '';
}