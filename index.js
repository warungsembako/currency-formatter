const { COUNTRY } = require('./constant');

function separateNumber(number, separete, separeteNumber) {
  let arrayToRupiah = [];
  let numberToString = number.toString().split('');

  let ribuan = 0;
  while (numberToString.length >= separeteNumber - 1) {
    arrayToRupiah.unshift(numberToString.pop());
    ribuan++;
    if (ribuan == separeteNumber) {
      arrayToRupiah.unshift(separete);
      ribuan = 0;
    }
  }
  let convert = '';
  if (numberToString.length > 0) {
    convert = numberToString.join('') + arrayToRupiah.join('');
  } else {
    convert = arrayToRupiah.join('');
  }

  return convert;
}

/**
 * @param {number} nominal the number we want to convert into a rupiah-formatted string
 * @returns {string} the rupiah-formatted number
 */
function numberToRupiah(number) {
  let convert = separateNumber(number, '.', 3);

  return 'Rp ' + convert + ' ,-';
}

/**
 * @param {number} nominal the number we want to convert into a dollar-formatted string
 * @returns {string} the dollar-formatted number
 */
function numberToDolar(number) {
  let convert = separateNumber(number, '.', 3);

  return '$ ' + convert;
}

/**
 * @param {number} nominal the number we want to convert into a ringgit-formatted string
 * @returns {string} the ringgit-formatted number
 */
function numberToRinggit(number) {
  let convert = separateNumber(number, '.', 3);

  return 'MYR ' + convert;
}

/**
 * @param {number} nominal the number we want to convert into a rupiah-formatted string
 * @param {string} country the default value is 'ID'
 * @returns {string} the formatted number
 */
function formatNumberToCurrency(nominal, country = COUNTRY[0]) {
  if (country == COUNTRY[0]) {
    return numberToRupiah(nominal);
  } else if (country == COUNTRY[1]) {
    return numberToDolar(nominal);
  } else if (country == COUNTRY[2]) {
    return numberToRinggit(nominal);
  } else {
    return 'The country is not valid';
  }
}

/**
 * @param {string} rupiah the number we want to convert into a rupiah-formatted string
 * @returns {number} the formatted number
 */
function formatRupiahToNumber(rupiah) {
  let number = '1234567890';
  let resultString = '';
  for (let index = 0; index < rupiah.length; index++) {
    if (number.includes(rupiah[index])) {
      resultString += rupiah[index];
    }
  }

  return parseInt(resultString, 10);
}

module.exports = { formatNumberToCurrency, formatRupiahToNumber };
