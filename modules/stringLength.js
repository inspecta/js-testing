const stringLength = (string) => {

  if (string.length < 1 || string.length > 10) throw new Error('String must be at least 1 character and not more than 10 characters.');

  return string.length;
}
module.exports = stringLength;