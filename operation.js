let operationArr = [];

let parentOutputSmallValue = document.createElement('div');
parentOutputSmallValue.classList.add('parentOutputSmallValue');
document.querySelector('.calculator').append(parentOutputSmallValue)


// let outPut = document.querySelector('.outputValue').value;

let smallOutputValue = document.createElement('div');
smallOutputValue.textContent = ''
smallOutputValue.classList.add('smallOutputValue');
parentOutputSmallValue.append(smallOutputValue)

function operation() {


	let operationSambo = ['/', '*', '-', '+']

	document.querySelectorAll('.rowI, .rowII, .rowIII, .rowIV, .rowsV').forEach(H => {


		H.addEventListener('click', () => {

			if (document.querySelector('.outputValue').value == 0) {

				document.querySelector('.outputValue').value = ''

			}


			if (!isNaN(Number(H.innerHTML))) {

				operationArr.push(H.innerHTML)

				document.querySelector('.outputValue').value += H.innerHTML

			}

			for (let i of operationSambo) {

				if (i == H.innerHTML && operationArr.length > 0) {

					operationArr.push(H.innerHTML)

					document.querySelector('.outputValue').value += H.innerHTML

				}

			}

			if (H.innerHTML == '=') {

				if (document.querySelector('.smallOutputValue')) {

					document.querySelectorAll('.smallOutputValue, .parentOutputSmallValue').forEach(H => {

						H.remove();

					})

				}



				document.querySelector('.outputValue').value = eval(operationArr.join(''))

				while (operationArr.length > 0) {

					operationArr.pop()

				}

				operationArr.push(document.querySelector('.outputValue').value)

			}

			console.log(operationArr)

			if (H.innerHTML == 'C') {

				while (operationArr.length > 0) {

					operationArr.pop()

				}

				if (document.querySelector('.smallOutputValue')) {
					document.querySelector('.smallOutputValue').textContent = '';
				}

				document.querySelector('.outputValue').value = 0;


			}

			console.log(operationArr)
			if (H.innerHTML == '&gt;') {

				let arrNumber = []


				// arrNumber.push()

				let items = String(document.querySelector('.outputValue').value).split('').map(J => {

					if (!isNaN(Number(J))) {
						return Number(J)
					}
					else {
						return J
					}

				})

				for (let J of items) {

					arrNumber.push(J);

				}

				arrNumber.pop();
				operationArr.pop();


				document.querySelector('.outputValue').value *= 0

				document.querySelector('.outputValue').value = arrNumber.join('')

			}

		})

	})

}

function keyboard() {

	document.addEventListener('keydown', (H) => {

		let operationSambo = ['/', '*', '-', '+']

		if (document.querySelector('.outputValue').value == 0) {
			document.querySelector('.outputValue').value = ''
		}


		for (let i of operationSambo) {

			if (!isNaN(Number(H.key)) || i == H.key) {

				document.querySelector('.outputValue').value += H.key;

				operationArr.push(H.key);

				break;

			}

		}

		if (H.key == '=' || H.key == 'Enter') {


			document.querySelector('.smallOutputValue').textContent = document.querySelector('.outputValue').value

			document.querySelector('.outputValue').value = eval(operationArr.join(''))

			while (operationArr.length > 0) {
				operationArr.pop();
			}
			operationArr.push(document.querySelector('.outputValue').value)

			console.log(operationArr)
		}

		if (H.key == 'Backspace') {


			let arrNumber = []


			// arrNumber.push()

			let items = String(document.querySelector('.outputValue').value).split('').map(J => {

				if (!isNaN(Number(J))) {
					return Number(J)
				}
				else {
					return J
				}

			})

			for (let J of items) {

				arrNumber.push(J);

			}

			arrNumber.pop();
			operationArr.pop();


			document.querySelector('.outputValue').value *= 0

			document.querySelector('.outputValue').value = arrNumber.join('')




		}


	})

}

export { operation, keyboard };
