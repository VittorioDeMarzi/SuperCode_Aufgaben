function getSum() {
  const num1 = Number(document.querySelector("#num1").value);
  const num2 = Number(document.querySelector("#num2").value);
  const sum = num1 + num2;
  const output = document.querySelector(".output");
  output.innerHTML = `Sum of ${num1} and ${num2} is ${sum}`;

  calculateSum(num1, num2);
}

function calculateSum(a, b) {
  if (a === b) {
      console.log("Summe 5");
  } else {
      let sum = a + b;
      console.log("Summe: " + sum);
  }
}
