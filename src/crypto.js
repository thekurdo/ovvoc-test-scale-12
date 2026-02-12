const crypto = require('crypto');
function md5(str) { return crypto.createHash('md5').update(str).digest('hex'); }
function sha256(str) { return crypto.createHash('sha256').update(str).digest('hex'); }
function randomHex(bytes) { return crypto.randomBytes(bytes || 16).toString('hex'); }

module.exports = { md5, sha256, randomHex };
