function keys(obj) { return Object.keys(obj); }
function values(obj) { return Object.values(obj); }
function pick(obj, props) { const result = {}; props.forEach(p => { if (p in obj) result[p] = obj[p]; }); return result; }
function omit(obj, props) { const result = { ...obj }; props.forEach(p => delete result[p]); return result; }

module.exports = { keys, values, pick, omit };
