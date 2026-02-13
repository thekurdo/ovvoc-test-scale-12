function currency(num, symbol) { return `${symbol || '$'}${num.toFixed(2)}`; }
function percentage(num) { return `${(num * 100).toFixed(1)}%`; }
function padLeft(str, len, char) { return String(str).padStart(len, char || ' '); }
function padRight(str, len, char) { return String(str).padEnd(len, char || ' '); }

module.exports = { currency, percentage, padLeft, padRight };
