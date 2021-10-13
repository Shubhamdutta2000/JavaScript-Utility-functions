const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
function countVowels(sentence) {
  let vowelcounts = 0;
  let consocounts = 0;
  for (let i = 0; i < vowels.length; i++) {
    if (vowels.includes(sentence[i])) {
      vowelcounts++;
    }
    else {
      consocounts++;
    }
  }
  return console.log(vowelcounts, consocounts);
}