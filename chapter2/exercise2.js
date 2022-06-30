/* eslint-disable linebreak-style */
/**
 * The code below tells the browser to ask you for a number
 * then if that number is `6`, it returns `true` otherwise it returns `false`
 *
 // eslint-disable-next-line linebreak-style
 * Change this code so it returns `true` when the number is greater than or equal to 10,
  and false if it is less than 10
 */

// eslint-disable-next-line no-alert
const number = Number(prompt('enter a number'));

function numberChecker() {
  if (number >= 10) {
    return true;
  }
  return false;
}

numberChecker();