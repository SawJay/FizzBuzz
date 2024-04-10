// Collect user values
function getValues() {
  let startNumber = document.getElementById('startNumber').value;
  let endNumber = document.getElementById('endNumber').value;

  startNumber = Number(startNumber)
  endNumber = Number(endNumber)

  if (isNaN(startNumber) || isNaN(endNumber)) {
    Swal.fire({
      icon: 'error',
      title: 'Oops!',
      text: 'Please enter valid numbers for CountUP! to use.',
      backdrop: false
    })
  } else if ((startNumber > endNumber) || (startNumber < 0) || (endNumber > 100)) {
    Swal.fire({
      icon: 'error',
      title: 'Oops!',
      text: 'Please enter valid numbers for CountUP! to use.',
      backdrop: false
    })
  } else {

    let generatedNumbers = generateFizzBuzz(startNumber, endNumber);

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

    tableHtml += `<tr><td class="${className}">${message}</td></tr>`;

  }

  let tbody = document.getElementById('results');
  tbody.innerHTML = tableHtml;

}