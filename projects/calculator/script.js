let a = "";
let b = "";
let sign = ""; //знак операции
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', '×', '÷'];

const out = document.querySelector('.calc-screen p')

function clearAll() {
	a = "";
	b = "";
	sign = "";
	finish = false;
	out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
	//нажата не кнопка
	if(!event.target.classList.contains('btn')) return;
	//нажата кнопка clearAll AC
	if(event.target.classList.contains('ac')) return;

	out.textContent = "";
	//получаю нажатую кнопку
	const key = event.target.textContent;

	//если нажата клавиша 0-9 или .
	if (digit.includes(key)) {
        if (b === '' && sign === '') {
            if (key === '.' && a.includes('.')) {
                a += '';
                out.textContent = a;
            } else {
                a += key;
                out.textContent = a;
            }
        } else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        } else {
            if (key === '.' && b.includes('.')) {
                b += '';
                out.textContent = b;
            } else {
                b += key;
                out.textContent = b;
            }
        }
        return;
    }

	//если нажата клавиша - + ÷ ×
	if (action.includes(key)){
		sign = key;
		out.textContent = sign;
		console.table(a, b, sign);
		return;
	}

	//нажата =
	if(key === '='){
		if (b === '') b = a;
		switch (sign){
			case "+":
				a = (+a) + (+b);
				break;
			case "-":
				a = a - b;
				break;
			case "×":
				a = a * b;
				break;
			case "÷":
				if(b === '0'){
					out.textContent = 'оШиБоЧкА';
					a = '';
					b = '';
					sing = '';
					return;
				}
				a = a / b;
				break;
		}
		finish = true;
		out.textContent = a;
		console.table(a, b, sign);
	}

}
const observer = new MutationObserver(
    function(mutations) {
        if (a.toString().length > 10) {
            out.style.fontSize = 400 / a.toString().length + 'px';
            if (b.toString().length > 12) {
                out.style.fontSize = 400 / b.toString().length + 'px';
            }
        } else if (b.toString().length > 10) {
            out.style.fontSize = 400 / b.toString().length + 'px';
        } else {
            out.style.fontSize = '44px';
        }
    }
);
observer.observe(out, { childList: true });