function groupBy(arr, key) { return arr.reduce((acc, item) => { const k = typeof key === 'function' ? key(item) : item[key]; (acc[k] = acc[k] || []).push(item); return acc; }, {}); }
function sortBy(arr, key) { return [...arr].sort((a, b) => (a[key] > b[key] ? 1 : -1)); }
function countBy(arr, key) { return arr.reduce((acc, item) => { const k = typeof key === 'function' ? key(item) : item[key]; acc[k] = (acc[k] || 0) + 1; return acc; }, {}); }
function keyBy(arr, key) { return arr.reduce((acc, item) => { acc[item[key]] = item; return acc; }, {}); }
function pluck(arr, key) { return arr.map(item => item[key]); }

module.exports = { groupBy, sortBy, countBy, keyBy, pluck };
