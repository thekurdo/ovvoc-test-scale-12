function capitalize(str) { return str.charAt(0).toUpperCase() + str.slice(1); }
function reverse(str) { return str.split('').reverse().join(''); }
function truncate(str, len) { return str.length > len ? str.slice(0, len) + '...' : str; }
function camelCase(str) { return str.replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : ''); }

module.exports = { capitalize, reverse, truncate, camelCase };
