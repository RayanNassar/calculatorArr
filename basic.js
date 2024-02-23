function basic() {

    let basicCssFile = document.createElement('link');
    basicCssFile.rel = 'styleSheet';
    basicCssFile.href = 'basic.css';
    basicCssFile.classList.add('basicCssFile');
    document.head.append(basicCssFile);

    document.querySelectorAll('.rowII, .rowIII, .rowIV').forEach(H => {


        if (!isNaN(Number(H.innerHTML))) {

            H.style.backgroundColor = 'black';

        }

    })

    document.querySelectorAll('.rowsV').forEach(H => {

        H.style.backgroundColor = 'black'

    })

    document.querySelectorAll('.rowsV')[3].style.backgroundColor = '#6ad439'

    if (document.querySelector('.backgroundCssFile')) {

        document.querySelector('.backgroundCssFile').remove()

    }



    if (document.querySelector('.imagePhoto')) {

        document.querySelectorAll('.imagePhoto').forEach(H =>{
            H.remove()
        })

    }

    document.querySelector('.elementLineSplitParent').style.display = 'none'
    document.querySelector('.elementLineSplitParent').style.gridArea = '1/4'


}

export default basic