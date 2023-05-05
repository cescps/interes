const d = document;
const baseInput = d.querySelector('#base');
const rateInput = d.querySelector('#rate');
const monthlyInput = d.querySelector('#monthly');
const yearsInput = d.querySelector('#years');
const resultContainer = d.querySelector('.result-container');

const baseSaving = (i, P, t) => P * (Math.pow((i * 0.01 + 1), t));
const monthlySaving = (i, d, t) => (d * 12) * (Math.pow((i * 0.01 + 1), t) - 1) / ((i * 0.01 + 1) - 1);
const baseAndMonthlySaving = (i, P = 0, d, t) => baseSaving(i, P, t) + monthlySaving(i, d, t);

window.addEventListener('keyup', () => {
  const result = baseAndMonthlySaving(rateInput.value, baseInput.value, monthly.value, yearsInput.value);
  resultContainer.innerHTML = isNaN(result) ? 'ERROR!' : Math.floor(result);
});

// Show result on load
resultContainer.innerHTML = Math.floor(
  baseAndMonthlySaving(
    rateInput.value,
    baseInput.value,
    monthly.value,
    yearsInput.value
  )
);