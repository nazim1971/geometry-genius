 function calculateEllipseArea() {
    const ellipseWidth = document.getElementById('ellipse-width');
    const ellipseWidthInput = parseFloat(ellipseWidth.value);

    const ellipseHeight = document.getElementById('ellipse-height');
    const ellipseHeightInput = parseFloat(ellipseHeight.value);

    const calculate = 3.1416 * ellipseHeightInput * ellipseWidthInput;

    const area = document.getElementById('ellipse-area');
    area.innerText = calculate;
 }