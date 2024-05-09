const form = document.querySelector('[data-form]');
const result = document.querySelector('[data-result]');
const dividendInput = document.querySelector('#dividend');
const dividerInput = document.querySelector('#divider');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  const dividend = dividendInput.value.trim();
  const divider = dividerInput.value.trim();

  if (dividend === '' || divider === '') {
    result.innerText =
      'Division not performed. Both values are required in inputs. Try again.';
    return;
  }

  const dividendNum = parseInt(dividend, 10);
  const dividerNum = parseInt(divider, 10);

  if (
    Number.isNaN(dividendNum) ||
    Number.isNaN(dividerNum) ||
    dividerNum === 0
  ) {
    result.innerText =
      'Division not performed. Invalid number provided. Try again';
    console.error(
      'Division not performed. Try again',
      new Error(' Invalid number provided.').stack,
    );
    return;
  }

  result.innerText = Math.floor(dividendNum / dividerNum);
});
