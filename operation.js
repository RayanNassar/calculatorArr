function operation() {

	let operationArr = [];

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

				let parentOutputSmallValue = document.createElement('div');
				parentOutputSmallValue.classList.add('parentOutputSmallValue');
				document.querySelector('.calculator').append(parentOutputSmallValue)

				
				let outPut = document.querySelector('.outputValue').value ;
				
				let smallOutputValue = document.createElement('div');
				smallOutputValue.textContent = outPut
				smallOutputValue.classList.add('smallOutputValue');
				parentOutputSmallValue.append(smallOutputValue)

				document.querySelector('.outputValue').value = eval(operationArr.join(''))

				while(operationArr.length > 0) {

					operationArr.pop()

				}

				operationArr.push(document.querySelector('.outputValue').value)

			}

			console.log(operationArr)

			if (H.innerHTML == 'C') {

				while(operationArr.length > 0) {

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
export default operation;