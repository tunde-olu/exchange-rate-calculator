const currencyElOne = document.getElementById("currency-one");
const amountElOne = document.getElementById("amount-one");
const currencyElTwo = document.getElementById("currency-two");
const amountElTwo = document.getElementById("amount-two");
const rateEl = document.getElementById("rate");
const swapBtn = document.getElementById("swap");

const amountOne = amountElOne.value;
const amountTwo = amountElTwo.value;

// const url = `https://api.exchangerate.host/convert?from=${currencyOne}&to=${currencyTwo}`;

function calculate() {
  const currencyOne = currencyElOne.value;
  const currencyTwo = currencyElTwo.value;
  fetch(
    `https://api.exchangerate.host/convert?from=${currencyOne}&to=${currencyTwo}`
  )
    .then((res) => res.json())
    .then(({ info: { rate } }) => {
      rateEl.textContent = `1 ${currencyOne} = ${rate} ${currencyTwo}`;
      amountElTwo.value = (amountElOne.value * rate).toFixed(2);
    });
}

// async function calculate() {
//   const currencyOne = currencyElOne.value;
//   const currencyTwo = currencyElTwo.value;

//   const fetchData = async () => {
//     const response = await fetch(
//       `https://api.exchangerate.host/convert?from=${currencyOne}&to=${currencyTwo}`
//     );
//     const data = await response.json();
//     return data;
//   };
//   const {
//     info: { rate },
//   } = await fetchData();
//   rateEl.textContent = `1 ${currencyOne} = ${rate} ${currencyTwo}`;
//   amountElTwo.value = (amountElOne.value * rate).toFixed(2);
// }

// add event listener
currencyElOne.addEventListener("change", calculate);
currencyElTwo.addEventListener("change", calculate);
amountElOne.addEventListener("input", calculate);
amountElTwo.addEventListener("input", calculate);
swapBtn.addEventListener("click", function () {
  const temp = currencyElOne.value;
  currencyElOne.value = currencyElTwo.value;
  currencyElTwo.value = temp;
  calculate();
});

calculate();
