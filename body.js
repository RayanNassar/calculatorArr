function main(x) {



    let rowsI = ['C', '>', '%', '/'];

    let rowsII = [7, 8, 9, '*'];

    let rowsIII = [4, 5, 6, '-'];

    let rowsIV = [1, 2, 3, '+'];

    let rowsV = ['E', 0, '.', '=']

    for (let i of rowsI) {

        let rowI = document.createElement('div');
        rowI.textContent = i;
        rowI.classList.add('rowI');
        document.querySelector('.calculator').append(rowI)

    }

    for (let i of rowsII) {

        let rowII = document.createElement('div');
        rowII.textContent = i;
        rowII.classList.add('rowII')
        document.querySelector('.calculator').append(rowII)

        if (i == '*') {

            rowII.style.background = '#6ad439'

        }

    }

    for (let i of rowsIII) {

        let rowIII = document.createElement('div');
        rowIII.textContent = i;
        rowIII.classList.add('rowIII')
        document.querySelector('.calculator').append(rowIII)

        if (i == '-') {

            rowIII.style.background = '#6ad439'

        }

    }



    for (let i of rowsIV) {

        let rowIV = document.createElement('div');
        rowIV.textContent = i;
        rowIV.classList.add('rowIV')
        document.querySelector('.calculator').append(rowIV)

        if (i == '+') {

            rowIV.style.background = '#6ad439'

        }

    }

    for (let i of rowsV) {

        let rowsV = document.createElement('div');
        rowsV.textContent = i;
        rowsV.classList.add('rowsV')
        document.querySelector('.calculator').append(rowsV)

        if (i == '=') {

            rowsV.style.background = '#6ad439'

        }

    }


}

function animations(x) {


    document.querySelectorAll('.rowI ,.rowII ,.rowIII ,.rowIV ,.rowsV').forEach(H => {
        H.addEventListener('mouseover', () => {

            H.style.transform = 'scale(1.09)'

        })

        H.addEventListener('mouseout', () => {

            H.style.transform = 'scale(1)'

        })
    })
}


export { main, animations }