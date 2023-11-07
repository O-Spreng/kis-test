
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
        result = result.concat(stem + prefix.toLowerCase() + 'ay');
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
      result = result.concat(stem + prefix.toLowerCase() + 'ay');
      stem = "";
      prefix = "";
      reachedFirstVowel = false;
    }

  }

  console.log(result);
  return result;
}

translate('Stop');
translate('No littering');
translate('No shirts, no shoes, no service');
translate('No persons under 14 admitted');
translate('Hey buddy, get away from my car!');

translate('This is the story of 1 man, a man named Stanley!');
translate('IeaAou');
translate('Fontaine, 14');
translate('brasil tem farofa, feijao e carne');


