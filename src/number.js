function clamp(num, min, max) { return Math.min(Math.max(num, min), max); }
function isEven(n) { return n % 2 === 0; }
function isOdd(n) { return n % 2 !== 0; }
function round(num, decimals) { return Number(Math.round(num + 'e' + decimals) + 'e-' + decimals); }

module.exports = { clamp, isEven, isOdd, round };
