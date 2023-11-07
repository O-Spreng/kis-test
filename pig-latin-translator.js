
function translate(input) {
  const VALID_LETTER_REGEXP = /[a-z]/i; //Match single caracter in the range between a to z and is case-insensitive
  const VOWELS = ['a','e','i','o','u','y'];

  let result = "";
  let prefix = "";
  let stem = "";
  let reachedFirstVowel = false;

  // TODO: run through word and stop at first vowel

  // iterate through entire string
  for (let i = 0; i < input.length; i++) {

    // check if character is a valid letter - working well
    if (input[i].match(VALID_LETTER_REGEXP)) {

      // check if current character is not a vowel
      if (!VOWELS.includes(input[i]) && reachedFirstVowel === false) {
        // if consonant and not reached the first vowel, add it to the prefix
        console.log("é uma consoante, e ainda não alcançou a primeira vogal");
        prefix = prefix.concat(input[i]);
      } else if (reachedFirstVowel === false) {
        // if vowel and not reached the first vowel, this means it is the first vowel, adding it to the stem and changing flat to true
        console.log("é uma vogal, e ainda não alcançou a primeira vogal");
        reachedFirstVowel = true
        stem = stem.concat(input[i]);
      } else {
        // whatever valid letter after reaching the first vowel is added to the stem
        console.log("é uma vogal, ou uma consoante, e já alcançou a primeira vogal")
        stem = stem.concat(input[i]);
      }

    } else { // otherwise push anything else into result. - working well
      result = result.concat(input[i]);
    }

    // run string, push character if not word,
    // find word, set it to current word, pop it from the input str

    // work changes in word, push to result
    // run word, stop at first vowel
    // push anything before first vowel to end + ay

  }

  //temp log stem + prefix
  console.log(result);

  console.log(result);
  return result;
}

translate('brasil');