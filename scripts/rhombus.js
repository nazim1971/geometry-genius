 function calculateRhombusArea(){
    const rhombusD1 = document.getElementById('rhombus-d1');
    const rhombusD1Input = parseFloat(rhombusD1.value);

    const rhombusD2 = document.getElementById('rhombus-d2');
    const rhombusD2Input = parseFloat(rhombusD2.value);

    const calculate = 0.5 * rhombusD1Input * rhombusD2Input;

    const area = document.getElementById('rhombus-area');
    area.innerText = calculate;
 }