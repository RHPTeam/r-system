/**
 * define config project
 * team RHP
 * fs.readFileSync(file) - file contain private keys
 * Link Youtube: https://www.youtube.com/watch?v=o2RBvg7Bb9A
 * Link Gen Keys: http://travistidwell.com/jsencrypt/demo/ (SHA256)
 */
module.exports = {
    ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 8888,
    URL: process.env.BASE_URL || 'http://localhost:8888',
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://YOUR_URI',
    MONGODB_ATLAS_PW: process.env.MONGODB_ATLAS_PW || 'admin',
    JWT_SECRET: "MIIEowIBAAKCAQEAjBGqyXsaSJtOE6lnbqGaywf1VvbY99CMkfBZTGle+PwtpcFW"
};
