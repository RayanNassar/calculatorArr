function output () {

    let elementLineSplitParent = document.createElement('div')
    elementLineSplitParent.classList.add('elementLineSplitParent');
    document.querySelector('.calculator').append(elementLineSplitParent);


    let elementLineSplitChild = document.createElement('div');
    elementLineSplitChild.classList.add('elementLineSplitChild');
    elementLineSplitParent.append(elementLineSplitChild)

    let outputValue = document.createElement('input');
    outputValue.classList.add('outputValue');
    outputValue.value = ' ' + 0;
    document.querySelector('.calculator').append(outputValue);

}

export default output;