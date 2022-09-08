window.addEventListener('load',() => {
	var currentDate = new Date();
	var hours = currentDate.getHours();
	var minutes = currentDate.getMinutes();
	var day = currentDate.getDay();
	
	if (hours > 7 && hours < 15 && day >= 1 && day <= 5) {
		if (hours === 7 || hours === 14) {
			if (minutes < 45) {
				return;
			}
		}
		document.getElementById('calculator').style.display = 'none';
		document.getElementById('blocked').innerText = 'The owner of this webpage has locked it between 7:45 am to 2:45 pm on weekdays.';
	}
});

function submit() {
	const first = document.getElementById('first').value
	const second = document.getElementById('second').value
	const el = document.getElementById('percentage')
	const text = document.getElementById('percentValue')

	var output = calc(first,second);
	el.style.display = 'inline';

	if (output === -1) {
		alert('Don\'t do that')
		text.innerText = 'ERROR';
		return;
	} else if (output === -2) {
		const randomPercent = Math.ceil(Math.random()*50)+25;
		text.innerText = `${randomPercent}%`;
		return;
	}

	output = Math.floor(output*100)/100
	text.innerText = `${output}%`;
}

const maxDeviation = 25; //a vs z 156.25
function calc (first, second) {
	first = first.toLowerCase();
	second = second.toLowerCase();

	var firstAr = [];
	var secondAr = [];
	
	for (let i = 0; i < first.length; i++) {
		if (second.charCodeAt(i) >= 97 && second.charCodeAt(i) <= 122) {
			firstAr.push(first.charCodeAt(i)-97);
		}
	}
	for (let i = 0; i < second.length; i++) {
		if (second.charCodeAt(i) >= 97 && second.charCodeAt(i) <= 122) {
			secondAr.push(second.charCodeAt(i)-97);
		}
	}
	
	var firstTotal = 0;
	var secondTotal = 0;
	
	for (let i = 0; i < firstAr.length; i++) {
		firstTotal = firstTotal + firstAr[i];
	}
	for (let i = 0; i < secondAr.length; i++) {
		secondTotal = secondTotal + secondAr[i];
	}
	
	firstTotal = firstTotal/firstAr.length;
	secondTotal = secondTotal/secondAr.length;
	
	
	var average = (firstTotal+secondTotal)/2;
	var deviation = (Math.pow(firstTotal-average,2) + Math.pow(secondTotal-average,2))/2

	/*
	alert(`
		${firstTotal}\n
		${secondTotal}\n
		${deviation}
	`)//*/

	var percent = (maxDeviation-deviation)/(maxDeviation/100);

	if (percent > 100) {
		percent = 100;
	} else if (percent < 0) {
		percent = 0;
	}

	if (first === 'niko' || second === 'niko') {
		return -1;
	}/* else if (first === 'reuben' || second === "reuben") {
		if (first != second) {
			return -2;
		}
	}//*/
	
	return percent;
}
