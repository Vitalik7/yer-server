const host = 'localhost';

module.exports = {
    port: process.env.port || process.env.PORT || '8080',
     mongoUrl: process.env.MONGODB_URI || `mongodb://test:test123@ds135844.mlab.com:35844/yer-wedding`  // Vitalik db

    };
