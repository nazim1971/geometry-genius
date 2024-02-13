function calculateTriangleArea(){
   const triangleBaseInput = document.getElementById('triangle-base');
   const triangleBaseText = triangleBaseInput.value;
   const base = parseFloat(triangleBaseText);
     
   const triangleHeightInput = document.getElementById('triangle-height');
   const triangleHeightText = triangleHeightInput.value;
   const height = parseFloat(triangleHeightText);

   const calculate = base * height *0.5;
   console.log(calculate);

   const triangleAreaSpan = document.getElementById('triangle-area');
   triangleAreaSpan.innerText = calculate;

}