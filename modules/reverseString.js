const reverseString = (string) => {
  if (string.length < 2) throw new Error('String should be 2 or more characters.');

  return string.split("").reverse().join("");
}

module.exports = reverseString;