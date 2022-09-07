let words = ["alma", "Alça", "albalı"];
const checkPrefix = (orgWords) => {
  let words = orgWords.map((word) => word.toLowerCase());
  if (words.length === 1) {
    return false;
  } else {
    let i = 0;
    while (words.every((word) => word[i] === words[0][i])) i++;

    return i === 0 ? false : words[0].slice(0, i);
  }
};

console.log(checkPrefix(words));
