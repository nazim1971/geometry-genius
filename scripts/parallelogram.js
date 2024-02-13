function calculateParallelogramArea() {
    const parallelogramBase = document.getElementById('parallelogram-base');
    const parallelogramBaseInput = parseFloat(parallelogramBase.value) ;

    const parallelogramHeight = document.getElementById('parallelogram-height');
    const parallelogramHeightInput = parseFloat(parallelogramHeight.value);

    const calculate = parallelogramBaseInput * parallelogramHeightInput;

    const area = document.getElementById('parallelogram-area');
    area.innerText = calculate;
}