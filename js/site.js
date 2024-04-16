// Collect user values
function getValues() {
  let fizzValue = document.getElementById('fizzValue').value;
  let buzzValue = document.getElementById('buzzValue').value;

  fizzValue = Number(fizzValue)
  buzzValue = Number(buzzValue)

  if (isNaN(fizzValue) || isNaN(buzzValue)) {
    Swal.fire({
      icon: 'error',
      title: 'Oops!',
      text: 'Please enter valid numbers for FizzBuzz to use.',
      backdrop: false
    })
  } else if ((fizzValue > buzzValue) || (fizzValue < 0) || (buzzValue > 100)) {
    Swal.fire({
      icon: 'error',
      title: 'Oops!',
      text: 'Please enter valid numbers for FizzBuzz to use.',
      backdrop: false
    })
  } else {

    let generatedNumbers = generateFizzBuzz(fizzValue, buzzValue);

    displayFizzBuzz(generatedNumbers);
  }

}

function generateFizzBuzz(fizzValue, buzzValue) {
  let fizzbuzzResults = [];

  for (let index = 1; index <= 100; index += 1) {

    let message;

    if (index % fizzValue == 0 && index % buzzValue == 0) {
      message = 'FizzBuzz';
    }

    else if (index % fizzValue == 0) {
      message = 'Fizz';
    }

    else if (index % buzzValue == 0) {
      message = 'Buzz';
    }

    else {
      message = index;
    }

    fizzbuzzResults.push(message);

  }

  return fizzbuzzResults;

}

function displayFizzBuzz(fizzbuzzResults) {

  let tableHtml = '';

  for (let index = 0; index < fizzbuzzResults.length; index += 1) {

    let message = fizzbuzzResults[index];

    let className = '';

    tableHtml += `<tr><td class="${message}">${message}</td></tr>`;

  }

  let tbody = document.getElementById('results');
  tbody.innerHTML = tableHtml;

}