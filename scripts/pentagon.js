function calculatePentagonArea(){
    const pentagonHeight = document.getElementById('pentagon-height');
    const pentagonHeightInput = parseFloat(pentagonHeight.value);

    const pentagonWidth = document.getElementById('pentagon-width');
    const pentagonWidthInput = parseFloat(pentagonWidth.value);

    const calculate = 0.5 * pentagonHeightInput * pentagonWidthInput;

    const area = document.getElementById('pentagon-area');
    area.innerText = calculate;
}