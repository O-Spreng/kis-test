
function translate(input) {
  const VALID_LETTER_REGEXP = /[a-z]/i; //Match single caracter in the range between a to z and is case-insensitive
  const VOWELS = ['a','e','i','o','u'];

  let result = "";

  // TODO: run through word and stop at first vowel

  // iterate through entire string
  for (let i = 0; i < input.length; i++) {

    // check if character is a valid letter - working well
    if (input[i].match(VALID_LETTER_REGEXP)) {
      console.log('Valid letter');
      result = result.concat(input[i]);
    } else { // otherwise push anything else into result. - working well
      result = result.concat(input[i]);
    }

    // run string, push character if not word,
    // find word, set it to current word, pop it from the input str

    // work changes in word, push to result
    // run word, stop at first vowel
    // push anything before first vowel to end + ay

  }

  console.log(result);
  return result;
}

translate(', No .');