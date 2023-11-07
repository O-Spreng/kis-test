
function translate(input) {
  const VALID_LETTER_REGEXP = /[a-z]/i; //Match single caracter in the range between a to z and is case-insensitive
  const VOWELS = ['a','e','i','o','u','y'];

  let result = "";
  let prefix = "";
  let stem = "";
  let reachedFirstVowel = false;

  // iterate through entire string
  for (let i = 0; i < input.length; i++) {

    // check if character is a valid letter
    if (input[i].match(VALID_LETTER_REGEXP)) {

      // check if current character is not a vowel
      if (!VOWELS.includes(input[i].toLowerCase()) && reachedFirstVowel === false) {
        // if consonant and not reached the first vowel, add it to the prefix
        prefix = prefix.concat(input[i]);
      } else if (reachedFirstVowel === false) {
        // if vowel and not reached the first vowel, this means it is the first vowel, adding it to the stem and changing flat to true
        reachedFirstVowel = true
        stem = stem.concat(input[i]);
      } else {
        // whatever valid letter after reaching the first vowel is added to the stem
        stem = stem.concat(input[i]);
      }

    } else { // otherwise push anything else into result
      if (stem !== '') { //checks if stem has any content, if positive, means it has a word before, therefore pushing the word to result first
        if ((prefix && prefix[0] === prefix[0].toUpperCase()) || ( prefix === '' && stem[0] === stem[0].toUpperCase())) {
          // checks if prefix first position, or stem first position when prefix empty is uppercase
          stem = stem[0].toUpperCase().concat(stem.substring(1));
        }
        let stemArr = stem.split(''); // creates a array from stem
        if (stemArr.every((letter) => VOWELS.includes(letter.toLowerCase()) && prefix === '')) { //check if is composed only from vowels
          result = result.concat(stem + 'yay')
        } else {
          result = result.concat(stem + prefix.toLowerCase() + 'ay');
        }
        // resetting stem, prefix and
        stem = "";
        prefix = "";
        reachedFirstVowel = false;
      }
      result = result.concat(input[i]);
    }

    if (input[i+1] === undefined && input[i].match(VALID_LETTER_REGEXP)) {
      // checks if prefix first position, or stem first position when prefix empty is uppercase
      if ((prefix && prefix[0] === prefix[0].toUpperCase()) || ( prefix === '' && stem[0] === stem[0].toUpperCase())) {
        stem = stem[0].toUpperCase().concat(stem.substring(1));
      }
      let stemArr = stem.split('');
      if (stemArr.every((letter) => VOWELS.includes(letter.toLowerCase()) && prefix === '')) {
        result = result.concat(stem + 'yay')
      } else {
        result = result.concat(stem + prefix.toLowerCase() + 'ay');
      }
      stem = "";
      prefix = "";
      reachedFirstVowel = false;
    }

  }

  return result;
}

console.log('\nresult:   '+ translate('Stop'));
console.log('expected: Opstay');
console.log('\nresult:   '+ translate('No littering'));
console.log('expected: Onay itteringlay')
console.log('\nresult:   '+ translate('No shirts, no shoes, no service'));
console.log('expected: Onay irtsshay, onay oesshay, onay ervicesay')
console.log('\nresult:   '+ translate('No persons under 14 admitted'));
console.log('expected: Onay ersonspay underay 14 admitteday')
console.log('\nresult:   '+ translate('Hey buddy, get away from my car!'));
console.log('expected: Eyhay uddybay, etgay awayay omfray ymay arcay!')
console.log('\nresult:   '+ translate('This is the story of 1 man, a man named Stanley!'));
console.log('expected: Isthay isay ethay orystay ofay 1 anmay, ayay anmay amednay Anleystay!')
console.log('\nresult:   '+ translate('IeaAou'));
console.log('expected: IeaAouyay')
console.log('\nresult:   '+ translate('Fontaine street, 14'));
console.log('expected: Ontainefay eetstray, 14')
console.log('\nresult:   '+ translate('I am a developer'));
console.log('expected: Iyay amay ayay eveloperday')
console.log('\nresult:   '+ translate('I am not a powerlifter'));
console.log('expected: Iyay amay otnay ayay owerlifterpay')
