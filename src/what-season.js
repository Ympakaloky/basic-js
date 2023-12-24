const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  const seasons = ['spring', 'summer', 'autumn (fall)', 'winter', 'Unable to determine the time of year!', 'Invalid date!'];
  if (date === undefined) {
    return seasons[4];
  }

  if (!(date instanceof Date) || (!Date.parse(date)) || Object.getOwnPropertyNames(date).length) {
    throw Error(seasons[5]);
  };

  if (date.getMonth() === 2 || date.getMonth() === 3 || date.getMonth() === 4) {
    return seasons[0];
  } else if (date.getMonth() === 5 || date.getMonth() === 6 || date.getMonth() === 7) {
    return seasons[1];
  } else if (date.getMonth() === 8 || date.getMonth() === 9 || date.getMonth() === 10) {
    return seasons[2];
  } else if (date.getMonth() === 11 || date.getMonth() === 0 || date.getMonth() === 1) {
    return seasons[3];
  };
};

module.exports = {
  getSeason
};
