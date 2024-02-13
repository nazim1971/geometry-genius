 /** common Function 1 */

 function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

 /** common Function 2 */

function setInnerTextById(elementId ,data){
    const element = document.getElementById(elementId)
    element.innerText = data;

}

/** -------------- rectangle ----------------- */

function calculateRectangleArea(){
    const rectangleWidth = getInputValueById('rectangle-width');
    const rectangleHeight = getInputValueById('rectangle-height');
    const calculate = rectangleWidth * rectangleHeight;
    setInnerTextById('rectangle-area',calculate);
}

/** -------------- parallelogram ----------------- */


function calculateParallelogramArea() {
    const parallelogramBase = getInputValueById('parallelogram-base');
    const parallelogramHeight = getInputValueById('parallelogram-height');
    const calculate = parallelogramBase * parallelogramHeight;
    setInnerTextById('parallelogram-area',calculate);
}

/** -------------- rhombus ----------------- */


function calculateRhombusArea(){
    const rhombusD1 = getInputValueById('rhombus-d1');
    const rhombusD2 = getInputValueById('rhombus-d2');
    const calculate = 0.5 * rhombusD1 * rhombusD2;
    setInnerTextById('rhombus-area',calculate)
 }

/** -------------- pentagon ----------------- */

function calculatePentagonArea(){
    const pentagonHeight = getInputValueById('pentagon-height');
    const pentagonWidth = getInputValueById('pentagon-width');
    const calculate = 0.5 * pentagonHeight * pentagonWidth;
    setInnerTextById('pentagon-area',calculate);
}

/** -------------- ellipse ----------------- */


function calculateEllipseArea() {
    const ellipseWidth = getInputValueById('ellipse-width');
    const ellipseHeight = getInputValueById('ellipse-height');
    const calculate = 3.1416 * ellipseWidth * ellipseHeight;
    setInnerTextById('ellipse-area',calculate);
 }

