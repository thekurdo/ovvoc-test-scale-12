function unique(arr) { return [...new Set(arr)]; }
function flatten(arr) { return arr.flat(Infinity); }
function chunk(arr, size) { const result = []; for (let i = 0; i < arr.length; i += size) result.push(arr.slice(i, i + size)); return result; }
function compact(arr) { return arr.filter(Boolean); }
function intersection(a, b) { return a.filter(x => b.includes(x)); }

module.exports = { unique, flatten, chunk, compact, intersection };
