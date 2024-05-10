// Select the form element using the data-form attribute
const form = document.querySelector('[data-form]');

// Select the result element using the data-result attribute
const result = document.querySelector('[data-result]');

// Select the dividend input element by its ID
const dividendInput = document.querySelector('#dividend');

// Select the divider input element by its ID
const dividerInput = document.querySelector('#divider');

// Add an event listener to the form for the 'submit' event
form.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the trimmed values from the dividend and divider input fields
  const dividend = dividendInput.value.trim();
  const divider = dividerInput.value.trim();

  // Check if either input field is empty
  if (dividend === '' || divider === '') {
    // If either input is empty, display an error message and return
    result.innerText =
      'Division not performed. Both values are required in inputs. Try again.';
    return;
  }

  // Convert the dividend and divider strings to numbers
  const dividendNum = parseInt(dividend, 10);
  const dividerNum = parseInt(divider, 10);

  // Check if either input couldn't be converted to a valid number
  if (Number.isNaN(dividendNum) || Number.isNaN(dividerNum)) {
    // If either input is not a valid number, log a critical error and throw an exception
    const criticalError = new Error(
      'Something critical went wrong. Please reload the page',
    );
    console.error('Critical error:', criticalError.stack);
    document.body.innerHTML =
      '<h1>Something critical went wrong. Please reload the page</h1>';
    throw criticalError;
  }

  // Check if the divider is zero
  if (dividerNum === 0) {
    // If the divider is zero, display an error message and log an error
    result.innerText =
      'Division not performed. Invalid number provided. Try again';
    console.error(
      'Division not performed. Try again',
      new Error('Invalid number provided.').stack,
    );
    return;
  }

  // Perform the division and display the result (using Math.floor to round down)
  result.innerText = Math.floor(dividendNum / dividerNum);
});
