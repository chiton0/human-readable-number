module.exports = function toReadable (number) {
  if(number === 0) {
    return 'zero';
  }
  let part = number % 100;
  let hundreds = Math.floor(number / 100);
  let hundredsPart = hundreds ? collection1[hundreds] + ' hundred': '';
  let tens = part % 100 && hundreds ? ' ': '' ;
  let ones = '';

  if (part < 20){
    tens += collection1[number % 20];
  } else {
    let index = Math.floor((part - 20)/10);
    tens += collection2[index]
    ones = part % 10 ? ' ' + collection1[part % 10] : '';
  }
  return hundredsPart + tens + ones;
}
collection1 = ['', 'one', 'two', 'three', 'four', 'five', 'six','seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

collection2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
