function isLeapYear(year) { return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0; }
function daysInMonth(year, month) { return new Date(year, month, 0).getDate(); }
function formatDate(date) { return date.toISOString().split('T')[0]; }
function addDays(date, days) { const d = new Date(date); d.setDate(d.getDate() + days); return d; }

module.exports = { isLeapYear, daysInMonth, formatDate, addDays };
