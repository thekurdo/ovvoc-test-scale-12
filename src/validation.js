function isEmail(str) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str); }
function isURL(str) { try { new URL(str); return true; } catch { return false; } }
function isNumeric(str) { return !isNaN(parseFloat(str)) && isFinite(str); }
function isEmpty(val) { if (val == null) return true; if (Array.isArray(val) || typeof val === 'string') return val.length === 0; return Object.keys(val).length === 0; }

module.exports = { isEmail, isURL, isNumeric, isEmpty };
