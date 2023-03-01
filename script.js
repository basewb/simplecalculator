let input = document.getElementById('input');

function buttonClicked(buttonValue) {
  input.value += buttonValue;
}

function clearInput() {
  input.value = '';
}

function deleteDigit() {
  input.value = input.value.slice(0, -1);
}

function calculateResult() {
  input.value = eval(input.value);
}
