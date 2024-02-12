function calculateRectangleArea(num){
    const rectangleWidth = document.getElementById('rectangle-width');
    const rectangleWidthInput = parseFloat(rectangleWidth.value);
    
    const rectangleHeight = document.getElementById('rectangle-height');
    const rectangleHeightInput = parseFloat(rectangleHeight.value) ;

    const calculate = rectangleWidthInput * rectangleHeightInput;
    
    const triangleAreaSpan = document.getElementById('rectangle-area');
    triangleAreaSpan.innerText = calculate;
}